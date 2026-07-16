import express from "express";
import dotenv from "dotenv";
import connectDb from "./Config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRouter from "./Routes/auth.route.js";
import userRouter from "./Routes/user.route.js";
import interviewRouter from "./Routes/interview.route.js";
import paymentRouter from "./Routes/payment.route.js";

const app = express();
dotenv.config();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDb();
});