package com.spt.solr.document;
import org.apache.solr.client.solrj.beans.Field;
import org.springframework.data.annotation.Id;
 
public class Product {
 
    @Id
    @Field
    private String id;
 
    @Field
    private String description;
 
    @Field
    private String title;
 
    public Product() {
 
    }
 
    public static Builder getBuilder(Long id, String title) {
        return new Builder(id, title);
    }
 
    //Getters are omitted
 
    public static class Builder {
        private Product build;
 
        public Builder(Long id, String title) {
            build = new Product();
            build.id = id.toString();
            build.title = title;
        }
 
        public Builder description(String description) {
            build.description = description;
            return this;
        }
 
        public Product build() {
            return build;
        }
    }
}