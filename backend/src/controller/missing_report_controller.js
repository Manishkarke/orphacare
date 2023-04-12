const { PrismaClient } = require("@prisma/client");

const { CustomError } = require("../middleware/error_handler.js");

const prisma = new PrismaClient();

//creating a missing report
module.exports.createMissingReport = async (req, res, next) => {
  try {
    const { userId: reporterId } = req;
    const {
      childLastSeenAddress,
      childLastSeenTime,
      childAge,
      remarks,
      longitude,
      latitude,
    } = req.body;
    const image = req.file.path;
    const user = await prisma.user.findUnique({ where: { id: reporterId } });
    if (!user) throw new Error("Reporter not found.");

    const missingReport = await prisma.missingReport.create({
      data: {
        childLastSeenAddress,
        childLastSeenTime,
        childAge,
        remarks,
        longitude,
        latitude,
        reporterId,
        image,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Missing report created successfully.",
      data: missingReport,
    });
  } catch (err) {
    throw err;
  }
};
//getting all missing reports except own
module.exports.getAllMissingReports = async (req, res, next) => {
  try {
    const { userId: reporterId } = req;
    const missingReports = await prisma.missingReport.findMany({
      where: {
        NOT: {
          reporterId,
        },
      },
      select: {
        id: true,
        childLastSeenAddress: true,
        childLastSeenTime: true,
        childAge: true,
        remarks: true,
        longitude: true,
        latitude: true,
        image:true,
        reporter: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    res.status(200).json({
      status: " success",
      message: "got all missing report lists except own ",
      data: missingReports,
    });
  } catch (err) {
    throw err;
  }
};

//get only my missing report
module.exports.getMyMissingReport = async (req, res, next) => {
  try {
    const { userId: reporterId } = req;
    const getMyMissingReports = await prisma.missingReport.findMany({
      where: {
        reporterId,
      },
      select: {
        id: true,
        childLastSeenAddress: true,
        childLastSeenTime: true,
        childAge: true,
        remarks: true,
        longitude: true,
        latitude: true,
        image:true,
        reporter: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    res.status(200).json({
      status: "success",
      message: " My missing reports shown successfully.",
      data: getMyMissingReports,
    });
  } catch (err) {
    throw err;
  }
};
//getting a single missing report by id
module.exports.getMissingReport = async (req, res, next) => {
  const { missingReportId } = req.params;

  try {
    const missingReports = await prisma.missingReport.findUnique({
      where: {
        id: missingReportId,
      },
      select: {
        id: true,
        childLastSeenAddress: true,
        childLastSeenTime: true,
        childAge: true,
        remarks: true,
        longitude: true,
        latitude: true,
        image: true,
        reporter: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    res.status(200).json({
      status: " success",
      message: " Single missing report by id shown successfully",
      data: missingReports,
    });
  } catch (err) {
    throw err;
  }
};

//updating a donation
module.exports.updateMissingReport = async (req, res, next) => {
  try {
    const {
      id,
      childLastSeenAddress,
      childLastSeenTime,
      childAge,
      remarks,
      longitude,
      latitude,
    } = req.body;
    const existingMissingReport = await prisma.missingReport.findUnique({
      where: {
        id,
      },
    });
    if (!existingMissingReport) {
      return res.status(404).json({
        status: "error",
        message: "Missing report not found.",
      });
    }
    // Check if authenticated user owns this donation

    if (existingMissingReport.reporterId !== req.userId) {
      return res.status(403).json({
        status: "error",
        message: "You are not authorized to update this missing report.",
      });
    }
    // If the ID exists, update the record
    const updatedMissingReport = await prisma.missingReport.update({
      where: {
        id,
      },
      data: {
        childLastSeenAddress,
        childLastSeenTime,
        childAge,
        remarks,
        longitude,
        latitude,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Missing report updated successfully.",
      data: updatedMissingReport,
    });
  } catch (err) {
    throw err;
  }
};

//deleteing a missing report
module.exports.deleteMissingReport = async (req, res, next) => {
  const { missingReportId } = req.params;
  try {
    const existingMissingReport = await prisma.missingReport.findUnique({
      where: {
        id: missingReportId,
      },
    });
    if (!existingMissingReport) {
      return res.status(404).json({
        status: "error",
        message: "Missing report not found.",
      });
    }
    // Check if authenticated user owns this donation
    if (existingMissingReport.reporterId !== req.userId) {
      return res.status(403).json({
        status: "error",
        message: "You are not authorized to delete this missing report.",
      });
    }
    await prisma.missingReport.delete({
      where: { id: missingReportId },
    });
    res.status(200).json({
      status: "success",
      message: "Missing report deleted successfully.",
    });
  } catch (err) {
    throw err;
  }
};
