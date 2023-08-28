class UploadedVideo {
  id: number;
  data: string;
  createdAt: Date;

  constructor(id: number, data: string, createdAt: Date) {
    this.id = id;
    this.data = data;
    this.createdAt = createdAt;
  }
}

export default UploadedVideo;
