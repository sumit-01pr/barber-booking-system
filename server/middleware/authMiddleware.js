import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {

    let token;

    // Check token exists
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {

      token = req.headers.authorization.split(" ")[1];

    }

    // No token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Find user
    req.user = await User.findById(decoded.id).select("-password");

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });

  }
};

export const adminOnly = (req, res, next) => {

  if (req.user && req.user.role === "admin") {
    next();
  } else {

    return res.status(403).json({
      success: false,
      message: "Admin access only",
    });

  }

};