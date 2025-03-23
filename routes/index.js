import { Router } from "express";
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js";
import subscriptionRouter from "./subscription.routes.js";

const router = Router();

// routes
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/subscriptions", subscriptionRouter);

export default router;
