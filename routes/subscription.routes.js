import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Subscription route" });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "Get subscription details." });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "Update subscription profile route" });
});
subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete subscription profile route" });
});

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.get("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel subscription" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Upcoming subscription renewals" });
});

export default subscriptionRouter;
