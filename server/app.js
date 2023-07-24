require("dotenv").config();

const express = require("express");
const app = express();

const port = 8005;

app.listen(port, () =>{
    console.log(`server is running on port number ${port}`);
})
