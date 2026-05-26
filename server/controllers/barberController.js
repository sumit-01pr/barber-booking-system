import asyncHandler from "../utils/asyncHandler.js";

import {
  createBarber,
  getBarbers,
  getSingleBarber,
} from "../services/barberService.js";

export const createBarberHandler =
  asyncHandler(async (req, res) => {

    const barber =
      await createBarber(req.body);

    res.status(201).json({
      success: true,
      message:
        "Barber created successfully",
      barber,
    });

  });

  export const getBarbersHandler =
  asyncHandler(async (req, res) => {

    const barbers =
      await getBarbers();

    res.status(200).json({
      success: true,
      count: barbers.length,
      barbers,
    });

  });

  export const getSingleBarberHandler =
  asyncHandler(async (req, res) => {

    const barber =
      await getSingleBarber(
        req.params.id
      );

    res.status(200).json({
      success: true,
      barber,
    });

  });