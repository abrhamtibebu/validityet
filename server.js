import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Contact Form Route
app.post("/send-email", async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required" });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    let mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // Email where messages will be sent
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
