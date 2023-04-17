require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const authRouter = require("./routes/auth_route.js");
const reportRouter = require("./routes/missing_report_route.js");
const donationRouter = require("./routes/donation_route.js");
const volunteerRouter = require("./routes/volunteer_route.js");
const adoptionRouter = require("./routes/kids_adoption_route.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

const DATABASE_URL = process.env.DATABASE_URL;
console.log(DATABASE_URL);

prisma
  .$connect()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.use("/auth", authRouter);
apiRouter.use("/report", reportRouter);
apiRouter.use("/donation", donationRouter);
apiRouter.use("/volunteer", volunteerRouter);
apiRouter.use("/kids-adoption", adoptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the registration API!");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
