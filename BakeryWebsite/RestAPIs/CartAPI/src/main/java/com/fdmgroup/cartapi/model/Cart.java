package com.fdmgroup.cartapi.model;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.JoinColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope("prototype")
public class Cart {
	@Id
	@SequenceGenerator(name = "cart_id_seq", sequenceName = "CART_ID_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cart_id_seq")
	private long id;
	@ManyToMany
	@JoinTable(name = "CART_ITEMS", joinColumns = @JoinColumn(name = "FK_CART_ID"), inverseJoinColumns = @JoinColumn(name = "FK_ITEM_ID"))
	private Map<Long, CartItem> items;

	public Cart() {
		super();
		items = new HashMap<>();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Map<Long, CartItem> getItems() {
		return items;
	}

	public void setItems(Map<Long, CartItem> items) {
		this.items = items;
	}
}
