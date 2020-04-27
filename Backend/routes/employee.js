const express = require("express");
const mysql = require("mysql")
const router = express.Router();
const database = require('../connection');

let employee = {
    employee_id:Number,
    name:String,
    gender:String,
    position:String,
    schedule: JSON,
    floor_num: Number
}
router.get('/all', (req,res)=>{
    console.log("All was called!")
    let sql = "SELECT * FROM Employees";
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        for(i =0; i < (result).length;i++){
            result[i].schedule = JSON.parse(result[i].schedule)
        }
        res.send(result)
        console.log(result)
    })
})
router.get(`/:id`, (req,res)=>{
    let sql = "SELECT * FROM Employees WHERE employee_id ="+req.params.id;
    try{
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        result[0].schedule = JSON.parse(result[0].schedule)
        res.send({err:"",employee:result[0]})
        
    })}catch(err){
        res.send({error:"Employee not found!"})
    }
})
router.post('/add', async(req,res)=>{
    try{

    employee = {
        ... req.body,
        schedule: JSON.stringify(req.body.schedule)
    }
   
    let sql = `INSERT INTO employees (name, gender, position, schedule, floor_num) VALUES ("${employee.name}", "${employee.gender}", "${employee.position}", '${employee.schedule}', "${employee.floor_num}")`
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        res.send(result)
        console.log(result)
    })
}catch(err){
    console.log(err)
}
})
router.put('/update', async(req,res)=>{
    try{

    employee = {
        ... req.body,
        schedule: JSON.stringify(req.body.schedule)
    }
    let sql = `UPDATE employees SET name='${employee.name}', gender='${employee.gender}', position='${employee.position}', schedule='${employee.schedule}', floor_num = '${employee.floor_num}' WHERE employee_id=${employee.employee_id}`
    database.query(sql,(err,result)=>{
    if(err){
            throw err        
        }
        res.send(result)
        console.log(result)
    })
}catch(err){
    console.log(err)
}
})

module.exports = router;