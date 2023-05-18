package com.fdmgroup.cartapi.doa;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fdmgroup.cartapi.model.Cart;
import com.fdmgroup.cartapi.repo.JpaCartRepository;

@Service
public class CartDAO implements ICrud<Cart, Long>{
	JpaCartRepository cartRepo;
	
	public CartDAO(JpaCartRepository cartRepo) {
		super();
		this.cartRepo = cartRepo;
	}

	@Override
	public Cart create(Cart cart) {
		return cartRepo.save(cart);
	}

	@Override
	public List<Cart> read() {
		return cartRepo.findAll();
	}

	@Override
	public Optional<Cart> read(Long id) {
		return cartRepo.findById(id);
	}

	@Override
	public Cart update(Cart cart) {
		return cartRepo.save(cart);
	}

	@Override
	public void delete(Long id) {
		cartRepo.deleteById(id);	
	}

}
