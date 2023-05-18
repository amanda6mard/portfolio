package com.fdmgroup.cartapi.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.cartapi.model.CartItem;

public interface JpaCartItemRepository extends JpaRepository<CartItem, Long> {
	
}
