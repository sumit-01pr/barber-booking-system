import asyncHandler from "../utils/asyncHandler.js";

import {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService
} from "../services/serviceService.js";

export const createServiceHandler =
  asyncHandler(async (req, res) => {

    const service =
      await createService(req.body);

    res.status(201).json({
      success: true,
      message:
        "Service created successfully",
      service,
    });

  });
  export const getServicesHandler =
  asyncHandler(async (req, res) => {

    const services =
      await getAllServices();

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });

  });
  export const getSingleServiceHandler =
  asyncHandler(async (req, res) => {

    const service =
      await getSingleService(
        req.params.id
      );

    res.status(200).json({
      success: true,
      service,
    });

  });
  export const updateServiceHandler =
  asyncHandler(async (req, res) => {

    const service =
      await updateService(
        req.params.id,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "Service updated successfully",
      service,
    });

  });

  export const deleteServiceHandler =
  asyncHandler(async (req, res) => {

    await deleteService(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Service deleted successfully",
    });

  });