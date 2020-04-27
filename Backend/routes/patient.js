const express = require("express");
const mysql = require("mysql")
const router = express.Router();
const database = require('../connection');

let patient = {
    patient_id:Number,
    name:String,
    gender:String,
    birthdate:Date,
    blood_type: String,
    room_number: Number,
    employees_id: JSON,
    diagnosis: String
}
router.get('/all', (req,res)=>{
    let sql = "SELECT * FROM patients";
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        for(i =0; i < (result).length;i++){
            result[i].employees_id = JSON.parse(result[i].employees_id)
        }
        res.send(result)
        console.log(result)
    })
})
router.get(`/:id`, (req,res)=>{
    let sql = "SELECT * FROM patients WHERE patient_id ="+req.params.id;
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        result[0].employees_id = JSON.parse(result[0].employees_id)
        
        res.send(result[0])
        
    })
})
router.post('/add', async(req,res)=>{
    try{

    patient = {
        ... req.body,
        employees_id: JSON.stringify(req.body.employees_id)
    }
   
    let sql = `INSERT INTO patients (name, gender, birthdate, employees_id, room_number, blood_type, diagnosis) VALUES ("${patient.name}", "${patient.gender}", 
                "${patient.birthdate}", '${patient.employees_id}', "${patient.room_number}", "${patient.blood_type}" , "${patient.diagnosis}")`
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

    patient = {
        ... req.body,
        employees_id: JSON.stringify(req.body.employees_id)
    }
    let sql = `UPDATE patients SET name='${patient.name}', gender='${patient.gender}', birthdate='${patient.birthdate}', employees_id='${patient.employees_id}', room_number = '${patient.room_number}',
        blood_type = '${patient.blood_type}', diagnosis = '${patient.diagnosis}'WHERE patient_id=${patient.patient_id}`
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