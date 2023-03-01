const { PrismaClient } = require("@prisma/client");
// const { CustomError } = require("../middleware/error_handler.js");
const prisma = new PrismaClient();

module.exports.createDonation = async (req, res, next) => {
  try {
    const {
      name,
      address,
      phoneNumber,
      emailAddress,
      weight,
      age,
      donationType,
    } = req.body;

    const donation = await prisma.donation.create({
      data: {
        name,
        address,
        phoneNumber,
        emailAddress,
        weight,
        age,
        donationType,
      },
    });
    console.log("Created donation:", donation);
    res.status(200).json({
      status: "success",
      message: "Donation created successfully.",
      data: donation,
    });
  } catch (err) {
    console.error("Error creating donation:", err);
    throw err;
  }
};
