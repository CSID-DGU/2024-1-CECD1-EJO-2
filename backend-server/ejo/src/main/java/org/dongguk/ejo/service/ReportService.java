package org.dongguk.ejo.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import net.minidev.json.JSONObject;
import org.dongguk.ejo.domain.Report;
import org.dongguk.ejo.domain.Url;
import org.dongguk.ejo.dto.request.ReportDto;
import org.dongguk.ejo.dto.response.AiServerResponse;
import org.dongguk.ejo.dto.response.ValidationResultDto;
import org.dongguk.ejo.dto.type.EType;
import org.dongguk.ejo.repository.ReportRepository;
import org.dongguk.ejo.repository.UrlRepository;
import org.dongguk.ejo.util.RestClientUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final ReportRepository reportRepository;
    private final RestClientUtil restClientUtil;
    private final UrlRepository urlRepository;

    @Value("${ai-server-url}")
    private String aiServerUrl;


    @Transactional
    public void reportUrl(ReportDto reportDto) {
        urlRepository.findByUrl(reportDto.url())
                .ifPresentOrElse(
                        findUrl -> {
                            // 존재하는 URL에 대한 처리 로직이 필요할 경우 여기에 추가합니다.
                        },
                        () -> {
                            EType eType = EType.of(reportDto.Type());
                            Report report = Report.builder()
                                    .url(reportDto.url())
                                    .type(eType)
                                    .build();

                            reportRepository.save(report);
                        }
                );
    }


}
