import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app= express();
app.use(cors());


mongoose.connect(process.env.MONGO_URL).then(()=>console.log("MongoDB connected")).catch((err)=>console.log(err));

//routes
app.get("/", (req,res)=>{
    res.send("Backend is working");
})

app.get("/api/products", (req,res)=>{
    res.json([
        {
            id:1,
            name:"Iphone 15",
            price: 60000,
            category:"Mobile"
        },
        {
            id:2,
            name:"MacBook  Air",
            price: 900000,
            category:"Laptop"
        },
        {
            id:3,
            name:"Airpods",
            price:20000,
            category:"Accessories"
        }
    ])
})

app.listen(8000, ()=>{
    console.log("server is listening at 8000")
})

