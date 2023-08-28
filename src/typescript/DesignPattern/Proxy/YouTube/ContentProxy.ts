import { Video } from "./Video";
import { YouTubeService, YouTubeServiceImpl } from "./YouTubeService";

class ContentFilterProxy implements YouTubeService {
  private youtubeService: YouTubeService = new YouTubeServiceImpl();

  constructor() {}

  uploadVideo = (video: Video) => {
    if (video.data.includes("poop")) {
      console.log("CONTENT FILTER ALERT");
      return -1;
    }
    return this.youtubeService.uploadVideo(video);
  };

  removeVideo = (id: number) => {
    return this.youtubeService.removeVideo(id);
  };

  watchVideo = (id: number) => {
    return this.youtubeService.watchVideo(id);
  };
}

export default ContentFilterProxy;
