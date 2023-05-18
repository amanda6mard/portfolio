package com.fdmgroup.productapi.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope("prototype")
public class Product {
	@Id
	@SequenceGenerator(name = "product_id_seq", sequenceName = "PRODUCT_ID_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_id_seq")
	private long id;
	@Column
	@NotBlank(message = "Name must not be empty or null")
	private String name;
	@Column
	@Min(value = 0, message = "Price must be zero or a positive value")
	private BigDecimal price;
	
	@Column
	private String description;
	
	@Column
	private String imageFilename;
	
	@Column
	private String category;

	public Product() {
		super();
	}

	public Product(String name, BigDecimal price) {
		super();
		this.name = name;
		this.price = price;
	}

	public Product(@NotBlank(message = "Name must not be empty or null") String name,
			@Min(value = 0, message = "Price must be zero or a positive value") BigDecimal price, String description,
			String imageFilename, String category) {
		super();
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageFilename = imageFilename;
		this.category = category;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageFilename() {
		return imageFilename;
	}

	public void setImageFilename(String imageFilename) {
		this.imageFilename = imageFilename;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
}
