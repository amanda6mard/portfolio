package com.fdmgroup.productapi.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fdmgroup.productapi.model.Product;
import com.fdmgroup.productapi.repo.JpaProductRepository;

@Service
public class ProductDAO implements ICrud<Product, Long> {
	JpaProductRepository productRepo;
	
	public ProductDAO(JpaProductRepository productRepo) {
		super();
		this.productRepo = productRepo;
	}

	@Override
	public Product create(Product product) {
		return productRepo.save(product);
	}

	@Override
	public List<Product> read() {
		return productRepo.findAll();
	}

	@Override
	public Optional<Product> read(Long id) {
		return productRepo.findById(id);
	}

	public List<Product> read(String searchString) {
		return productRepo.findBySearchString(searchString);
	}
	
	public List<String> readCategories() {
		return productRepo.findAllCategories();
	}
	
	public List<Product> readByCategory(String cateogry){
		return productRepo.findByCategory(cateogry);
	}

	@Override
	public Product update(Product product) {
		return productRepo.save(product);
	}

	@Override
	public void delete(Long id) {
		productRepo.deleteById(id);
	}

}
