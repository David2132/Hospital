const express = require("express");
const mysql = require("mysql")
const router = express.Router();
const database = require('../connection');

let patient_med = {
    id:Number,
    patient_id:Number,
    med_id:Number,
    name:String,
    instructions:String,
    
}
router.get('/all', (req,res)=>{
    let sql = "SELECT * FROM patient_med";
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
       
        res.send(result)
        console.log(result)
    })
})
router.get(`/patient/:id`, (req,res)=>{
    let sql = "SELECT * FROM patient_med WHERE patient_id ="+req.params.id;
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        
        res.send(result[0])
        
    })
})
router.get(`/med/:id`, (req,res)=>{
    let sql = "SELECT * FROM patient_med WHERE med_id ="+req.params.id;
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        
        res.send(result[0])
        
    })
})

router.post('/add', async(req,res)=>{
    try{

    patient_med = {
        ... req.body
    }
   
    let sql = `INSERT INTO patient_med (patient_id, med_id, instructions, name) VALUES ("${patient_med.patient_id}", "${patient_med.med_id}", 
                "${patient_med.instructions}","${patient_med.name}")`
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
        ... req.body
    }
    let sql = `UPDATE patient_id SET patient_id='${patient_med.patient_id}', med_id='${patient_med.med_id}',  name='${patient_med.name}', instructions='${patient_med.patient_instructions}' WHERE id=${patient_med.id}`
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