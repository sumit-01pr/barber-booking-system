import { body } from "express-validator";

export const serviceValidation = [

  body("name")
    .trim()
    .notEmpty()
    .withMessage("Service name is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),

  body("price")
    .isNumeric()
    .withMessage("Price must be numeric"),

  body("duration")
    .isNumeric()
    .withMessage("Duration must be numeric"),

];

export const updateServiceValidation = [

  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Service name is required"),

  body("description")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Description is required"),

  body("price")
    .optional()
    .isNumeric()
    .withMessage("Price must be numeric"),

  body("duration")
    .optional()
    .isNumeric()
    .withMessage("Duration must be numeric"),

];