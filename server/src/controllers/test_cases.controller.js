const asyncHandler= require('../utils/asyncHandler');
const ApiResponse= require('../utils/ApiResponse');
const ApiError= require("../utils/ApiError");
const pool= require('../config/db');

const getTestCases=asyncHandler(async(req,res)=>{
    const result=await pool.query("SELECT * FROM test_cases ORDER BY ID");

    if(!result.rows){
        throw new ApiError(500,"Failed to fetch test_cases")
    }

    return res
        .status(200)
        .json(new ApiResponse(200,result.rows, "test_cases fetched successfully"))
});

module.exports= { getTestCases };