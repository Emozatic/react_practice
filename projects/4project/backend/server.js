require("dotenv").config();
const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");
const Task= require("./models/Task");

app.use(express.json());
app.use(cors());

app.get("/api/tasks", async(req,res)=>{
    try{
        const tasks= await Task.find();
        res.json(tasks);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Tasks not fetched"
        })
    }
})

// app.post("/api/tasks", (req,res)=>{
//     const newTask= req.body;
//     console.log(req.body)
//     res.status(201).json({message: "Task received successfully", task:newTask})
// })

app.post("/api/tasks",async(req,res)=>{
    try{
        const newTask= await Task.create({
            title:req.body.title,
            completed:false
        });
        res.status(201).json({message:"Task saved successfully", task:newTask});
    }catch(err){
        res.status(500).json({
            message:"Failed to save task",
            error:err.message
        })
    }
})


app.delete("/api/tasks/:id", async(req,res)=>{
    try{
        const deletedTask= await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask){
            return res.status(404).json({
                message:"Task not found"
            })
        }
        res.json({
            message:"Task deleted successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Task not deleted"
        })
    }
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongo db connected");

    app.listen(8000,()=>{
        console.log("app is listening at 8000")
    })
}).catch((err)=>{
    console.log("MongoDB connection erorr:", err.message)
})