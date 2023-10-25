const express = require("express");
const mongoose = require("mongoose");
const citiesModel = require("./model/citiesModel");
const departmentsModel =require("./model/departmentsModel");
const fullnameModel = require("./model/fullnameModel");
const gendersModel = require("./model/gendersModel");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/assignmentdb")
.then(()=>{
    console.log("MongoDB is connected!!!");
});

app.get("/",(req, res)=>{
    res.send("Welcome to the School app...");
});

app.get("/cities", async (req, res)=>{
    const result = await citiesModel.find({});
    res.send(result);
});

app.get("/departments", async (req,res)=>{
    const result = await departmentsModel.find({});
    res.send(result);
});

app.get("/fullname", async  (req, res)=>{
    const result = await fullnameModel.find({});
    res.send(result);
});

app.get("/genders", async (req, res)=>{
    const result = await gendersModel.find({});
    res.send(result);
});

app.listen(5060, ()=>{
    console.log("Service is running on Port 5060...");
});