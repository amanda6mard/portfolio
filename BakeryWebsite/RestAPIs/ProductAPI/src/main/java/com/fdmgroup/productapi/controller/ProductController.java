package com.fdmgroup.productapi.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fdmgroup.productapi.dao.ProductDAO;
import com.fdmgroup.productapi.model.Product;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.headers.Header;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@CrossOrigin
@RequestMapping("api/v1/products")
public class ProductController {
	ProductDAO productService;

	public ProductController(ProductDAO productService) {
		super();
		this.productService = productService;
	}

	@Operation(method = "POST", description = "Creates a new Product resource", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }, headers = {
					@Header(name = "location", description = "the location where the Cart resource is accessible", required = true) }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@PostMapping
	public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product, BindingResult bindingResult) {
		ResponseEntity<Product> responseEntity;
		if (bindingResult.hasErrors()) {
			responseEntity = ResponseEntity.badRequest().build();
		} else {
			Product createdProduct = productService.create(product);
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(createdProduct.getId()).toUri();
			responseEntity = ResponseEntity.created(location).body(createdProduct);
		}
		return responseEntity;
	}

	@Operation(method = "GET", description = "Returns a list of all Product resources", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }) })
	@GetMapping
	public List<Product> readAllProducts() {
		System.out.println();
		return productService.read();
	}

	@Operation(method = "GET", description = "Returns a single Product resource", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "404", content = { @Content(mediaType = "application/json") }) })
	@GetMapping("/{id}")
	public ResponseEntity<Product> readProductById(@PathVariable long id) {
		return ResponseEntity.of(productService.read(id));
	}

	@Operation(method = "GET", description = "Returns a list of all Product resources matching the string", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@RequestMapping("/filter/{searchString}")
	public List<Product> searchProductBySearchString(@PathVariable String searchString) {
		return productService.read(searchString);
	}
	
	@Operation(method = "GET", description = "Returns a list of all distinct Product categories Strings", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }) })
	@GetMapping("/categories")
	public List<String> getProductCategories() {
		return productService.readCategories();
	}
	
	@Operation(method = "GET", description = "Returns a list of all Product resources matching the category", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@RequestMapping("/categories/{searchString}")
	public List<Product> searchProductByCategory(@PathVariable String searchString) {
		return productService.readByCategory(searchString);
	}

	@Operation(method = "PUT", description = "Updates a Product resource or creates a new Product resource if the id is not found", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }, headers = {
					@Header(name = "location", description = "the location where the User resource is accessible", required = true) }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@PutMapping
	public ResponseEntity<Product> updateProduct(@Valid @RequestBody Product product, BindingResult bindingResult) {
		ResponseEntity<Product> responseEntity;
		if (bindingResult.hasErrors()) {
			responseEntity = ResponseEntity.badRequest().build();
		} else {
			Product updatedProduct = productService.update(product);
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(updatedProduct.getId()).toUri();
			responseEntity = ResponseEntity.created(location).body(updatedProduct);
		}
		return responseEntity;
	}

	@Operation(method = "DELETE", description = "Deletes a single Product resource", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "404", content = { @Content(mediaType = "application/json") }) })
	@DeleteMapping("/{id}")
	public void deleteProductById(@PathVariable long id) {
		productService.delete(id);
	}
}
