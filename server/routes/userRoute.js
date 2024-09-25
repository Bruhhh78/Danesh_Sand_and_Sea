import express from 'express'
import { bookVisit, createUser, getAllBookings } from '../controllers/userController.js'

const router = express.Router()

router.post("/register",createUser);
router.post("/bookvisit/:id",bookVisit);
router.get("/allbookings",getAllBookings)

export {router as userRoute}