package com.spt.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource(value = { "classpath:consul.properties",
		"classpath:ribbon.properties" })
public class AppConfig {
}
