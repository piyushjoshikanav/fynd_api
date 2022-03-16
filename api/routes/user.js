const express = require("express");
const router = express.Router();

const {create_user,get_all_user}= require("../contorllers/user.js");
// l const user = require("../contorllers/user.js");

router.post("/",create_user);
// get all users
router.get("/",get_all_user)
// create user

// get single user

//update single user

//
module.exports=router;