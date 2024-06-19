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

    @GetMapping("/url")
    public ResponseDto<?> validateUrl(@RequestParam("url") String url) {

        return ResponseDto.ok(urlService.validateUrl(url));
    }

}
