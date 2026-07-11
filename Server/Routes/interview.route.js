import express from "express";
import isAuth from "../Middleware/isAuth.js";
import { upload } from "../Middleware/multer.js";
import { analyzeResume, finishInterview, generateQuestion, submitAnswer } from "../Controllers/interview.controller.js";

const interviewRouter = express.Router();

interviewRouter.post("/resume", isAuth, upload.single("resume"), analyzeResume);
interviewRouter.post("/generate-questions", isAuth, generateQuestion);
interviewRouter.post("/submit-answer", isAuth, submitAnswer);
interviewRouter.post("/finish", isAuth, finishInterview);

export default interviewRouter;