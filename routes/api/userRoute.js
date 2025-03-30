import express from "express";
import mysqlDB from "../../config/db.js";
import { signup } from "../../controllers/userController.js";

const userRoutes = express.Router()

userRoutes.post("/signup", signup)

export default userRoutes