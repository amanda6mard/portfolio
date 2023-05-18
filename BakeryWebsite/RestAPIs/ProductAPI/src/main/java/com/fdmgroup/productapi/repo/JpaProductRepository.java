package com.fdmgroup.productapi.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fdmgroup.productapi.model.Product;

public interface JpaProductRepository extends JpaRepository<Product, Long> {

	@Query("select p from Product p where lower(p.name) like lower(concat('%',:searchString, '%'))")
	List<Product> findBySearchString(@Param("searchString") String searchString);
	
	List<Product> findByCategory(String category);
	
	@Query("select distinct p.category from Product p where p.category not like ''")
	List<String> findAllCategories();

}
