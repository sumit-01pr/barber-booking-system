import express from "express";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

import validate from "../middleware/validationMiddleware.js";

import {
  createServiceHandler,
  getServicesHandler,
  getSingleServiceHandler,
  updateServiceHandler,
  deleteServiceHandler
} from "../controllers/serviceController.js";

import {
  serviceValidation,
  updateServiceValidation
} from "../validators/serviceValidator.js";

const serviceRouter = express.Router();

serviceRouter.post(
  "/",
  protect,
  adminOnly,
  serviceValidation,
  validate,
  createServiceHandler
);

serviceRouter.get(
  "/",
  getServicesHandler
);

serviceRouter.get(
  "/:id",
  getSingleServiceHandler
);
serviceRouter.put(
  "/:id",
  protect,
  adminOnly,
  updateServiceValidation,
  validate,
  updateServiceHandler
);
serviceRouter.delete(
  "/:id",
  protect,
  adminOnly,
  deleteServiceHandler
);
export default serviceRouter;