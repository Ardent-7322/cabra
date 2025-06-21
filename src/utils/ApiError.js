// A custom error class to standardize API errors across the project
// It extends the native JavaScript Error object and adds additional fields
// that are useful for HTTP API responses

class ApiError extends Error {
    constructor(
        statusCode,                         // HTTP status code (e.g., 400, 401, 404, 500)
        message = "Something went wrong",   // Default message if none provided
        errors = [],                        // Array of additional error details (like validation issues)
        stack = ""                          // Optional stack trace (usually captured automatically)
    ) {
        // Call the base Error constructor with the message
        super(message);

        this.statusCode = statusCode;      // Attach the HTTP status code
        this.data = null;                  // Optionally attach relevant data (usually null on errors)
        this.message = message;            // The error message for the client
        this.success = false;              // Indicates failure (useful for consistent API responses)
        this.errors = errors;              // Field-level errors or additional metadata

        // Attach custom or auto-generated stack trace for debugging
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Export for use in services, controllers, and middleware
export { ApiError };
