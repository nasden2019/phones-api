const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Phones = require("./models/phones");
require('dotenv').config()

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  try {
    const phones = await Phones.find();
    if (!phones) throw new Error("No items");
    res.status(200).json(phones);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.post("/", async (req, res) => {
  const newPhone = new Phones(req.body);
  try {
    const phone = await newPhone.save();
    if (!phone) throw Error("Something went wrong");
    res.status(200).json(phone);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const phone = await Phones.findByIdAndDelete(req.params.id);
    if (!phone) throw Error("No phone found");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const phones = await Phones.findByIdAndUpdate(req.params.id, req.body);
    if (!phones) throw Error("Something went wrong...");
    res.status(200).json({ succes: true });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

