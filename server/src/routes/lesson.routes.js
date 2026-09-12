const express=require('express');
const {getLessons}=require('../controllers/lesson.controller');

const router=express.Router();

router.get('/',getLessons);

module.exports= router;