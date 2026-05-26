import Barber from "../models/Barber.js";

export const createBarber = async (
  barberData
) => {

  const barber =
    await Barber.create(barberData);

  return barber;

};

export const getBarbers = async () => {

  const barbers = await Barber.find({
    isAvailable: true,
  })
    .populate(
      "user",
      "name email role"
    )
    .sort({
      createdAt: -1,
    });

  return barbers;

};

export const getSingleBarber = async (
  barberId
) => {

  const barber =
    await Barber.findById(barberId)
      .populate(
        "user",
        "name email role"
      );

  if (!barber) {
    throw new Error("Barber not found");
  }

  return barber;

};