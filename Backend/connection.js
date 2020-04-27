const express = require("express");
const mysql = require("mysql")
const bodyParser = require("body-parser")
const router = express.Router();



//Need to adjust based username, password, and database
var database = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'HospitalDb'
});

database.connect((err)=>{
    console.log("Running connection")
    if(err){
        console.log(err)
    }else{
    console.log("Connected!")
}
})//

module.exports = database;