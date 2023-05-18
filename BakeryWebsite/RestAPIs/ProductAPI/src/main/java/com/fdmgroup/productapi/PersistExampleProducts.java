package com.fdmgroup.productapi;

import java.math.BigDecimal;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.fdmgroup.productapi.model.Product;
import com.fdmgroup.productapi.repo.JpaProductRepository;

@Component
public class PersistExampleProducts implements CommandLineRunner {
	JpaProductRepository productRepo;

	public PersistExampleProducts(JpaProductRepository productRepo) {
		super();
		this.productRepo = productRepo;
	}

	@Override
	public void run(String... args) throws Exception {
		productRepo.save(new Product("chocolate cake", BigDecimal.valueOf(18.99), "Best chocolate cake you will ever eat.", "chocolate-cake.jpg", "cakes"));
		productRepo.save(new Product("ice cream cone cake", BigDecimal.valueOf(18.99), "Who says you can't mix cake and ice cream? Certainly not us!", "ice-cream-cake.jpg", "cakes"));
		productRepo.save(new Product("sprinkle cupcake", BigDecimal.valueOf(4.99), "Sprinkle of joy, sprinkle of colour.", "sprinkle-cupcake.jpg", "cupcake"));
		productRepo.save(new Product("strawberry cupcake", BigDecimal.valueOf(4.99), "Because strawberry anything is delicious.", "strawberry-cupcake.jpg", "cupcake"));
		productRepo.save(new Product("caramel cupcake", BigDecimal.valueOf(4.99), "Delectable caramel. Nuff said.", "caramel-cupcake.jpg", "cupcake"));
		productRepo.save(new Product("ginger snap", BigDecimal.valueOf(1.99), "Snappiest of ginger snaps", "ginger-snap.jpg", "cookies"));
		productRepo.save(new Product("ooey gooey chocolate chip cookie", BigDecimal.valueOf(2.99), "Snappiest of ginger snaps", "ooey-gooey-cookie.jpg", "cookies"));
	}

}
