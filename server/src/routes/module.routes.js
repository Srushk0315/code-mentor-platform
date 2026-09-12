const express=require("express");
const {getModules}=require("../controllers/module.controller");

const router=express.Router();

router.get("/",getModules);

module.exports = router;
