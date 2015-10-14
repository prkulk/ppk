package com.spt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.spt.service.EdgeService;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;

@Api(value = "edge", description = " Expose welcome and name API endpoints", position = 0)
@RestController
public class EdgeController {

	@Autowired
	EdgeService edgeService;

	@RequestMapping(value = "/edge", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Get welcome message text..", notes = "Reads welcome message text from a properties file and returns in a json format")
	public @ResponseBody String welcomeMessage() {
		return edgeService.getWelcomeMessage();
	}

}
