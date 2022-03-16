const express = require("express");
const router = express.Router()

const{
    create_single_product,
    get_all_products,
    get_single_product,
    update_single_product,
    delete_single_product = require("../contorllers/product.js")
}
// create a product
//
router.post("/",create_single_product)
//get all product
//
router.get("/",)

//get single prodcut
router.get("/:productId")

//
//update single product

router.patch("/:productId")
//

//delete single product
router.delete("/:productId")

module.exports=router;