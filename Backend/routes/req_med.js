const express = require("express");
const mysql = require("mysql")
const router = express.Router();
const database = require('../connection');

let request = {
    request_id:Number,
    med_name:String,
    quantity:Number,
    fufilled:Boolean,
    name: String,
    patients_patient_id: Number,
    med_id: Number
    
}
router.get('/all', (req,res)=>{
    let sql = "SELECT * FROM ache_req";
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        console.log(result)

        for(i =0; i < (result).length;i++){
            result[i].fufilled = result[i].fufilled === 1
        }
        res.send(result)
        console.log(result)
    })
})
router.get(`/:id`, (req,res)=>{
    let sql = "SELECT * FROM ache_req WHERE request_id ="+req.params.id;
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        result[0].fufilled = result[0].fufilled === 1
        
        res.send(result[0])
        
    })
})



router.get(`/medicine/:id`, (req,res)=>{
    let sql = "SELECT * FROM ache_req WHERE med_id ="+req.params.id;
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        result[0].fufilled = result[0].fufilled === 1
        
        res.send(result[0])
        
    })
})

router.get(`/patient/:id`, (req,res)=>{
    let sql = "SELECT * FROM ache_req WHERE patients_patient_id ="+req.params.id;
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        result[0].fufilled = result[0].fufilled === 1
        
        res.send(result[0])
        
    })
})
router.post('/add', async(req,res)=>{
    try{

        request = {
        ... req.body,
    }
    if (request.fufilled){
        request.fufilled =1
    }else{
        request.fufilled =0

    }
    let sql = `INSERT INTO ache_req (med_name, quantity, fufilled, patients_patient_id,med_id, name) VALUES ("${request.med_name}", "${request.quantity}", 
                "${request.fufilled}", '${request.patients_patient_id}',${request.med_id}, "${request.name}" )`
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

        request = {
        ... req.body
    }
    if (request.fufilled){
        request.fufilled =1
    }else{
        request.fufilled =0

    }
    let sql = `UPDATE ache_req SET med_name='${request.med_name}', quantity='${request.quantity}',med_id=${request.med_id}, fufilled='${request.fufilled}', patients_patient_id='${request.patients_patient_id}',
        name = '${request.name}','WHERE request_id=${request.request_id}`
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