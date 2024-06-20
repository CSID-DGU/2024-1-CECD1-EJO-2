package org.dongguk.ejo.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.ejo.dto.common.ResponseDto;
import org.dongguk.ejo.dto.request.ReportDto;
import org.dongguk.ejo.dto.request.ReportUrlListDto;
import org.dongguk.ejo.service.ReportService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ReportController {

    private final ReportService reportService;

    // 1.2 URL 신고
    @PostMapping("/report")
    public ResponseDto<?> reportUrl(@RequestBody ReportDto reportDto) {
        reportService.reportUrl(reportDto);
        return ResponseDto.ok(null);
    }

    // 1.4 URL 신고 취소
    @PostMapping("/url")
    public ResponseDto<?> cancelReportUrl(@RequestBody ReportUrlListDto reportUrlListDto) {
        reportService.cancelReportUrl(reportUrlListDto);
        return ResponseDto.ok(null);
    }
}
