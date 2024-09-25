import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

// Function to create a new user in the database
export const createUser = asyncHandler(async (req, res) => {
  // console.log("Creating User...");

  let { email } = req.body;
  // console.log(email);
  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User created successfully",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User already Registered" });
  }
});

// Function to book a visit to residency
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This residency is already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send({ message: "Your Visit is Booked Successfully" });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// Function to get all the bookings
export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings)
  } catch (error) {
    throw new Error(err.message);
  }
});
