// Main server setup

const express = require('express');
const app = express();
const connectDB = require('./config/database');
//add routes for each page here
const homeRoute = require('/workspace/recipeGenerator/views/index.ejs')

require('dotenv').config({path: './config/.env'})

connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRoute);
//app.use('/', recipeRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!');
})