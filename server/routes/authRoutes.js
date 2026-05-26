import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import {
  registerValidation,
} from "../validators/authValidator.js";
import validate from "../middleware/validationMiddleware.js";


const authRouter = express.Router();


authRouter.post(
  "/register",
  registerValidation,
  validate,
  registerUser
);

authRouter.post("/login", loginUser);

authRouter.get("/profile", protect, (req, res) => {

  res.json({
    success: true,
    user: req.user,
  });

});

export default authRouter;