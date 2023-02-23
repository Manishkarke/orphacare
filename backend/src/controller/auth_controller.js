const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { createNewAccessToken,createNewRefreshToken } = require('../services/jwt_handler.js');
const { CustomError } = require('../middleware/error_handler.js');

const prisma = new PrismaClient();
const saltRounds = 10;

module.exports.signUpUser = async (req, res, next) => {
    try {

        const { name, address, emailAddress, phoneNumber, password } = req.body;

        // Check if email or phone number already exists in the database
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { emailAddress },
                    { phoneNumber },
                ],
            },
        });

        if (existingUser) {
            throw new CustomError(400, 'Email or phone number already exists');
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Create new user in the database
        const user = await prisma.user.create({
            data: {
                name,
                address,
                emailAddress,
                phoneNumber,
                password: hashedPassword,
            },
        });

        res.status(201).json({
            status: "success",
            message: 'User created successfully.',
            data: {
                id: user.id,
                name: user.name,
                emailAddress: user.emailAddress,
                phoneNumber: user.phoneNumber,
                address: user.address,
                createdAt: user.createdAt,
            }
        });

    } catch (error) {
        throw error;
    }
};

module.exports.loginUser = async (req, res) => {

    const {  emailAddress,  password } = req.body;
    // const { userEmail: emailAddress, userPassword: password } = req.body;
    // Find user in database
    const user = await prisma.user.findUnique({ where: { emailAddress } });

    if (!user) {
        throw new CustomError(401, 'Invalid email address or password');
    }

    // Compare password hash
    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
        throw new CustomError(401, 'Invalid email address or password');
    }

    // Create JWT token
    const accessToken = createNewAccessToken(user.id);
    const refreshToken = createNewRefreshToken(user.id);

    // Return token
    const responseData = {
        id: user.id,
        name: user.name,
        emailAddress: user.emailAddress,
        accessToken: accessToken
        , refreshToken: refreshToken
    };

    res.status(200).json({ status: 'success', message: 'Logged in successfully.', data: responseData});
};
