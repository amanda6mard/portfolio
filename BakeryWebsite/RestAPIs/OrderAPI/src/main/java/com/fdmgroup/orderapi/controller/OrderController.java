package com.fdmgroup.orderapi.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fdmgroup.orderapi.dao.OrderDAO;
import com.fdmgroup.orderapi.model.Order;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.headers.Header;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/orders")
public class OrderController {
	private OrderDAO orderDao;

	public OrderController(OrderDAO orderDao) {
		super();
		this.orderDao = orderDao;
	}

	@Operation(method = "POST", description = "Creates a new Order resource", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }, headers = {
					@Header(name = "location", description = "the location where the Order resource is accessible", required = true) }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@PostMapping
	public ResponseEntity<Order> createOrder(@Valid @RequestBody Order order, BindingResult bindingResult) {
		ResponseEntity<Order> responseEntity;
		if (bindingResult.hasErrors()) {
			responseEntity = ResponseEntity.badRequest().build();
		} else {
			Order createdOrder = orderDao.create(order);
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(createdOrder.getId()).toUri();
			responseEntity = ResponseEntity.created(location).body(createdOrder);
		}
		return responseEntity;
	}
	@Operation(method = "GET", description = "Returns a list of all Order resources", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }) })
	@GetMapping
	public List<Order> readAllOrders() {
		return orderDao.read();
	}

	@Operation(method = "GET", description = "Returns a single Order resource", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "404", content = { @Content(mediaType = "application/json") }) })
	@GetMapping("/{id}")
	public ResponseEntity<Order> readOrderById(@PathVariable long id) {
		return ResponseEntity.of(orderDao.read(id));
	}


	@Operation(method = "PUT", description = "Updates a Order resource or creates a new Order resource if the id is not found", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }, headers = {
					@Header(name = "location", description = "the location where the User resource is accessible", required = true) }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@PutMapping
	public ResponseEntity<Order> updateOrder(@Valid @RequestBody Order order, BindingResult bindingResult) {
		ResponseEntity<Order> responseEntity;
		if (bindingResult.hasErrors()) {
			responseEntity = ResponseEntity.badRequest().build();
		} else {
			Order updatedOrder = orderDao.update(order);

			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(updatedOrder.getId()).toUri();
			responseEntity = ResponseEntity.created(location).body(updatedOrder);

		}
		return responseEntity;
	}
	
	@Operation(method = "DELETE", description = "Deletes a single Order resource", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "404", content = { @Content(mediaType = "application/json") }) })
	@DeleteMapping("/{id}")
	public void deleteOrderById(@PathVariable long id) {
		orderDao.delete(id);
	}
	
	
	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<String> handleHttpNotReadableException(HttpMessageNotReadableException e){
		return ResponseEntity.badRequest().body("cannot read date");
	}
}
