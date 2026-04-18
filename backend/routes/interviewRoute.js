import express from "express";
import isAuth from "../middleware/isAuth.js";
import { upload } from "../middleware/multer.js";
import { analyseResume } from "../controllers/interviewController.js";

const interviewRouter = express.Router();

interviewRouter.post("/resume", isAuth, upload.single("resume"), analyseResume);

export default interviewRouter