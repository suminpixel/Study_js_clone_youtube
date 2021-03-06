import express from 'express';
import routes from "../routes";
const videoRouter = express.Router();
import { upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController"

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;