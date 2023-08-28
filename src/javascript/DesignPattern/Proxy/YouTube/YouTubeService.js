"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YouTubeServiceImpl = void 0;
const ContentProxy_1 = __importDefault(require("./ContentProxy"));
const UploadedVideo_1 = __importDefault(require("./UploadedVideo"));
class YouTubeServiceImpl {
    constructor() {
        this.contentDataBase = [];
        this.uploadVideo = (video) => {
            const uploadVideo = new UploadedVideo_1.default(this.contentDataBase.length + 1, video.data, video.createdAt);
            this.contentDataBase.push(uploadVideo);
            return uploadVideo.id;
        };
        this.removeVideo = (id) => {
            if (this.checkIfIdIsValid(id)) {
                this.contentDataBase.splice(this.contentDataBase.findIndex((element) => element.id === id), 1);
                console.log("successfully removed!");
            }
            else {
                console.log("No video with this id can be found");
            }
        };
        this.watchVideo = (id) => {
            var _a;
            if (this.checkIfIdIsValid(id)) {
                console.log((_a = this.contentDataBase.find((element) => element.id === id)) === null || _a === void 0 ? void 0 : _a.data);
            }
            else {
                console.log("No video with this id can be found");
            }
        };
        this.checkIfIdIsValid = (id) => {
            return this.contentDataBase.find((element) => element.id === id)
                ? true
                : false;
        };
    }
}
exports.YouTubeServiceImpl = YouTubeServiceImpl;
YouTubeServiceImpl.getInstanceOfYoutubeService = () => {
    return new ContentProxy_1.default();
};
