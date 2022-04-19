const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// Get user's cart
router.get('/:id', shopController.getCart, (req: any, res: any) => {
  res.status(200).json(res.locals.getCart);
})
// Add to cart
router.post(
  "/",
  shopController.addCart, 
  (req: any, res: any) => {
    res.status(200).json(res.locals.addCart);
  });

//remove from cart
router.delete(
  "/:id",
  shopController.deleteCart,
  (req: any, res: any) => {
    res.status(200).json(res.locals.deleted)
  });
  
export {};
module.exports = router;
