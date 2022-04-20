const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create user
router.post(
  '/signup',
  userController.checkUsername,
  userController.createUser,
  (req: any, res: any) => {
    res
      .status(200)
      .json(
        res.locals.userExists
          ? res.locals.username
          : { err: 'user already exists' }
      );
  }
);

// Verify user

router.post('/verify', userController.verifyUser, (req: any, res: any) => {
  res
    .status(200)
    .json(
      res.locals.verified
        ? res.locals.username
        : { err: 'incorrect credentials' }
    );
});

export {};
module.exports = router;
