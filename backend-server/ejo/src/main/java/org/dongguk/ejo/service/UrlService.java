package org.dongguk.ejo.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import net.minidev.json.JSONObject;
import org.dongguk.ejo.domain.Url;
import org.dongguk.ejo.dto.response.AiServerResponse;
import org.dongguk.ejo.dto.response.ValidationResultDto;
import org.dongguk.ejo.dto.type.EType;
import org.dongguk.ejo.repository.UrlRepository;
import org.dongguk.ejo.util.RestClientUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UrlService {

    private final UrlRepository urlRepository;
    private final RestClientUtil restClientUtil;

    @Value("${ai-server-url}")
    private String aiServerUrl;

    @Transactional
    public ValidationResultDto validateUrl(String url) {
        return urlRepository.findByUrl(url)
                .map(findUrl -> ValidationResultDto.builder()
                        .isMalicious(true)
                        .description(findUrl.getType().getName())
                        .build())
                .orElseGet(() -> {

                    JSONObject requestBody = new JSONObject();
                    requestBody.put("url", url);
                    AiServerResponse aiServerResponse = restClientUtil.sendPostRequest(aiServerUrl, requestBody);

                    Url newUrl = Url.builder()
                            .url(url)
                            .type(EType.valueOf(aiServerResponse.type()))
                            .build();
                    urlRepository.save(newUrl);

                    return ValidationResultDto.builder()
                            .isMalicious(false)
                            .description(aiServerResponse.type())
                            .build();
                });
    }


}
