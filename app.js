//jshint esversion:6
const express=require("express");
const path=require("path");
const fs=require("fs");

const app=express();  //this is a handler function instance

app.get("/",(req,res) => {
  res.sendFile(__dirname+"/index.html");
});

app.use("/data",(request,res) => {
  console.log(request.query);
  let randomarr=request.query;
  if(request.query.random===undefined || request.query.number===undefined) {
    res.send("400");
    res.sendStatus(400);
    return;
  }
  randomnumber=0;
  while(randomnumber<=request.query.random)
  {
  randomnumber=Math.floor(Math.random()*request.query.number);
  }
  randomobject={
    number:randomnumber,
    start:request.query.random,
    end:request.query.number
  };
  res.json(randomobject);
  res.sendStatus(200);

});


app.listen(3000,(err) => {
  if(err) {
    console.log("error occured");
  }
  else {
    console.log("you server has been set up");
  }
});
