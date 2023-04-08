const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const emailService = require("../services/email_service.js");

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
    const kids = await prisma.kidsForAdoption.findMany({
      where: {
        isAdopted: false,
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
    const singleKid = await prisma.kidsForAdoption.findUnique({
      where: {
        id: kidId,
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
    const existingKid = await prisma.kidsForAdoption.findUnique({
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
    const updatedKid = await prisma.kidsForAdoption.update({
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
    const adopterDetails = await prisma.user.findUnique;
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
    const existingKid = await prisma.kidsForAdoption.findUnique({
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

module.exports.requestForAdoption = async (req, res, next) => {
  const { kidId } = req.params;
  const { userId: adopterId } = req;
  console.log(`The user Id is as: ${adopterId}`)

  try {
    const existingKid = await prisma.kidsForAdoption.findUnique({
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

    if (existingKid.isAdopted) {
      return res.status(422).json({
        status: "error",
        message: "Kid is already adopted.",
      });
    }

    await prisma.kidsForAdoption.update({
      where: { id: kidId },
      data: {
        isAdopted: true,
        adopterId,
      },
    });
    const adopterData = await prisma.user.findUnique({
      where: { id: adopterId },
      // select: {
      //   emailAddress,
      // },
    });
    await emailService.sendMail(adopterData.emailAddress, existingKid.name);

    res.status(200).json({
      status: "success",
      message: "Kid adoption request sent successfully.",
    });
  } catch (err) {
    throw err;
  }
};
