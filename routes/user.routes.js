import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

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
