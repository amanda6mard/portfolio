package com.fdmgroup.cartapi.doa;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fdmgroup.cartapi.model.CartItem;
import com.fdmgroup.cartapi.repo.JpaCartItemRepository;

@Service
public class CartItemDAO implements ICrud<CartItem, Long>{
	JpaCartItemRepository cartItemRepo;
	
	public CartItemDAO(JpaCartItemRepository cartItemRepo) {
		super();
		this.cartItemRepo = cartItemRepo;
	}

	@Override
	public CartItem create(CartItem item) {
		return cartItemRepo.save(item);
	}

	@Override
	public List<CartItem> read() {
		return cartItemRepo.findAll();
	}

	@Override
	public Optional<CartItem> read(Long id) {
		return cartItemRepo.findById(id);
	}

	@Override
	public CartItem update(CartItem item) {
		return cartItemRepo.save(item);
	}

	@Override
	public void delete(Long id) {
		cartItemRepo.deleteById(id);	
	}

}
