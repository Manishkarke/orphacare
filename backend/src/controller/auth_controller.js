const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports.signUpUser = async (req, res) => {
    try{

    
        const { name, address, emailAddress, phoneNumber, password } = req.body;

        const user = await prisma.user.create({
            data: {
                name,
                address,
                emailAddress,
                phoneNumber,
                password,
            },
        });

        res.status(201).json({
            message: 'User created successfully.',
            data: user,
        });}catch(error){
            console.error(error);
        }
};

module.exports.loginUser = async (req, res) => {
        const { emailAddress, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                emailAddress,
            },
        });

        if (!user) {
            throw 'User not found.';
        }

        if (user.password !== password) {
            throw 'Incorrect password.';
        }

        res.status(200).json({
            message: 'User logged in successfully.',
            data: user,
        });
};

