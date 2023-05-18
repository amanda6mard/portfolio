package com.fdmgroup.cartapi.controller;

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

import com.fdmgroup.cartapi.service.CartService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.headers.Header;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

import com.fdmgroup.cartapi.model.Cart;
import com.fdmgroup.cartapi.model.CartItem;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/carts")
public class CartController {
	private CartService cartService;

	public CartController(CartService cartService) {
		super();
		this.cartService = cartService;
	}

	@Operation(method = "POST", description = "Creates a new Cart resource", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }, headers = {
					@Header(name = "location", description = "the location where the Cart resource is accessible", required = true) }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@PostMapping
	public ResponseEntity<Cart> createCart(Cart cart) {
		ResponseEntity<Cart> responseEntity;

		Cart createdCart = cartService.createCart(cart);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(createdCart.getId()).toUri();
		responseEntity = ResponseEntity.created(location).body(createdCart);
		return responseEntity;
	}

	@Operation(method = "GET", description = "Returns a list of all Cart resources", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }) })
	@GetMapping
	public List<Cart> readAllCarts() {
		return cartService.readAllCarts();
	}

	@Operation(method = "GET", description = "Returns a single Cart resource", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "404", content = { @Content(mediaType = "application/json") }) })
	@GetMapping("/{id}")
	public ResponseEntity<Cart> readCartById(@PathVariable long id) {
		return ResponseEntity.of(cartService.readCart(id));
	}

	@Operation(method = "PUT", description = "Updates a Cart resource or creates a new Cart resource if the id is not found", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }, headers = {
					@Header(name = "location", description = "the location where the Cart resource is accessible", required = true) }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@PutMapping
	public ResponseEntity<Cart> updateCart(@RequestBody Cart cart) {
		ResponseEntity<Cart> responseEntity;

		Cart updatedCart = cartService.updateCart(cart);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(updatedCart.getId()).toUri();
		responseEntity = ResponseEntity.created(location).body(updatedCart);

		return responseEntity;
	}

	@Operation(method = "DELETE", description = "Deletes a single Cart resource", responses = {
			@ApiResponse(responseCode = "200", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "404", content = { @Content(mediaType = "application/json") }) })
	@DeleteMapping("/{id}")
	public void deleteCartById(@PathVariable long id) {
		cartService.deleteCart(id);
	}

	@Operation(method = "POST", description = "Return a Cart, adding CartItem resource to it if no matching product id is in the cart, else it increases the quantity of the corresponing CartItem.", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@PostMapping("cartItems/{cartId}")
	public ResponseEntity<Cart> addItemToCart(@PathVariable long cartId, @RequestBody @Valid CartItem cartItem,
			BindingResult bindingResult) {
		ResponseEntity<Cart> responseEntity;
		if (bindingResult.hasErrors()) {
			responseEntity = ResponseEntity.badRequest().build();
		} else {
			responseEntity = ResponseEntity.of(cartService.addItem(cartId, cartItem));
		}

		return responseEntity;
	}

	@Operation(method = "Put", description = "Return a Cart, replacing the CartItem resource if a matching product id is in the cart, else it add the new CartItem.", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@PutMapping("cartItems/{cartId}")
	public ResponseEntity<Cart> updateItemInCart(@PathVariable long cartId, @RequestBody @Valid CartItem cartItem,
			BindingResult bindingResult) {
		ResponseEntity<Cart> responseEntity;
		if (bindingResult.hasErrors()) {
			responseEntity = ResponseEntity.badRequest().build();
		} else {
			responseEntity = ResponseEntity.of(cartService.updateItem(cartId, cartItem));
		}

		return responseEntity;
	}

	@Operation(method = "POST", description = "Return a Cart, removing CartItem resource from it if  matching product id is in the cart.", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@DeleteMapping("cartItems/{cartId}")
	public ResponseEntity<Cart> removeItemFromCart(@PathVariable long cartId, @RequestBody @Valid CartItem cartItem,
			BindingResult bindingResult) {
		ResponseEntity<Cart> responseEntity;
		if (bindingResult.hasErrors()) {
			responseEntity = ResponseEntity.badRequest().build();
		} else {
			responseEntity = ResponseEntity.of(cartService.removeItem(cartId, cartItem));
		}

		return responseEntity;
	}

	@Operation(method = "POST", description = "Return a Cart, removing CartItem matching the resource from it if  matching product id is in the cart.", responses = {
			@ApiResponse(responseCode = "201", content = { @Content(mediaType = "application/json") }),
			@ApiResponse(responseCode = "400", content = { @Content(mediaType = "application/json") }) })
	@DeleteMapping("cartItems/deleteByItemId/{cartId}")
	public ResponseEntity<Cart> removeItemFromCartByItemId(@PathVariable long cartId, @RequestBody long itemId) {
		ResponseEntity<Cart> responseEntity;

		responseEntity = ResponseEntity.of(cartService.removeItem(cartId, itemId));

		return responseEntity;
	}
}
