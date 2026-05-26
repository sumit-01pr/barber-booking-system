import asyncHandler
from "../utils/asyncHandler.js";

import {
  createAppointment,
  getAvailableSlots,
  getMyAppointments,
  cancelAppointment,
  getBarberAppointments,
  updateAppointmentStatus,
  getAllAppointments,
} from "../services/appointmentService.js";

export const createAppointmentHandler =
  asyncHandler(async (req, res) => {

    const appointment =
      await createAppointment({
        ...req.body,
        customer: req.user._id,
      });

    res.status(201).json({
      success: true,
      message:
        "Appointment booked successfully",
      appointment,
    });

  });

export const getAvailableSlotsHandler =
  asyncHandler(async (req, res) => {

    const {
      barberId,
      serviceId,
      appointmentDate,
    } = req.query;

    const slots =
      await getAvailableSlots(
        barberId,
        serviceId,
        appointmentDate
      );

    res.status(200).json({
      success: true,
      count: slots.length,
      slots,
    });

  });

export const getMyAppointmentsHandler =
  asyncHandler(async (req, res) => {

    const appointments =
      await getMyAppointments(
        req.user._id
      );

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });

  });

export const cancelAppointmentHandler =
  asyncHandler(async (req, res) => {

    const appointment =
      await cancelAppointment(
        req.params.id,
        req.user._id
      );

    res.status(200).json({
      success: true,
      message:
        "Appointment cancelled",
      appointment,
    });

  });

export const getBarberAppointmentsHandler =
  asyncHandler(async (req, res) => {

    const appointments =
      await getBarberAppointments(
        req.user._id
      );

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });

  });

export const updateAppointmentStatusHandler =
  asyncHandler(async (req, res) => {

    const appointment =
      await updateAppointmentStatus(
        req.params.id,
        req.body.status,
        req.user._id
      );

    res.status(200).json({
      success: true,
      message:
        "Appointment updated",
      appointment,
    });

  });

export const getAllAppointmentsHandler =
  asyncHandler(async (req, res) => {

    const data =
      await getAllAppointments(
        req.query
      );

    res.status(200).json({
      success: true,

      total: data.total,

      page: data.page,

      limit: data.limit,

      count:
        data.appointments.length,

      appointments:
        data.appointments,
    });

  });