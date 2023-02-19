const { PrismaClient } = require('@prisma/client');

const { CustomError } = require('../middleware/error_handler.js');

const prisma = new PrismaClient();


module.exports.createMissingReport = async (req, res, next) => {
    try {
        const { reporterName, childLastSeenAddress, childLastSeenTime, childAge, remarks, userId: reporterId } = req.body;

        const user = await prisma.user.findUnique({ where: { id: reporterId } });
        if (!user) throw new Error('Reporter not found.');

        const missingReport = await prisma.missingReport.create({
            data: {
                reporterName,
                childLastSeenAddress,
                childLastSeenTime,
                childAge,
                remarks,
                reporterId
            }
        });
        res.status(200).json({ status: 'success', message: 'Missing report created successfully.', data: missingReport });
    } catch (err) {
        throw err;
    }
}
