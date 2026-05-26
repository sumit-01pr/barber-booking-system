import Service from "../models/Service.js";

export const createService = async (
  serviceData
) => {

  const service = await Service.create(
    serviceData
  );

  return service;

};

export const getAllServices = async () => {

  const services = await Service.find({
    isActive: true,
  }).sort({
    createdAt: -1,
  });

  return services;

};
export const getSingleService = async (
  serviceId
) => {

  const service = await Service.findById(
    serviceId
  );

  if (!service || !service.isActive) {
    throw new Error("Service not found");
  }

  return service;

};

export const updateService = async (
  serviceId,
  updateData
) => {

  const service =
    await Service.findByIdAndUpdate(
      serviceId,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

  if (!service) {
    throw new Error("Service not found");
  }

  return service;

};

export const deleteService = async (
  serviceId
) => {

  const service =
    await Service.findById(serviceId);

  if (!service) {
    throw new Error("Service not found");
  }

  service.isActive = false;

  await service.save();

  return service;

};