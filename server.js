import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import routes from "./routes/index.js"
import ip from "ip"
import cors from "cors"

// config .env
dotenv.config()

// creates an express app
const app = express()

// cors
app.use(cors());

// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// base URL
app.use("/", routes)

// connection port
const PORT = process.env.PORT || 5000

// gets local IP
const localIP = ip.address();

// listen on all network interfaces (0.0.0.0)
app.listen((PORT), '0.0.0.0', () => {
    console.log(`\n🚀 Server listening on port: ${PORT}`)
    console.log(`\n🌼 Server running on http://0.0.0.0:${PORT}`)
    console.log(`\n⭐ Server is accessible at http://${localIP}:${PORT}`)
})