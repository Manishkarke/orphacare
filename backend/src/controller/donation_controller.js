const { PrismaClient } = require("@prisma/client");
// const { CustomError } = require("../middleware/error_handler.js");
const prisma = new PrismaClient();

//creating a donation
module.exports.createDonation = async (req, res, next) => {
  try {
    const { userId: donatorId } = req;
    const { weight, donationType, } = req.body;

    // Use default value for donate amount if not provided in request body
    const donation = await prisma.donation.create({
      data: {
        weight,
        donationType,
        donatorId,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Donation created successfully.",
      data: donation,
    });
  } catch (err) {
    throw err;
  }
};

//creating a donation
module.exports.createDonationAmount = async (req, res, next) => {
  try {
    const { userId: donatorId } = req;
    const { donateAmount, } = req.body;

    // Use default value for donate amount if not provided in request body
    const amount = donateAmount || 0;
    const donation = await prisma.donationAmount.create({
      data: {
        donateAmount: amount, donatorId
      },
    });
    res.status(200).json({
      status: "success",
      message: "Donation amount created successfully.",
      data: donation,
    });
  } catch (err) {
    throw err;
  }
};

//getting all donations except own
module.exports.getAllDonations = async (req, res, next) => {
  try {
    const { userId: donatorId } = req;
    const getAllDonations = await prisma.donation.findMany({
      where: {
        NOT: {
          donatorId,
        },
      },
      select: {
        id: true,
        weight: true,
        donationType: true,
        donator: {
          select: {
            id: true,
            name: true,
            address: true,
            emailAddress: true,
            phoneNumber: true,
          },
        },
      },
    });
    res.status(200).json({
      status: "success",
      message: "All donations shown successfully except own.",
      data: getAllDonations,
    });
  } catch (err) {
    throw err;
  }
};
//get only my donation
module.exports.getMyDonations = async (req, res, next) => {
  try {
    const { userId: donatorId } = req;
    const getMyDonations = await prisma.donation.findMany({
      where: {
        donatorId,
      },
      select: {
        id: true,
        weight: true,
        donationType: true,
        donator: {
          select: {
            id: true,
            name: true,
            address: true,
            emailAddress: true,
            phoneNumber: true,
          },
        },
      },
    });
    res.status(200).json({
      status: "success",
      message: " My donations shown successfully.",
      data: getMyDonations,
    });
  } catch (err) {
    throw err;
  }
};

//getting a single donation by id
module.exports.getDonation = async (req, res, next) => {
  const { donationId } = req.params;
  try {
    const singleDonation = await prisma.donation.findUnique({
      where: {
        id: donationId,
      },
      select: {
        id: true,
        weight: true,
        donationType: true,
        donator: {
          select: {
            id: true,
            name: true,
            address: true,
            emailAddress: true,
            phoneNumber: true,
          },
        },
      },
    });
    res.status(200).json({
      status: "success",
      message: "Single donation by id shown successfully.",
      data: singleDonation,
    });
  } catch (err) {
    throw err;
  }
};

//updating a donation
module.exports.updateDonation = async (req, res, next) => {
  try {
    const { id, donateAmount } = req.body;
    const existingDonation = await prisma.donation.findUnique({
      where: {
        id,
      },
    });
    if (!existingDonation) {
      return res.status(404).json({
        status: "error",
        message: "Donation not found.",
      });
    }
    // Check if authenticated user owns this donation

    if (existingDonation.donatorId !== req.userId) {
      return res.status(403).json({
        status: "error",
        message: "You are not authorized to update this donation.",
      });
    }
    // If the ID exists, update the record
    const updatedDonation = await prisma.donation.update({
      where: {
        id,
      },
      data: {
        donateAmount,
        donationType: existingDonation.donationType,
        donatorId: existingDonation.donatorId,
        weight: existingDonation.weight
      },
    });
    res.status(200).json({
      status: "success",
      message: "Donation updated successfully.",
      data: updatedDonation,
    });
  } catch (err) {
    throw err;
  }
};

//deleteing a donation
module.exports.deleteDonation = async (req, res, next) => {
  const { donationId } = req.params;
  try {
    const existingDonation = await prisma.donation.findUnique({
      where: {
        id: donationId,
      },
    });
    if (!existingDonation) {
      return res.status(404).json({
        status: "error",
        message: "Donation not found.",
      });
    }
    // Check if authenticated user owns this donation

    if (existingDonation.donatorId !== req.userId) {
      return res.status(403).json({
        status: "error",
        message: "You are not authorized to delete this donation.",
      });
    }

    // If the ID exists, delete the record
    await prisma.donation.delete({
      where: { id: donationId },
    });
    res.status(200).json({
      status: "success",
      message: "Donation deleted successfully.",
    });
  } catch (err) {
    throw err;
  }
};
