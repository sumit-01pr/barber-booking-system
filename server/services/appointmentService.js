import Appointment
from "../models/Appointment.js";

import Service
from "../models/Service.js";

import generateSlots
from "../utils/generateSlots.js";

import Barber
from "../models/Barber.js";

import ApiError
from "../utils/ApiError.js";

import User
from "../models/User.js";

export const createAppointment =
  async (appointmentData) => {

    const existingAppointment =
      await Appointment.findOne({
        barber:
          appointmentData.barber,

        appointmentDate:
          appointmentData.appointmentDate,

        startTime:
          appointmentData.startTime,

        status: {
          $ne: "cancelled",
        },
      });

    if (existingAppointment) {

      throw new ApiError(
        "Time slot already booked",
        400
      );

    }

    const appointment =
      await Appointment.create(
        appointmentData
      );

    return appointment;

  };

export const getAvailableSlots =
  async (
    barberId,
    serviceId,
    appointmentDate
  ) => {

    const barber =
      await Barber.findById(barberId);

    if (!barber) {

      throw new ApiError(
        "Barber not found",
        404
      );

    }

    const service =
      await Service.findById(serviceId);

    if (!service) {

      throw new ApiError(
        "Service not found",
        404
      );

    }

    const allSlots =
      generateSlots(
        barber.workingHours.start,
        barber.workingHours.end,
        service.duration
      );

    const bookedAppointments =
      await Appointment.find({
        barber: barberId,
        appointmentDate,
        status: {
          $ne: "cancelled",
        },
      });

    const bookedSlots =
      bookedAppointments.map(
        (appointment) =>
          appointment.startTime
      );

    const availableSlots =
      allSlots.filter(
        (slot) =>
          !bookedSlots.includes(slot)
      );

    return availableSlots;

  };

export const getMyAppointments =
  async (customerId) => {

    const appointments =
      await Appointment.find({
        customer: customerId,
      })
        .populate(
          "barber",
          "experience specialization"
        )
        .populate(
          "service",
          "name price duration"
        )
        .sort({
          appointmentDate: -1,
        });

    return appointments;

  };

export const cancelAppointment =
  async (
    appointmentId,
    customerId
  ) => {

    const appointment =
      await Appointment.findOne({
        _id: appointmentId,
        customer: customerId,
      });

    if (!appointment) {

      throw new ApiError(
        "Appointment not found",
        404
      );

    }

    appointment.status =
      "cancelled";

    await appointment.save();

    return appointment;

  };

export const getBarberAppointments =
  async (userId) => {

    const barber =
      await Barber.findOne({
        user: userId,
      });

    if (!barber) {

      throw new ApiError(
        "Barber profile not found",
        404
      );

    }

    const appointments =
      await Appointment.find({
        barber: barber._id,
      })
        .populate(
          "customer",
          "name email"
        )
        .populate(
          "service",
          "name price duration"
        )
        .sort({
          appointmentDate: 1,
          startTime: 1,
        });

    return appointments;

  };

export const updateAppointmentStatus =
  async (
    appointmentId,
    status,
    userId
  ) => {

    const barber =
      await Barber.findOne({
        user: userId,
      });

    if (!barber) {

      throw new ApiError(
        "Barber profile not found",
        404
      );

    }

    const appointment =
      await Appointment.findOne({
        _id: appointmentId,
        barber: barber._id,
      });

    if (!appointment) {

      throw new ApiError(
        "Appointment not found",
        404
      );

    }

    appointment.status = status;

    await appointment.save();

    return appointment;

  };

export const getAllAppointments =
  async (query) => {

    const page =
      Number(query.page) || 1;

    const limit =
      Number(query.limit) || 5;

    const skip =
      (page - 1) * limit;

    const filter = {};

    if (query.status) {

      filter.status =
        query.status;

    }

    if (query.search) {

      const customers =
        await User.find({
          name: {
            $regex: query.search,
            $options: "i",
          },
        });

      const customerIds =
        customers.map(
          (customer) =>
            customer._id
        );

      filter.customer = {
        $in: customerIds,
      };

    }

    const appointments =
      await Appointment.find(filter)

        .populate(
          "customer",
          "name email"
        )

        .populate({
          path: "barber",
          populate: {
            path: "user",
            select: "name email",
          },
        })

        .populate(
          "service",
          "name price duration"
        )

        .sort({
          createdAt: -1,
        })

        .skip(skip)

        .limit(limit);

    const total =
      await Appointment.countDocuments(
        filter
      );

    return {
      total,
      page,
      limit,
      appointments,
    };

  };

export const getDashboardStats =
  async () => {

    const totalAppointments =
      await Appointment.countDocuments();

    const completedAppointments =
      await Appointment.countDocuments({
        status: "completed",
      });

    const cancelledAppointments =
      await Appointment.countDocuments({
        status: "cancelled",
      });

    const completedServices =
      await Appointment.find({
        status: "completed",
      }).populate(
        "service",
        "price"
      );

    const totalRevenue =
      completedServices.reduce(
        (sum, appointment) =>
          sum +
          (appointment.service?.price || 0),
        0
      );

    return {
      totalAppointments,
      completedAppointments,
      cancelledAppointments,
      totalRevenue,
    };

  };