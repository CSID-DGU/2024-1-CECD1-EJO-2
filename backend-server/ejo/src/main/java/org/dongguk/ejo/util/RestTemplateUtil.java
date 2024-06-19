package org.dongguk.ejo.util;

import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
@Slf4j
public class RestTemplateUtil {

    private final RestTemplate restTemplate = new RestTemplate();

    public JSONObject sendPostRequest(String url, JSONObject requestBody) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>(requestBody.toJSONString(), headers);

        JSONObject response = restTemplate.postForObject(url, entity, JSONObject.class);
        log.info("response: {}", response);
        return response;
    }

}
