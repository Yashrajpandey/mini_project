const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose =require("mongoose");

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));








app.get("/",(req,res)=>{
res.render("index")
})

app.get("/vender",(req,res)=>{
    res.render("vender");
})

app.get("/user",(req,res)=>{
    res.render("user");
})

app.get("/signin",(req,res)=>{
    res.render("signin");
})

app.listen("3000",(req,res)=>{
    console.log("server is running at 3000 ");
});