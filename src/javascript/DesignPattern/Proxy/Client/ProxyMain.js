"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Video_1 = require("../YouTube/Video");
const YouTubeService_1 = require("../YouTube/YouTubeService");
const youtube = (0, YouTubeService_1.getInstanceOfYoutubeService)();
youtube.uploadVideo(new Video_1.Video("funny animals", new Date()));
youtube.uploadVideo(new Video_1.Video("funny dennis", new Date()));
youtube.uploadVideo(new Video_1.Video("funny tim", new Date()));
youtube.uploadVideo(new Video_1.Video("poop", new Date()));
youtube.removeVideo(1);
youtube.removeVideo(3);
youtube.watchVideo(2);
