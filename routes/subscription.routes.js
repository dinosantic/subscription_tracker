import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Subscription route" });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "Subscription profile route" });
});
subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "Update subscription profile route" });
});
subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "Create subscription profile route" });
});
subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete subscription profile route" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET all user subscriptions" });
});
subscriptionRouter.get("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel subscription" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Upcoming subscription renewals" });
});

export default subscriptionRouter;
