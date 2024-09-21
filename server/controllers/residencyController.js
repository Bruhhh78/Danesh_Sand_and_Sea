import asyncHandler from "express-async-handler";
import { prisma } from '../config/prismaConfig.js'; // Adjust the path as needed

// Controller function to create a residency
export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: { connect: { email: userEmail } },
      },
    });
    res.status(201).send({ message: "Residency created successfully", residency });
  } catch (err) {
    console.error(err);
    if (err.code === "P2002") {
      res.status(400).send({ message: "A residency with this address already exists for this user." });
    } else {
      res.status(500).send({ message: err.message });
    }
  }
});