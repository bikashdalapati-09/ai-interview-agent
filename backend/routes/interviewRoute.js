import express from "express";
import isAuth from "../middleware/isAuth.js";
import { upload } from "../middleware/multer.js";
import { analyseResume, finishInterview, generateQuestions, submitAnswer } from "../controllers/interviewController.js";

const interviewRouter = express.Router();

interviewRouter.post("/resume", isAuth, upload.single("resume"), analyseResume);
interviewRouter.post("/generate-questions", isAuth, generateQuestions)
interviewRouter.post("/submit-answer", isAuth, submitAnswer)
interviewRouter.post("/finish", isAuth, finishInterview)

export default interviewRouter