package org.dongguk.ejo.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.ejo.dto.common.ResponseDto;
import org.dongguk.ejo.dto.request.ReportDto;
import org.dongguk.ejo.service.ReportService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class ReportController {

    private final ReportService reportService;

    @PostMapping("/report")
    public ResponseDto<?> reportUrl(@RequestBody ReportDto reportDto) {
        reportService.reportUrl(reportDto);
        return ResponseDto.ok(null);
    }
}
