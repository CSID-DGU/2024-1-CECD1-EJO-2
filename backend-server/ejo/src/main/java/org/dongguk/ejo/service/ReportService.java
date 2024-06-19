package org.dongguk.ejo.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.dongguk.ejo.domain.Report;
import org.dongguk.ejo.dto.request.ReportDto;
import org.dongguk.ejo.dto.type.EType;
import org.dongguk.ejo.repository.ReportRepository;
import org.dongguk.ejo.repository.UrlRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final ReportRepository reportRepository;
    private final UrlRepository urlRepository;


    @Transactional
    public void reportUrl(ReportDto reportDto) {
        urlRepository.findByUrl(reportDto.url())
                .ifPresentOrElse(
                        url -> {
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
