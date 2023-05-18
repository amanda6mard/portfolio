package com.fdmgroup.cartapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.Min;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope("prototype")
public class CartItem {
	@Id
	@SequenceGenerator(name = "item_id_seq", sequenceName = "ITEM_ID_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "item_id_seq")
	private long id;
	@Column(name="FK_PRODUCT_ID")
	@Min(value=1, message="product id must be at least 1") 
	private long productId;
	@Column
	@Min(value=1, message="Quantity must be at least 1") 
	private int quantity;

	public CartItem() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
