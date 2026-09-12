const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
const languageRoutes = require('./routes/language.routes');
const moduleRoutes= require('./routes/module.routes');
const lessonRoutes= require('./routes/lesson.routes');
app.use('/api/languages', languageRoutes);
app.use('/api/module',moduleRoutes);
app.use('/api/lessons',lessonRoutes);

// Error-handling middleware - must be defined AFTER all routes.
// Any error passed via next(err) (including from asyncHandler) lands here.
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        errors: err.errors || [],
    });
});




app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});