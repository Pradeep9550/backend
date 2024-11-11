import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'     //coolieParse is used for acces user browser and cookies from server

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))   // json type data
app.use(express.urlencoded({extended: true, limit: "16kb"}))    // data from URL
app.use(express.static("public"))             // images, pdf

app.use(cookieParser())



//routes 
import router from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", router )








export { app }