const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");

router.get("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    res.send(user);
  } catch (error) {
    res.status(500).json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;

    if (userId === req.user._id) {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true
      });
      res.send(updatedUser);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

module.exports = router;
