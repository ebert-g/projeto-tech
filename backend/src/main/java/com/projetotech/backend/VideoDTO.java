package com.projetotech.backend;

public class VideoDTO {
    private String title;
    private String videoId;
    private String thumbnailUrl;

    public VideoDTO(String title, String videoId, String thumbnailUrl) {
        this.title = title;
        this.videoId = videoId;
        this.thumbnailUrl = thumbnailUrl;
    }

    public String getTitle() {
        return title;
    }

    public String getVideoId() {
        return videoId;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

}
