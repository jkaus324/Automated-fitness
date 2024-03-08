const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
// const validator = require("validator");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUrl = 'mongodb+srv://pridhis22:pridhis22@cluster0.xlwfgc3.mongodb.net/?retryWrites=true&w=majority';


mongoose
  .connect(mongoUrl,{dbName:"autofitness"})
  .then(() => {
    app.listen(5000, () => {
      console.log("Server started !! ");
    });
    console.log("Connected to database !");
  })
  .catch((err) => {
    console.log(err);
  });

const User = require("./Schema/UserDetails");
const Contact = require("./Schema/ContactDetails");

app.post("/signup", (req, res) => {
  const { username, email, password, city, country, address, phonenumber } =
    req.body;

  User.findOne({ username })
    .then((oldUser) => {
      if (oldUser) {
        return res.json({ error: "User exists" });
      }
      return User.create({
        username,
        email,
        password,
        phonenumber,
        address,
        city,
        country,
      });
    })
    .then(() => {
      res.send({ status: "saved" });
      // res.redirect('/');
    })
    .catch((error) => {
      res.send({ status: "something went wrong" });
    });
});

app.post("/get-user", (req, res) => {
  const username = req.body;
  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.json({ error: "User not found" });
      }
      return user;
    })
    .then((user) => {
      return user.json();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/contactpage", async (req, res) => {
  try {
    const { username, email, mobilenumber, query } = req.body;

    console.log("Request body:", req.body); // Log the request body for debugging
    const oldUser = await Contact.findOne({ username });

    if (oldUser) {
      oldUser.queries.push(query);
      await oldUser.save();
    } else {
      const newQuery = new Contact({
        username,
        email,
        mobilenumber,
        queries: [query],
      });
      await newQuery.save();
    }

    res.send({ saved: "saved" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ error: "user not found !" });
    }
    if (password === user.password) {
      // res.redirect('/');
      return res.json({ status: "ok", data: user });
    }
    return res.json({ status: "error", error: "invalid password" });
  } catch (err) {
    return res.json({ status: err, error: "something went wrong" });
  }
});
