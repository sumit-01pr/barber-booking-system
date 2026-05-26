import mongoose from "mongoose";

const barberSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    specialization: [
      {
        type: String,
      },
    ],

    workingHours: {
      start: {
        type: String,
        required: true,
      },

      end: {
        type: String,
        required: true,
      },
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    bio: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Barber = mongoose.model(
  "Barber",
  barberSchema
);

export default Barber;