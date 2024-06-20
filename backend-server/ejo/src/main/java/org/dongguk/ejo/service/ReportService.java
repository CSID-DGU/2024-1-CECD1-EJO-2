package org.dongguk.ejo.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.dongguk.ejo.domain.Report;
import org.dongguk.ejo.dto.request.ReportDto;
import org.dongguk.ejo.dto.request.ReportUrlListDto;
import org.dongguk.ejo.dto.type.EType;
import org.dongguk.ejo.repository.ReportRepository;
import org.dongguk.ejo.repository.UrlRepository;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReportService {

    private final ReportRepository reportRepository;
    private final UrlRepository urlRepository;


    @Transactional
    public void reportUrl(ReportDto reportDto) {
        log.info("reportUrl: {}", reportDto.toString());
        reportRepository.findByUrl(reportDto.url())
                .ifPresentOrElse(
                        url -> {
                        },
                        () -> {
                            EType eType = EType.of(reportDto.type());
                            Report report = Report.builder()
                                    .url(reportDto.url())
                                    .type(eType)
                                    .build();

                            reportRepository.save(report);
                        }
                );
    }

    @Transactional
    public void cancelReportUrl(ReportUrlListDto reportUrlListDto) {
        reportUrlListDto.url_list().forEach(reportRepository::deleteById);
    }
}
