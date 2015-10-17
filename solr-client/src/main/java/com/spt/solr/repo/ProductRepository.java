package com.spt.solr.repo;

import org.springframework.data.solr.repository.SolrCrudRepository;

import com.spt.solr.document.Product;

public interface ProductRepository extends
		SolrCrudRepository<Product, String> {
}