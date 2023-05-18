package com.fdmgroup.orderapi.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fdmgroup.orderapi.model.Order;
import com.fdmgroup.orderapi.repo.JpaOrderRepository;

@Service
public class OrderDAO implements ICrud<Order, Long> {
	JpaOrderRepository orderRepo;

	public OrderDAO(JpaOrderRepository orderRepo) {
		super();
		this.orderRepo = orderRepo;
	}

	@Override
	public Order create(Order order) {
		return orderRepo.save(order);
	}

	@Override
	public List<Order> read() {
		return orderRepo.findAll();
	}

	@Override
	public Optional<Order> read(Long id) {
		return orderRepo.findById(id);
	}

	@Override
	public Order update(Order order) {
		return orderRepo.save(order);
	}

	@Override
	public void delete(Long id) {
		orderRepo.deleteById(id);

	}

}
