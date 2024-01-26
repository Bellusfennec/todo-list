const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/User");
const { generateImage } = require("../utils/helpers");
const bcryptjs = require("bcryptjs");
const tokenService = require("../services/token.service");
const { check, validationResult } = require("express-validator");
const Token = require("../models/Token");

router.post("/signUp", [
  check("email", "Некорректный email").isEmail(),
  check("password", "Минимальная длинна пароля 6 символов").isLength({
    min: 6
  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400
            // errors: errors.array()
          }
        });
      }

      const { email, password, firstName } = req.body;
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          error: { message: "EMAIL_EXISTS", code: 400 }
        });
      }

      const hashedPassword = await bcryptjs.hash(password, 12);
      const newUser = await User.create({
        ...generateImage(firstName || email),
        ...req.body,
        password: hashedPassword
      });

      const tokens = tokenService.generate({ _id: newUser._id });
      await tokenService.save(newUser._id, tokens.refreshToken);

      res.status(201).send({ ...tokens, userId: newUser._id });
    } catch (error) {
      res.status(500).json({ message: "На сервере произошла ошибка. Попробуйте позже" });
    }
  }
]);

router.post("/signInWithPassword", [
  check("email", "Email некорректный").normalizeEmail().isEmail(),
  check("password", "Пароль не может быть пустым").exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400
            // errors: errors.array()
          }
        });
      }

      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).json({
          error: {
            message: "EMAIL_NOT_FOUND",
            code: 400
          }
        });
      }

      const isPasswordEqual = await bcryptjs.compare(password, existingUser.password);

      if (!isPasswordEqual) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400
          }
        });
      }

      const tokens = tokenService.generate({ _id: existingUser._id });
      await tokenService.save(existingUser._id, tokens.refreshToken);

      res.status(200).send({ ...tokens, userId: existingUser._id });
    } catch (error) {
      res.status(500).json({ message: "На сервере произошла ошибка. Попробуйте позже" });
    }
  }
]);

function isTokenInvalid(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.userId?.toString();
}

router.post("/token", async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;

    const data = tokenService.validateRefresh(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);

    if (isTokenInvalid(data, dbToken)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const tokens = tokenService.generate({ _id: data._id });
    await tokenService.save(data._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: data._id });
  } catch (error) {
    res.status(500).json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

module.exports = router;
