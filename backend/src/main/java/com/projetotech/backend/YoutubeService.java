package com.projetotech.backend;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class YoutubeService {
    private final String API_KEY = "AIzaSyDBEDUE2x4bPTlJVHcZG1mZCncHMnP5ugA";
    private final String CHANNEL_ID = "UCVHFbqXqoYvEWM1Ddxl0QDg";
    private final String API_URL = "https://www.googleapis.com/youtube/v3/search?key=%s&channelId=%s&part=snippet&order=date&maxResults=5";

    private final RestTemplate restTemplate = new RestTemplate();

    public List<VideoDTO> getLatestVideos() {
        List<VideoDTO> videos = new ArrayList<>();

        try {

            String url = String.format(API_URL, API_KEY, CHANNEL_ID);
            String json = restTemplate.getForObject(url, String.class);
            ObjectMapper mapper = new ObjectMapper();
            JsonNode raiz = mapper.readTree(json);

            JsonNode items = raiz.get("items");

            for (JsonNode item : items) {
                String title = item.get("snippet").get("title").asText();
                String videoId = item.get("id").get("videoId").asText();
                String thumbnailUrl = item.get("snippet").get("thumbnails").get("medium").get("url").asText();

                videos.add(new VideoDTO(title, videoId, thumbnailUrl));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return videos;

    }
}
