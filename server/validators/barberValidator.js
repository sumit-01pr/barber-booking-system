import { body } from "express-validator";

export const barberValidation = [

  body("user")
    .notEmpty()
    .withMessage("User is required"),

  body("experience")
    .isNumeric()
    .withMessage(
      "Experience must be numeric"
    ),

  body("workingHours.start")
    .notEmpty()
    .withMessage(
      "Start time is required"
    ),

  body("workingHours.end")
    .notEmpty()
    .withMessage(
      "End time is required"
    ),

];