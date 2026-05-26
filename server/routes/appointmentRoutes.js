import express from "express";

import {
  protect,
adminOnly,
} from "../middleware/authMiddleware.js";

import validate
from "../middleware/validationMiddleware.js";

import {
  appointmentValidation,
} from "../validators/appointmentValidator.js";

import {
  createAppointmentHandler,
  getAvailableSlotsHandler,
  getMyAppointmentsHandler,
  cancelAppointmentHandler,
  getBarberAppointmentsHandler,
  updateAppointmentStatusHandler,
  getAllAppointmentsHandler,
} from "../controllers/appointmentController.js";

const appointmentRouter =
  express.Router();

appointmentRouter.post(
  "/",
  protect,
  appointmentValidation,
  validate,
  createAppointmentHandler
);

appointmentRouter.get(
  "/available-slots",
  getAvailableSlotsHandler
);

appointmentRouter.get(
  "/my-appointments",
  protect,
  getMyAppointmentsHandler
);
appointmentRouter.patch(
  "/:id/cancel",
  protect,
  cancelAppointmentHandler
);

appointmentRouter.get(
  "/barber",
  protect,
  getBarberAppointmentsHandler
);

appointmentRouter.patch(
  "/:id/status",
  protect,
  updateAppointmentStatusHandler
);


appointmentRouter.get(
  "/admin",
  protect,
  adminOnly,
  getAllAppointmentsHandler
);

export default appointmentRouter;