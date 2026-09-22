import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app= express();
import Product from "./models/Product.js"
app.use(cors());


mongoose.connect(process.env.MONGO_URL).then(()=>console.log("MongoDB connected")).catch((err)=>console.log(err));

//routes
app.get("/", (req,res)=>{
    res.send("Backend is working");
})

app.get("/api/products", async(req,res)=>{
    try{
        const products= await Product.find();
        res.json(products);
    }
    catch(err){
        res.status(500).json({message: "Failed to fetch products", error: err.message});
    }
})

app.listen(8000, ()=>{
    console.log("server is listening at 8000")
})

