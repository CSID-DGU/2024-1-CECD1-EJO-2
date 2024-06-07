package org.dongguk.ejo.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.minidev.json.JSONObject;
import org.dongguk.ejo.domain.Url;
import org.dongguk.ejo.dto.response.AiServerResponse;
import org.dongguk.ejo.dto.response.ValidationResultDto;
import org.dongguk.ejo.dto.type.EType;
import org.dongguk.ejo.repository.UrlRepository;
import org.dongguk.ejo.util.RestTemplateUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UrlService {

    private final UrlRepository urlRepository;
    private final RestTemplateUtil restTemplateUtil;

    @Value("${ai-server-url}")
    private String aiServerUrl;

    private static final String prediction = "prediction";

    @Transactional
    public ValidationResultDto validateUrl(String url) {
        return urlRepository.findByUrl(url)
                .map(findUrl -> ValidationResultDto.builder()
                        .isMalicious(findUrl.getIsMalicious())
                        .description(findUrl.getType().getName())
                        .build())
                .orElseGet(() -> {

                    JSONObject requestBody = new JSONObject();
                    requestBody.put("url", url);

                    AiServerResponse aiServerResponse = AiServerResponse.builder()
                            .prediction(restTemplateUtil.sendPostRequest(aiServerUrl, requestBody).getAsString(prediction))
                            .build();


                    Url newUrl = urlRepository.save(Url.builder()
                            .url(url)
                            .type(EType.valueOf(aiServerResponse.prediction().toUpperCase()))
                            .build());

                    return ValidationResultDto.builder()
                            .isMalicious(newUrl.getIsMalicious())
                            .description(aiServerResponse.prediction())
                            .build();
                });
    }
}
