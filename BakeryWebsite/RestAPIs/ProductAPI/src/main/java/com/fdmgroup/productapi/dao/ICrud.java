package com.fdmgroup.productapi.dao;

import java.util.List;
import java.util.Optional;

public interface ICrud<T, ID> {
	public T create(T entity);
	public List<T> read();
	public Optional<T> read(ID id);
	public T update(T entity);
	public void delete(ID id);
}
