const express=require('express');
const { getTestCases } = require('../controllers/test_cases.controller');

const router=express.Router();

router.get('/',getTestCases);

module.exports= router;