import { body } from "express-validator";

export const appointmentValidation = [

  body("barber")
    .isMongoId()
    .withMessage("Invalid barber ID"),

  body("service")
    .isMongoId()
    .withMessage("Invalid service ID"),

  body("appointmentDate")
    .notEmpty()
    .withMessage(
      "Appointment date required"
    ),

  body("startTime")
    .notEmpty()
    .withMessage(
      "Start time required"
    ),

  body("endTime")
    .notEmpty()
    .withMessage(
      "End time required"
    ),

];