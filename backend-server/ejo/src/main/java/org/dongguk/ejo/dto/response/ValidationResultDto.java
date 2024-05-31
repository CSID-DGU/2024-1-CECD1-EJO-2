package org.dongguk.ejo.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record ValidationResultDto(

        @JsonProperty("is_malicious")
        boolean isMalicious,

        @JsonProperty("description")
        String description
) {
}
