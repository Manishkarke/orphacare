const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const {
  createNewAccessToken,
  createNewRefreshToken,
} = require("../services/jwt_handler.js");
const { CustomError } = require("../middleware/error_handler.js");
const { Roles } = require("../constants/enums.js");

const prisma = new PrismaClient();
const saltRounds = 10;

module.exports.signUpUser = async (req, res, next) => {
  try {
    const { name, address, emailAddress, phoneNumber, password } = req.body;

    // Check if email or phone number already exists in the database
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ emailAddress }, { phoneNumber }],
      },
    });

    if (existingUser) {
      throw new CustomError(400, "Email or phone number already exists");
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
        // role: Roles || Roles.user,
      },
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully.",
      data: {
        id: user.id,
        name: user.name,
        emailAddress: user.emailAddress,
        phoneNumber: user.phoneNumber,
        address: user.address,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    throw error;
  }
};

module.exports.loginUser = async (req, res) => {
  const { emailAddress, password } = req.body;
  // Find user in database

  const user = await prisma.user.findUnique({
    where: { emailAddress: emailAddress },
  });

  if (!user) {
    throw new CustomError(401, "Invalid email address or password");
  }

  // Compare password hash
  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    throw new CustomError(401, "Incorrect password.");
  }

  // Create JWT token
  const accessToken = createNewAccessToken(user.id);
  const refreshToken = createNewRefreshToken(user.id);

  // Return token
  const responseData = {
    id: user.id,
    name: user.name,
    emailAddress: user.emailAddress,
    accessToken: accessToken,
    refreshToken: refreshToken,
  };

  res.status(200).json({
    status: "success",
    message: "Logged in successfully.",
    data: responseData,
  });
};

// //admin
// const user = await prisma.user.create({
//   data: {
//     name: "Sheela Pokhrel",
//     address: "Kathmandu, Nepal",
//     emailAddress: "angila.pokhrel58@gmail.com",
//     phoneNumber: "9842149651",
//     password: "admin123",
//     role: Roles.admin,
//   },
// });
