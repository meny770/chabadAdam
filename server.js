const express = require("express");
const { check, validationResult } = require('express-validator');
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
// const passport = require("passport-local");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors  = require("cors");
const  route = require("./route/route");
const app = express()

const mongoUrl = 'mongodb://localhost:27017/newBC';
const port = 4000;

mongoose.connect(mongoUrl, {useNewUrlParser: true})
     .then(ev=>console.log("connect to db", ))
     .catch(err=>console.log(err));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser())
// app.use(cors);

app.use(express.static(path.join(__dirname, './client/build')))
app.get('*/', (req, res) => {
     res.sendFile(path.resolve('./client/build/index.html'))
} )
// app.use(session({
//     secret: "secret",
//     saveUninitialized: true,
//     resave: true,
// }))


// app.post('/user', [
//     check('username').isEmail(),
//     check('password').isLength({ min: 5 })
// ], (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(422).json({ errors: errors.array() });
//     }
//     User.create({
//     username: req.body.username,
//     password: req.body.password
// }).then(user => res.json(user));
// });
//Static file declaration
// app.use(express.static(path.join(__dirname, '../client/public')));

// production mode
// // if(process.env.NODE_ENV === 'production') {
//       app.use(express.static(path.join(__dirname, 'client/build'))); 
//       app.get('*/', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  
//     })
// }


//build mode
// app.get('*/', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})

// app.use(flash())
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, './client/public/index.html'))
//     res.send("hy")
// })


app.use(route)


app.listen(port, ()=>console.log(`listen to port ${port}`))