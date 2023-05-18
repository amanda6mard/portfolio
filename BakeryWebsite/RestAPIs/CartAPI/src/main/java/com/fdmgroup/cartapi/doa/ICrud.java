package com.fdmgroup.cartapi.doa;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public interface ICrud<T, ID> {
	public T create(T entity);
	public List<T> read();
	public Optional<T> read(ID id);
	public T update(T entity);
	public void delete(ID id);
}
