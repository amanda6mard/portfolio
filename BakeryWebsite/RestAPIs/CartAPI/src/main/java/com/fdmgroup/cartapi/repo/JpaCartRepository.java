package com.fdmgroup.cartapi.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.cartapi.model.Cart;

public interface JpaCartRepository extends JpaRepository<Cart, Long> {
	
}
