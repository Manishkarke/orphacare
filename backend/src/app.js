require('dotenv').config();
const express = require('express');
const app = express();


const authRouter = require('./routes/auth_route.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

const DATABASE_URL = process.env.DATABASE_URL;
console.log(DATABASE_URL);

prisma.$connect()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Error connecting to database', error);
  });

app.use('/api', authRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the registration API!');
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});