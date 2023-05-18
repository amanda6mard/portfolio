package com.fdmgroup.orderapi.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.orderapi.model.Order;

public interface JpaOrderRepository extends JpaRepository<Order, Long>{

}
