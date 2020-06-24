const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json("It works!");
});

router.get("/user/:userId", (req, res) => {
  const user = {
    username: "johndoe",
    userId: req.params.userId,
    title: "professor",
    bio: "Just a guy lookin' to preach.",
    reputation: 1203,
    flair: ["x", "y", "z"]
  };
  res.json(user);
});

module.exports = router;
