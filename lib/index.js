"use strict";

// const express = require('express');
var _require = require('statuses'),
    message = _require.message; // const app = require('express')();


var validator = require('validator'); // const throttle = require('lodash.throttle');


var greeter = require('./greeter');

greeter('Hello friends!');

var validateEmail = function validateEmail(email) {
  return validator.isEmail(email);
};

console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@mail.com'));
console.log('Is Mangozedog.com a valid email?: ', validateEmail('Mangozedog.com')); // const app = express();
// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!!!<h1/>')
// });
// app.get('/', (req, res) => {
//     res.send({
//         message: "Node.js"
//     })
// })
// app.listen(3000, () => {
//     console.log('App is running on port 3000');
// })