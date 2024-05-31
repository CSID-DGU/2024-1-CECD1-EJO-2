package org.dongguk.ejo.util;

import net.minidev.json.JSONObject;
import org.dongguk.ejo.dto.response.AiServerResponse;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.util.Map;
import java.util.Objects;

@Component
public class RestClientUtil {

    private final RestClient restClient = RestClient.create();

    public AiServerResponse sendPostRequest(String url, JSONObject requestBody) {
        return restClient.post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .body(requestBody.toJSONString())
                .retrieve()
                .toEntity(AiServerResponse.class).getBody();
    }

}
