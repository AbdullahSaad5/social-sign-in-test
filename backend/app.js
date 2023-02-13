const express = require("express");
const passport = require("passport");
const dotenv = require("dotenv");
const cors = require("cors");
const jwtDecode = require("jwt-decode");
dotenv.config();

const app = express();

app.use(express.json());
app.use(passport.initialize(cors()));
app.use(cors());

app.post("/register-google-user", (req, res) => {
  const { credential } = req.body;

  const user_info = jwtDecode(credential);
  console.log(user_info);
  res.send({ message: "User registered successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
