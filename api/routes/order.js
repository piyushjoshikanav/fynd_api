const express = require("express");
const router = express.Router()

const{
    create_order,
    get_all_order,
    get_single_order,
    update_single_order,
    delete_single_order
}=require("../contorllers/order.js");
router.post("/",create_order)

router.get("/",get_all_order)

router.get("/:orderId",get_single_order)

router.patch("/:orderId",update_single_order)

router.delete("/:orderId",delete_single_order)
module.exports=router;
