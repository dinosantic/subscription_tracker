import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Error while getting users", error: error.message });
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Error while getting users", error: error.message });
  }
};
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res
      .status(400)
      .send({ message: "Error while creating user", error: error.message });
  }
};
