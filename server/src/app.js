import express from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import nodemailer from "nodemailer"
import stripe from 'stripe'
import mainRoute from './routes/main.route.js'
import bodyParser from 'body-parser'
import { v2 as cloudinary } from "cloudinary"
import cors from "cors"
import Twilio from "twilio";
// import { webhook } from './controller/main.controller.js'

// import session from 'express-session'
// import MemoryStore from 'memorystore'

// const MemoryStoreInstance = MemoryStore(session);


const app = express()


dotenv.config({
  path: './.env'
})


// stripe webhook --

// webhook ------

app.use("/webhook", bodyParser.raw({ type: "application/json" }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.json())
const allowedOrigins = ['http://localhost:5173', 'https://zoho-henna.vercel.app'];
app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}))

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))


export const Transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  host: process.env.HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.FROM,
    pass: process.env.PASSWORD,
  },
});

// webhook route ---

// app.post('/webhook', webhook)

// routes -----

// bypass mainroute 
app.use('/api/v1', mainRoute)


// twilio conf --

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;
export const client = new Twilio(accountSid, authToken);


// cloudinary config ---

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});


export default app