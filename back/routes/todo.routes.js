const express = require("express");
const router = express.Router({ mergeParams: true });
const Todo = require("../models/Todo");
const auth = require("../middleware/auth.middleware");
const { check, validationResult } = require("express-validator");

router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const list = await Todo.find({ userId }).sort({ " createdAt ": -1 });

    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

router.post("/", auth, [
  check("name", "Минимальная длинна названия 1 символ").isLength({
    min: 1
  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: { message: "INVALID_DATA", code: 400 } });
      }
      const userId = req.user._id;
      const todo = { ...req.body, done: false, index: 0, userId };
      const newTodo = await Todo.create(todo);

      res.status(201).send(newTodo);
    } catch (error) {
      res.status(500).json({ message: "На сервере произошла ошибка. Попробуйте позже" });
    }
  }
]);

router.patch("/:todoId", auth, async (req, res) => {
  try {
    const { todoId } = req.params;
    const todo = { ...req.body };
    const updTodo = await Todo.findByIdAndUpdate(todoId, todo, { new: true });

    res.status(201).send(updTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

router.delete("/:todoId", auth, async (req, res) => {
  try {
    const { todoId } = req.params;

    await Todo.deleteOne({ _id: todoId });

    res.status(201).send(null);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

module.exports = router;
