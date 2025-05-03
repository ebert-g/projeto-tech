package com.projetotech.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetotech.backend.VideoDTO;
import com.projetotech.backend.YoutubeService;

@RestController
@RequestMapping("/api")
public class YoutubeController {

    @Autowired
    private YoutubeService youtubeService;

    @GetMapping("/videos")
    public List<VideoDTO> getVideos() {
        return youtubeService.getLatestVideos();
    }

}
