const express = require("express");
const router = express.Router();
const rockController = require("../controllers/rockController");


  router.get('/:id', rockController.getRock, (req:any, res:any) => {
    res.status(200).json(res.locals.getRock);
  })

  router.get('/rocks', rockController.getRocks, (req:any, res:any) => {
    res.status(200).json(res.locals.getRocks);
  })

export {};
module.exports = router;