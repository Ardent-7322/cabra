//NOTE : database is always in another continent => time lagega hence use async await and also try catch
import dotenv from "dotenv"; // we can't import dotenv directly
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()
