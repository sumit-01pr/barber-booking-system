import express from "express";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

import validate from "../middleware/validationMiddleware.js";

import {
  barberValidation,
} from "../validators/barberValidator.js";

const barberRouter = express.Router();
import {
  createBarberHandler,
  getBarbersHandler,
  getSingleBarberHandler,
} from "../controllers/barberController.js";

barberRouter.post(
  "/",
  protect,
  adminOnly,
  barberValidation,
  validate,
  createBarberHandler
);
    
barberRouter.get(
  "/",
  getBarbersHandler
);

barberRouter.get(
  "/:id",
  getSingleBarberHandler
);

export default barberRouter;