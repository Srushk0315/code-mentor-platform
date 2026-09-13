/**
 * Per-user lesson progress (attempted / completed).
 * GET /api/progress
 */
const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/ApiResponse');
const ApiError = require('../utils/ApiError');
const pool = require('../config/db');

const getProgress = asyncHandler(async (req, res) => {
    const result = await pool.query('SELECT * FROM progress');

    if (!result.rows) {
        throw new ApiError(500, 'Failed to fetch progress');
    }

    return res
        .status(200)
        .json(new ApiResponse(200, result.rows, 'Progress fetched successfully'));
});

module.exports = { getProgress };
