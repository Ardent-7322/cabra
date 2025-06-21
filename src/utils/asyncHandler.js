// asyncHandler utility
// ----------------------
// A higher-order function that wraps async route handlers
// to automatically catch errors and pass them to Express error middleware

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        // Promise.resolve ensures the async function is handled as a Promise
        // If it rejects (throws error), catch and forward it to Express's error middleware
        Promise
            .resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};

// Export the utility so it can be used in routes/controllers
export { asyncHandler };






// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }