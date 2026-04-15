import express from 'express'
import { googleAuthController, logout } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post("/google", googleAuthController)
authRouter.get("/logout", logout)

export default authRouter;