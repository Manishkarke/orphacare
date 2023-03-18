const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.createKid = async (req, res, next) => {
  try {
    const {
      picture,
      name,
      surname,
      age,
      caste,
      gender,
      provience,
      description,
    } = req.body;
    const { role } = req;
    if (role !== "admin") {
      return res.status(403).json({
        status: "error",
        message: "You are not authorized to create the kids for adoption.",
      });
    }
    console.log(`The role is ${role}`);
    const kids = await prisma.kidsForAdoption.create({
      data: {
        picture,
        name,
        surname,
        age,
        caste,
        gender,
        provience,
        description,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Kids created successfully.",
      data: kids,
    });
  } catch (err) {
    throw err;
  }
};

module.exports.getAllKids = async (req, res, next) => {
  try {
    const kids = await prisma.kidsforAdoption.findMany({
      select: {
        id: true,
        picture: true,
        name: true,
        surname: true,
        age: true,
        caste: true,
        gender: true,
        provience: true,
        description: true,
      },
    });
    res.status(200).json({
      status: "success",
      message: "All Kids shown successfully",
      data: kids,
    });
  } catch (err) {
    throw err;
  }
};
module.exports.getKid = async (req, res, next) => {
  const { kidId } = req.params;
  try {
    const singleKid = await prisma.kidsforAdoption.findUnique({
      where: {
        id: kidId,
      },
      select: {
        id: true,
        picture: true,
        name: true,
        surname: true,
        age: true,
        caste: true,
        gender: true,
        provience: true,
        description: true,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Single kid by id shown successfully.",
      data: singleKid,
    });
  } catch (err) {
    throw err;
  }
};
module.exports.updateKid = async (req, res, next) => {
  const {
    id,
    picture,
    name,
    surname,
    age,
    caste,
    gender,
    provience,
    description,
  } = req.body;
  try {
    const existingKid = await prisma.kidsforAdoption.findUnique({
      where: {
        id,
      },
    });
    if (!existingKid) {
      return res.status(404).json({
        status: "error",
        message: "Kid not found.",
      });
    }
    // Check if authenticated user owns this donation

    //   if (existing.donatorId !== req.userId) {
    //     return res.status(403).json({
    //       status: "error",
    //       message: "You are not authorized to update this donation.",
    //     });}
    // If the ID exists, update the record
    const updatedKid = await prisma.kidsforAdoption.update({
      where: {
        id,
      },
      data: {
        picture,
        name,
        surname,
        age,
        caste,
        gender,
        provience,
        description,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Donation updated successfully.",
      data: updatedKid,
    });
  } catch (err) {
    throw err;
  }
};

module.exports.deleteKid = async (req, res, next) => {
  const { kidId } = req.params;
  try {
    const existingKid = await prisma.kidsforAdoption.findUnique({
      where: {
        id: kidId,
      },
    });
    if (!existingKid) {
      return res.status(404).json({
        status: "error",
        message: "Kid not found.",
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
    await prisma.kidsforAdoption.delete({
      where: { id: kidId },
    });
    res.status(200).json({
      status: "success",
      message: "Kid deleted successfully.",
    });
  } catch (err) {
    throw err;
  }
};
