package org.dongguk.ejo.dto.request;

import lombok.Builder;

@Builder
public record ReportDto(
        String url,
        // Phishing, Defacement, Malware
        String type
) {
}
