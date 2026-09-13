const asyncHandler = require("../utils/asyncHandler");
const ApiError= require("../utils/ApiError");
const ApiResponse=require("../utils/ApiResponse");
const pool= require("../config/db");

const getPaste_events=asyncHandler(async(req,res)=>{
    const result=await pool.query(
        "SELECT * FROM paste_events"
    );
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                result.rows,
                "paste_events fetched successfully"
            )
        );

});

module.exports={ getPaste_events };