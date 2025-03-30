require("dotenv").config(); // Load environment variables from .env file
import express, { json } from "express";
import { createTransport } from "nodemailer";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
app.use(cors({
  origin: "https://portfolio-1-ey9y.onrender.com", 
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

// Email sending route
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? "Exists" : "Missing");
  
    

  try {
    let transporter = createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      
      auth: {
        user: process.env.GMAIL_USER, // my Gmail
        pass: process.env.GMAIL_PASS, // Gmail App Password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Message: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));