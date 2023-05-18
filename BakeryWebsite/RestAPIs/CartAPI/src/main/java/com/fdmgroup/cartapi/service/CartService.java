package com.fdmgroup.cartapi.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fdmgroup.cartapi.doa.CartDAO;
import com.fdmgroup.cartapi.doa.CartItemDAO;
import com.fdmgroup.cartapi.model.Cart;
import com.fdmgroup.cartapi.model.CartItem;

@Service
public class CartService {
	CartDAO cartDao;
	CartItemDAO cartItemDao;
	
	public CartService(CartDAO cartDao, CartItemDAO cartItemDao) {
		super();
		this.cartDao = cartDao;
		this.cartItemDao = cartItemDao;
	}

	public Cart createCart(Cart cart) {
		return cartDao.create(cart);
	}

	public List<Cart> readAllCarts() {
		return cartDao.read();
	}

	public Optional<Cart> readCart(long id) {
		return cartDao.read(id);
	}

	public Cart updateCart(Cart cart) {
		return cartDao.update(cart);
	}

	public void deleteCart(long id) {
		cartDao.delete(id);
		
	}

	public Optional<Cart> addItem(long cartId, CartItem cartItemToAdd) {
		Optional<Cart> optReturnCart;
		Optional<Cart> optFoundCart = readCart(cartId);
		if(optFoundCart.isPresent())
		{
			Cart foundCart = optFoundCart.get();
			Map<Long, CartItem> cartItems = foundCart.getItems();
			if(cartItems.containsKey(cartItemToAdd.getProductId())){
				CartItem foundItem = cartItems.get(cartItemToAdd.getProductId());
				foundItem.setQuantity(foundItem.getQuantity() + cartItemToAdd.getQuantity());
				cartItemDao.update(foundItem);
			} else {
				CartItem createdItem = cartItemDao.create(cartItemToAdd);
				cartItems.put(createdItem.getProductId(), createdItem);
			}
			optReturnCart = Optional.of(updateCart(foundCart));
		} else {
			optReturnCart = optFoundCart;
		}
		return optReturnCart;
	}

	public Optional<Cart> updateItem(long cartId, CartItem cartItemToUpdate) {
		Optional<Cart> optReturnCart;
		Optional<Cart> optFoundCart = readCart(cartId);
		if(optFoundCart.isPresent())
		{
			Cart foundCart = optFoundCart.get();
			Map<Long, CartItem> cartItems = foundCart.getItems();
			CartItem updatedItem = cartItemDao.update(cartItemToUpdate);
			cartItems.replace(updatedItem.getProductId(), updatedItem);
			optReturnCart = Optional.of(updateCart(foundCart));
		} else {
			optReturnCart = optFoundCart;
		}
		return optReturnCart;
	}

	public Optional<Cart> removeItem(long cartId, CartItem cartItemToDelete) {
		Optional<Cart> optReturnCart;
		Optional<Cart> optFoundCart = readCart(cartId);
		if(optFoundCart.isPresent())
		{
			Cart foundCart = optFoundCart.get();
			Map<Long, CartItem> cartItems = foundCart.getItems();
			cartItems.remove(cartItemToDelete.getProductId());
			optReturnCart = Optional.of(updateCart(foundCart));
		} else {
			optReturnCart = optFoundCart;
		}
		return optReturnCart;
	}

	public Optional<Cart> removeItem(long cartId, long itemId) {
		Optional<Cart> optReturnCart;
		Optional<Cart> optFoundCart = readCart(cartId);
		if(optFoundCart.isPresent())
		{
			Cart foundCart = optFoundCart.get();
			Map<Long, CartItem> cartItems = foundCart.getItems();
			cartItems.remove(itemId);
			optReturnCart = Optional.of(updateCart(foundCart));
		} else {
			optReturnCart = optFoundCart;
		}
		return optReturnCart;
	}

}
