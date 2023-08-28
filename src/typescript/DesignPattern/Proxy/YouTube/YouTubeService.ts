import ContentFilterProxy from "./ContentProxy";
import UploadedVideo from "./UploadedVideo";
import { Video } from "./Video";

interface YouTubeService {
  uploadVideo: Function;
  removeVideo: Function;
  watchVideo: Function;
}

const getInstanceOfYoutubeService = (): YouTubeService => {
  return new ContentFilterProxy();
};

class YouTubeServiceImpl implements YouTubeService {
  contentDataBase: Array<UploadedVideo> = [];
  constructor() {}

  uploadVideo = (video: Video): number => {
    const uploadVideo: UploadedVideo = new UploadedVideo(
      this.contentDataBase.length + 1,
      video.data,
      video.createdAt
    );
    this.contentDataBase.push(uploadVideo);
    return uploadVideo.id;
  };

  removeVideo = (id: number) => {
    if (this.checkIfIdIsValid(id)) {
      this.contentDataBase.splice(
        this.contentDataBase.findIndex((element) => element.id === id),
        1
      );
      console.log("successfully removed!");
    } else {
      console.log("No video with this id can be found");
    }
  };

  watchVideo = (id: number) => {
    if (this.checkIfIdIsValid(id)) {
      console.log(
        this.contentDataBase.find((element) => element.id === id)?.data
      );
    } else {
      console.log("No video with this id can be found");
    }
  };

  private checkIfIdIsValid = (id: number): boolean => {
    return this.contentDataBase.find((element) => element.id === id)
      ? true
      : false;
  };
}

export { YouTubeService, YouTubeServiceImpl, getInstanceOfYoutubeService };
