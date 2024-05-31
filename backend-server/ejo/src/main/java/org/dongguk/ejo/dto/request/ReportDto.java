package org.dongguk.ejo.dto.request;

import lombok.Builder;

@Builder
public record ReportDto(
        String url,
        Integer Type
) {
}
