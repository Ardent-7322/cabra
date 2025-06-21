//NOTE : database is always in another continent => time lagega hence use async await and also try catch
import dotenv from "dotenv"; // we can't import dotenv directly
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

// jab bhi async execute ho ek promise back hota hai 
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` Server is running on port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed",error);
})