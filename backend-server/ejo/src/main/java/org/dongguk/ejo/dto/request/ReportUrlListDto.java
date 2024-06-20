package org.dongguk.ejo.dto.request;

import lombok.Builder;

import java.util.List;

@Builder
public record ReportUrlListDto(
        List<Long> url_list
) {
}
