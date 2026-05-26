import mongoose from "mongoose";

const appointmentSchema =
  new mongoose.Schema(
    {
      customer: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      barber: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Barber",

        required: true,
      },

      service: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Service",

        required: true,
      },

      appointmentDate: {
        type: String,
        required: true,
      },

      startTime: {
        type: String,
        required: true,
      },

      endTime: {
        type: String,
        required: true,
      },

      status: {
        type: String,

        enum: [
          "pending",
          "confirmed",
          "completed",
          "cancelled",
        ],

        default: "pending",
      },

      notes: {
        type: String,
        default: "",
      },
    },
    {
      timestamps: true,
    }
  );

appointmentSchema.index({
  customer: 1,
});

appointmentSchema.index({
  barber: 1,
});

appointmentSchema.index({
  appointmentDate: 1,
});

appointmentSchema.index({
  status: 1,
});

const Appointment =
  mongoose.model(
    "Appointment",
    appointmentSchema
  );

export default Appointment;