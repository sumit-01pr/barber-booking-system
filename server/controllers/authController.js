import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "../utils/asyncHandler.js";
import {
  registerService,
  loginService,
} from "../services/authService.js";

export const registerUser = asyncHandler(
  async (req, res) => {

    const result = await registerService(
      req.body
    );

    res.status(201).json({
      success: true,
      message:
        "User registered successfully",
      ...result,
    });

  }
);

export const loginUser = asyncHandler(
  async (req, res) => {

    const result = await loginService(
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      ...result,
    });

  }
);