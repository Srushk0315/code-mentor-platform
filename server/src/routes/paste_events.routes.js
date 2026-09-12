const express=require("express");
const {getPaste_events}=require("../controllers/paste_events.controller");

const router=express.Router();

router.get("/",getPaste_events);

module.exports = router;
