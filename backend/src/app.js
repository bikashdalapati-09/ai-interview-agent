import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRouter from '../routes/authRoute.js';
import userRouter from '../routes/userRoute.js';
import interviewRouter from '../routes/interviewRoute.js';
import paymentRouter from '../routes/paymentRoute.js';

const app = express();
app.use(cors({
    origin: "https://ai-interview-agent-client-o7ai.onrender.com",
    credentials: true
}))

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

export default app
