import express from "express";
import mysqlDB from "../../config/db.js";
import { signup } from "../../controllers/userController.js";

const userRoutes = express.Router()

// user register/signup
// userRoutes.post("/register", (req, res) => {

//     const { username, password } = req.body

//     if (username == "" || password == "") {
//         return res.status(400).json({
//             status: 400,
//             message: "Username and password is required"
//         })
//     }

//     const sql = 'INSERT INTO users (username, password) VALUES (?, ?)'
//     mysqlDB.query(sql, [username, password], (error, result) => {
//         if (error) {
//             console.error("Error in inserting data to DB, Error: ", error.sqlMessage)
//             return res.status(400).json({
//                 status: 400,
//                 message: "Something went wrong user not registered",
//                 error: error.sqlMessage
//             })
//         }
//         return res.status(200).json({
//             status: 200,
//             message: "User registered successfully"
//         })
//     })


// })

userRoutes.post("/signup", signup)


export default userRoutes