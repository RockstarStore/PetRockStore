const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create user
router.post("/signup", userController.createUser, (req: any, res: any) => {
  res.status(200).json(res.locals.createUser);
});

// Verify user

router.post("/verify", userController.verifyUser, (req: any, res: any) => {
  res.locals.verified
    ? // TODO: fix redirect after page creation
      res.send("user exists")
    : res.send("user does not exist");
});

export {};
module.exports = router;
