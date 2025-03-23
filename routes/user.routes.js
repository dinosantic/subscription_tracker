import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "Profile route" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ title: "User profile route" });
});
userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update user profile route" });
});
userRouter.post("/", (req, res) => {
  res.send({ title: "Create user profile route" });
});
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete user profile route" });
});

export default userRouter;
