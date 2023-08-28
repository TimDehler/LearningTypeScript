"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YouTubeService_1 = require("./YouTubeService");
class ContentFilterProxy {
    constructor() {
        this.youtubeService = new YouTubeService_1.YouTubeServiceImpl();
        this.uploadVideo = (video) => {
            if (video.data.includes("poop")) {
                console.log("CONTENT FILTER ALERT");
                return -1;
            }
            return this.youtubeService.uploadVideo(video);
        };
        this.removeVideo = (id) => {
            return this.youtubeService.removeVideo(id);
        };
        this.watchVideo = (id) => {
            return this.youtubeService.watchVideo(id);
        };
    }
}
exports.default = ContentFilterProxy;
