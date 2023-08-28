import { Video } from "../YouTube/Video";
import { YouTubeService, YouTubeServiceImpl } from "../YouTube/YouTubeService";

const youtube: YouTubeService =
  YouTubeServiceImpl.getInstanceOfYoutubeService();

youtube.uploadVideo(new Video("funny animals", new Date()));
youtube.uploadVideo(new Video("funny dennis", new Date()));
youtube.uploadVideo(new Video("funny tim", new Date()));
youtube.uploadVideo(new Video("poop", new Date()));

youtube.removeVideo(1);
youtube.removeVideo(3);
youtube.watchVideo(2);
