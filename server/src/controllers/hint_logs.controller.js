/**
 * Hint usage log (which hint level a learner asked for).
 * GET /api/hint_logs
 */
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const ApiResponse = require('../utils/ApiResponse');
const pool = require('../config/db');

const getHint_logs = asyncHandler(async (req, res) => {
    const result = await pool.query('SELECT * FROM hint_logs');

    if (!result.rows) {
        throw new ApiError(500, 'Failed to fetch hint logs');
    }

    return res
        .status(200)
        .json(new ApiResponse(200, result.rows, 'Hint logs fetched successfully'));
});

module.exports = { getHint_logs };
