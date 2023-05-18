package com.fdmgroup.orderapi.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope("prototype")
@Table(name="ORDER_TABLE")
public class Order {
	@Id
	@SequenceGenerator(name = "order_id_seq", sequenceName = "ORDER_ID_SEQ", initialValue = 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_id_seq")
	private long id;
	
	@Column(name="FK_CART_ID")
	@Min(value=1, message = "Client id must be at least 1")
	private long cartId;
	
	@Column(name="FK_CLIENT_ID")
	@Min(value=1, message = "Client id must be at least 1")
	private long clientId;
	
	@Column(name="ORDER_DATE")
	@NotNull(message="Date must not be null")
	Date date;

	public Order() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getCartId() {
		return cartId;
	}

	public void setCartId(long cartId) {
		this.cartId = cartId;
	}

	public long getClientId() {
		return clientId;
	}

	public void setClientId(long clientId) {
		this.clientId = clientId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
