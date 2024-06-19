package org.dongguk.ejo.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record AiServerResponse(
        @JsonProperty("prediction")
        String prediction
) {
}
