import express from 'express'
import { bookVisit, cancelBooking, createUser, getAllBookings } from '../controllers/userController.js'

const router = express.Router()

router.post("/register",createUser);
router.post("/bookvisit/:id",bookVisit);
router.get("/getallbookings",getAllBookings);
router.post("/cancelbooking/:id",cancelBooking);

export {router as userRoute}