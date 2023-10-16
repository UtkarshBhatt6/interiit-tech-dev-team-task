import express from "express";
import cors from 'cors';
const PORT = process.env.PORT || 5000;
import axios from "axios";
import Subscription from "./models/subscriptionModel.js";
const app = express();
import mongoose from "mongoose";
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
  })
);
import dotenv from 'dotenv'
dotenv.config()
var mongoURL= process.env.DB_URL
var apiKey=process.env.API_KEY
mongoose.connect(mongoURL ,{useUnifiedTopology: true, useNewUrlParser: true})
var connection =mongoose.connection;
connection.on("error", ()=>{
    console.log("Connection Failed");
})
connection.on("connected", ()=>{
    console.log("connection with MongoDB successful");
})
app.post ('/get_news', async(req,res)=>{
    const {selectedCountry ,selectedCategory,selectedQuery}=req.body;
    console.log(selectedCountry,selectedCategory,selectedQuery)
    console.log(req.body);
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=${selectedQuery}&category=${selectedCategory}&country=${selectedCountry}&apiKey=${apiKey}`);
        const responseData = response.data;
        res.json(responseData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch news data' });
      }
})
app.post ('/add_subscription', async(req,res)=>{
    const {email,username,country}=req.body;
    console.log(req.body);
  try {
    const newSubscription = new Subscription({
      email_address: email,
      username: username,
      country: country,
    });
    const savedSubscription = await newSubscription.save();
    res.json(savedSubscription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add the subscription' });
  }
})
app.listen(PORT, () => {
    console.log("listening");
});
