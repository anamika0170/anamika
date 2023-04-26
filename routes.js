import express  from "express";
import MyProjects  from "./models/MyProjects.js";
import SocialLinks  from "./models/SocialLinks.js";
const router =  express.Router();
import nodemailer  from "nodemailer";
import dotenv  from "dotenv";
import mailgun  from "mailgun-js"
import MyDetails from "./models/MyDetails.js";

dotenv.config();

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

//testing router
router.get("/", (req, res) => {
  res.send("welcome to server");
});

//get my details Api
router.get("/getMyDetails", async (req, res) => {
  try {
    const Model = await MyDetails.findOne();
    res.json(Model);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

//get all projects
router.get("/getMyProjects", async (req, res) => {
  try {
    const Model = await MyProjects.find();
    res.json(Model);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

//get social links
router.get("/socialLinks", async (req, res) => {
  try {
    const Model = await SocialLinks.findOne();
    res.json(Model);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

//get a specific project's details
router.get("/getMyProject/:id", async (req, res) => {
  try {
    const project = await MyProjects.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// email transport configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "websiteuse.anamika6@gmail.com",
    pass: "Papa0170@.com",
  },
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const data = {
    from: `${name} ${email}`,
    to: "websiteuse.anamika6@gmail.com",
    subject: "New Contact Form Submission",
    text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      res.status(500).send("Error sending email");
    } else {
      res.send("Email sent successfully");
    }
  });
});

export default router
