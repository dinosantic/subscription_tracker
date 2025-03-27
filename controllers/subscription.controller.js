import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
export const getUserSubscriptions = async (req, res) => {
  try {
    if (req.user._id != req.params.id) {
      return res.status(401).json({ success: false, error: "Unauthorized" });
    }
    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
