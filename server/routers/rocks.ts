const express = require("express");
const router = express.Router();
const rockController = require("../controllers/rockController");

  router.get('/', rockController.getRocks, (req:any, res:any) => {
    res.status(200).json(res.locals.getRocks);
  })

  router.get('/:id', rockController.getRock, (req:any, res:any) => {
    res.status(200).json(res.locals.getRock);
  })

export {};
module.exports = router;