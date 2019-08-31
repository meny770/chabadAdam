const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors  = require("cors");
const app = express()

const port = 4000;


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors);

app.use(express.static(path.join(__dirname, './build')))
app.get('*/', (req, res) => {
     res.sendFile(path.resolve('./build/index.html'))
} )


app.listen(port, ()=>console.log(`listen to port ${port}`))
