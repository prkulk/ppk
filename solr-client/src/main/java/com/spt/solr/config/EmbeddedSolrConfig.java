package com.spt.solr.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.data.solr.repository.config.EnableSolrRepositories;
import org.springframework.data.solr.server.support.EmbeddedSolrServerFactoryBean;

import javax.annotation.Resource;

@Configuration
@EnableSolrRepositories("com.spt.solr.repo")
@Profile("local")
@PropertySource("classpath:solr.properties")
public class EmbeddedSolrConfig {

	@Resource
	private Environment env;

	@Bean
	public EmbeddedSolrServerFactoryBean solrServerFactoryBean() {
		EmbeddedSolrServerFactoryBean factory = new EmbeddedSolrServerFactoryBean();
		factory.setSolrHome(env.getRequiredProperty("solr.solr.home"));
		return factory;
	}

	@Bean
	public SolrTemplate solrTemplate() throws Exception {
		return new SolrTemplate(solrServerFactoryBean().getObject());
	}

}