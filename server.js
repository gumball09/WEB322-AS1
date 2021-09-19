/*********************************************************************************
 * WEB322 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: __Nghi Phuong Huynh Pham__ Student ID: __101412203__ Date: __Sep 14th, 2021__
 *
 * Online (Heroku) URL: https://web322as1.herokuapp.com/_______________________________________________________
 *
 ********************************************************************************/

const express = require('express');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h3>Nghi Phuong Huynh Pham - 101412203</h3>');
});

app.listen(HTTP_PORT, () => {
  console.log(`Express server HTTP listening on ${HTTP_PORT}`);
});
