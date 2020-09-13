//jshint esversion:6
const express = require("express");
const http = require("http");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const axios=require("axios");
var cors = require('cors');
const app = express();
app.set('view engine', 'ejs');
app.use(require("body-parser").json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());
require('dotenv').config();
var lattitude,longitude;
/*
var whitelist = ['http://content.guardianapis.com', 'https://api.openweathermap.org'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}
*/

var corsOptions = {
  origin: 'http://content.guardianapis.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const newsKey=process.env.NEWSAPIKEY;
const weatherKey=process.env.WEATHERAPIKEY;
app.get("/",async function(req,res){
  //sports,politics
  const url="http://content.guardianapis.com/search?order-by=newest&show-fields=trailText,title,thumbnail&show-blocks=body:latest:2&api-key="+newsKey;
  await axios.get(url)
  .then((response) => {
  //response.results[0].blocks.requestedBodyBlocks.body:latest:2[0].bodyHtml
 const d=response.data.response.results;
 res.render('home',{data:d});
  }) .catch((error) =>{
    console.log(error);
  })
  
});
app.get("/sports",cors(corsOptions),async function(req,res){
  //sports,politics
  const url="http://content.guardianapis.com/search?section=sport&order-by=newest&show-fields=trailText,title,thumbnail&show-blocks=body:latest:2&api-key="+newsKey;
  await axios.get(url)
  .then((response) => {
  //response.results[0].blocks.requestedBodyBlocks.body:latest:2[0].bodyHtml
 const d=response.data.response.results;
 res.render('home',{data:d});
  }) .catch((error) =>{
    console.log(error);
  })
});
app.get("/politics",cors(corsOptions),async function(req,res){
  //sports,politics
  const url="http://content.guardianapis.com/search?section=politics&order-by=newest&show-fields=trailText,title,thumbnail&show-blocks=body:latest:2&api-key="+newsKey;
  await axios.get(url)
  .then((response) => {
  //response.results[0].blocks.requestedBodyBlocks.body:latest:2[0].bodyHtml
 const d=response.data.response.results;
 res.render('home',{data:d});
  }) .catch((error) =>{
    console.log(error);
  })
});
app.get("/culture",cors(corsOptions),async function(req,res){
  //sports,politics
  const url="http://content.guardianapis.com/search?section=culture&order-by=newest&show-fields=trailText,title,thumbnail&show-blocks=body:latest:2&api-key="+newsKey;
  await axios.get(url)
  .then((response) => {
  //response.results[0].blocks.requestedBodyBlocks.body:latest:2[0].bodyHtml
 const d=response.data.response.results;
 res.render('home',{data:d});
  }) .catch((error) =>{
    console.log(error);
  })
});

app.get("/business",cors(corsOptions),async function(req,res){
  //sports,politics
  const url="https://content.guardianapis.com/search?section=business&order-by=newest&show-fields=trailText,title,thumbnail&show-blocks=body:latest:2&api-key="+newsKey;
  await axios.get(url)
  .then((response) => {
  //response.results[0].blocks.requestedBodyBlocks.body:latest:2[0].bodyHtml
 const d=response.data.response.results;
 res.render('home',{data:d});
  }) .catch((error) =>{
    console.log(error);
  })
});

app.get("/science",cors(corsOptions),async function(req,res){
  //sports,politics
  const url="https://content.guardianapis.com/search?section=science&order-by=newest&show-fields=trailText,title,thumbnail&&show-blocks=body:latest:2&api-key="+newsKey;
  await axios.get(url)
  .then((response) => {
  //response.results[0].blocks.requestedBodyBlocks.body:latest:2[0].bodyHtml
 const d=response.data.response.results;
 res.render('home',{data:d});
  }) .catch((error) =>{
    console.log(error);
  })
});

app.get("/technology",cors(corsOptions),async function(req,res){
  //sports,politics
  const url="https://content.guardianapis.com/search?section=technology&order-by=newest&show-fields=trailText,title,thumbnail&&show-blocks=body:latest:2&api-key="+newsKey;
  await axios.get(url)
  .then((response) => {
  //response.results[0].blocks.requestedBodyBlocks.body:latest:2[0].bodyHtml
 const d=response.data.response.results;
 res.render('home',{data:d});
  }) .catch((error) =>{
    console.log(error);
  })
});

app.post('/weather',function(req,res){
   console.log("helllo"+ req.body);
   lattitude=Math.round(Number.parseInt(req.body.lat,10));
   longitude=Math.round(Number.parseInt(req.body.lon,10));
 })
 app.get('/weather',function(req,res){
  console.log(lattitude+" "+longitude);
  const unit="metric";
  const url="https://api.openweathermap.org/data/2.5/weather?lat="+lattitude+"&lon="+longitude+"&appid="+weatherKey+"&units="+unit;
  https.get(url,function(response){
    response.on("data",function(data){
     // convert data into JSON object
    const weatherData= JSON.parse(data);
    console.log(weatherData);
    const id=weatherData.weather[0].id;
    res.render('weather',{weatherData:weatherData,id:id});
    })
  })
 });

app.listen(process.env.PORT||3000, function() {
  console.log("Server started on port 3000");
});
