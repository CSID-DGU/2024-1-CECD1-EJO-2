package org.dongguk.ejo.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.util.List;

@Builder
public record UrlListDto(

        @JsonProperty("url_list")
        List<UrlDto> urlList
) {
    @Builder
    public record UrlDto(
            @JsonProperty("url_id")
            Long urlId,

            @JsonProperty("url")
            String url,

            @JsonProperty("label")
            String label
    ) {
    }
}
