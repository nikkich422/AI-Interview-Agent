import express from "express";
import { getCurrentUser } from "../Controllers/user.controller.js";
import isAuth from "../Middleware/isAuth.js";

const userRouter = express.Router();

userRouter.get('/current-user', isAuth, getCurrentUser);

export default userRouter;