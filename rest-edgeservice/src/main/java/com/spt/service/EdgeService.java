package com.spt.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;

import rx.Observable;
import rx.functions.Func2;

import com.fasterxml.jackson.core.type.TypeReference;
import com.spt.service.consul.DiscoverService;
import com.spt.service.ribbon.RibbonService;
import com.spt.vo.SptRibbonRequest;

@Service
public class EdgeService {

	@Autowired
	Environment env;

	@Autowired
	DiscoverService discoverService;

	@Autowired
	RibbonService ribbonService;

	public String getWelcomeMessage() {
		Observable<Map<String, String>> welcomeMessageObservable = null;
		Observable<Map<String, String>> welcomeNameObservable = null;
		String commaSepServerList = discoverService.discoverService(env
				.getProperty("consul.welcome.service.name"));
		welcomeMessageObservable = getWelcomeMessage(commaSepServerList,
				env.getProperty("welcome.message.uri.template"));
		welcomeNameObservable = getWelcomeMessage(commaSepServerList,
				env.getProperty("welcome.name.uri.template"));
		String finalWelcomeMessage = mergeResponses(welcomeMessageObservable,
				welcomeNameObservable);
		return finalWelcomeMessage;
	}

	private String mergeResponses(
			Observable<Map<String, String>> welcomeMessageObservable,
			Observable<Map<String, String>> welcomeNameObservable) {
		String finalMesage = Observable
				.zip(welcomeMessageObservable,
						welcomeNameObservable,
						new Func2<Map<String, String>, Map<String, String>, String>() {
							@Override
							public String call(Map<String, String> map1,
									Map<String, String> map2) {
								String finalMessage = map1.get("message")
										+ map2.get("name");
								return finalMessage;
							}
						}).toBlocking().single();

		return finalMesage;
	}

	private Observable<Map<String, String>> getWelcomeMessage(
			final String commaSeparatedServerList, String uriTemplate) {
		SptRibbonRequest ribbonRequestVO = SptRibbonRequest.getRibbonRequest(
				env.getProperty("resource.group.name"),
				commaSeparatedServerList,
				env.getProperty("template.name"), uriTemplate,
				env.getProperty("max.auto.retry.for.next.server"),
				HttpMethod.GET.name(), null, null, null, null);
		Observable<Map<String, String>> userBadgeObservable = ribbonService
				.getRibbonRequestObservable(ribbonRequestVO,
						new TypeReference<Map<String, String>>() {
						});
		return userBadgeObservable;
	}

}
