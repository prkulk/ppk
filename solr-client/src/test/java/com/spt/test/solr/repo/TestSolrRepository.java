//package com.spt.test.solr.repo;
//
//import javax.annotation.Resource;
//
//import junit.framework.Assert;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.data.solr.core.SolrTemplate;
//
//import com.spt.solr.config.EmbeddedSolrConfig;
//import com.spt.solr.document.Product;
//import com.spt.solr.repo.ProductRepository;
//
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(classes = {EmbeddedSolrConfig.class})
//@TestExecutionListeners({DependencyInjectionTestExecutionListener.class})
//@PropertySource(value = {"classpath:application.properties"})
//public class TestSolrRepository {
//
//  @Resource
//  private ProductRepository repository;
//  
//  @Autowired
//  SolrTemplate solrtemplate;
//  
//  @Test
//  public void testSolrTemplate() {
//    Assert.assertNotNull(repository);
//    Product document =
//    		Product.getBuilder(Long.valueOf(1234), "First Solr Offer").description("First Solr Offer Description").build();
//    repository.save(document);
//  }
//
//}
