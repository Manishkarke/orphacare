const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.createVolunteer = async (req, res, next) => {
  try {
    const { name, age, picture } = req.body;
    const volunteer = await prisma.volunteer.create({
      data: {
        name,
        age,
        picture,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Volunteer created successfully.",
      data: volunteer,
    });
  } catch (err) {
    throw err;
  }
};
module.exports.getAllVolunteers = async (req, res, next) => {
  try {
    const volunteers = await prisma.volunteer.findMany({
      select: {
        id: true,
        name: true,
        age: true,
        picture: true,
      },
    });
    res.status(200).json({
      status: "success",
      message: "All Volunteers shown successfully",
      data: volunteers,
    });
  } catch (err) {
    throw err;
  }
};
module.exports.getVolunteer = async (req, res, next) => {
  const { volunteerId } = req.params;
  try {
    const singleVolunteer = await prisma.volunteer.findUnique({
      where: {
        id: volunteerId,
      },
      select: {
        id: true,
        name: true,
        age: true,
        picture: true,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Single volunteer by id shown successfully.",
      data: singleVolunteer,
    });
  } catch (err) {
    throw err;
  }
};
module.exports.updateVolunteer = async (req, res, next) => {
  const { id, name, age, picture } = req.body;
  try {
    const existingVolunteer = await prisma.volunteer.findUnique({
      where: {
        id,
      },
    });
    if (!existingVolunteer) {
      return res.status(404).json({
        status: "error",
        message: "Volunteer not found.",
      });
    }
    // Check if authenticated user owns this donation

    //   if (existing.donatorId !== req.userId) {
    //     return res.status(403).json({
    //       status: "error",
    //       message: "You are not authorized to update this donation.",
    //     });}
    // If the ID exists, update the record

    const updatedVolunteer = await prisma.volunteer.update({
      where: {
        id,
      },
      data: {
        name,
        age,
        picture,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Donation updated successfully.",
      data: updatedVolunteer,
    });
  } catch (err) {
    throw err;
  }
};
module.exports.deleteVolunteer = async (req, res, next) => {
  const { volunteerId } = req.params;
  try {
    const existingVolunteer = await prisma.volunteer.findUnique({
      where: {
        id: volunteerId,
      },
    });
    if (!existingVolunteer) {
      return res.status(404).json({
        status: "error",
        message: "Volunteer not found.",
      });
    }
    // // Check if authenticated user owns this donation

    // if (existingDonation.donatorId !== req.userId) {
    //     return res.status(403).json({
    //       status: "error",
    //       message: "You are not authorized to delete this donation.",
    //     });
    //   }
    // If the ID exists, delete the record
    await prisma.volunteer.delete({
      where: { id: volunteerId },
    });
    res.status(200).json({
      status: "success",
      message: "Volunteer deleted successfully.",
    });
  } catch (err) {
    throw err;
  }
};
