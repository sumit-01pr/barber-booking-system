import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

import connectDB
from "./database/mongodb.js";

import authRouter
from "./routes/authRoutes.js";

import serviceRouter
from "./routes/serviceRoutes.js";

import barberRouter
from "./routes/barberRoutes.js";

import appointmentRouter
from "./routes/appointmentRoutes.js";

import errorMiddleware
from "./middleware/errorMiddleware.js";

import limiter
from "./middleware/rateLimiter.js";

import loggerMiddleware
from "./middleware/loggerMiddleware.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use(cors({

  origin:
    process.env.CLIENT_URL,

  credentials: true,

}));

app.use(helmet());

app.use(loggerMiddleware);

app.use(limiter);

app.get("/", (req, res) => {

  res.send("API Working");

});

app.use(
  "/api/auth",
  authRouter
);

app.use(
  "/api/services",
  serviceRouter
);

app.use(
  "/api/barbers",
  barberRouter
);

app.use(
  "/api/appointments",
  appointmentRouter
);

app.use(errorMiddleware);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});