// Import core middleware dependencies
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Initialize the Express app
const app = express();

// ---------- MIDDLEWARE SETUP ----------

// Enable Cross-Origin Resource Sharing (CORS)
// Allows the frontend (on a different domain) to access this backend
app.use(cors({
    origin: process.env.CORS_ORIGIN,   // e.g., http://localhost:3000 or production domain
    credentials: true                  // allow sending cookies, auth headers, etc.
}));

// Parse incoming JSON payloads with a body size limit
app.use(express.json({ limit: "20kb" })); // Useful for handling API requests with JSON body

// Parse incoming URL-encoded data (like from HTML forms)
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

// Serve static files from the "public" directory
// e.g., GET /logo.png will serve public/logo.png
app.use(express.static("public"));

// Parse cookies attached to the client request object
// Enables reading/writing cookies easily (like for auth tokens)
app.use(cookieParser());

// ---------- EXPORT THE APP ----------
export { app };
