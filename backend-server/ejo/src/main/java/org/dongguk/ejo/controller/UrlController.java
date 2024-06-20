package org.dongguk.ejo.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.ejo.dto.common.ResponseDto;
import org.dongguk.ejo.service.UrlService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UrlController {

    private final UrlService urlService;

    // 1.1 URL 유효성 검사
    @GetMapping("/url")
    public ResponseDto<?> validateUrl(@RequestParam("url") String url) {

        return ResponseDto.ok(urlService.validateUrl(url));
    }

    // 1.3 URL 정보 조회
    @GetMapping("/url-list")
    public ResponseDto<?> getUrlList() {
        return ResponseDto.ok(urlService.getUrlList());
    }


}
