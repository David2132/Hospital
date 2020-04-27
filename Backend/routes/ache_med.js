const express = require("express");
const mysql = require("mysql")
const router = express.Router();
const database = require('../connection');

let ache_med = {
    quantity:Number,
    med_id:Number,
    name:String,
    
}
router.get('/all', (req,res)=>{
    let sql = "SELECT * FROM ache_med";
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
       
        res.send(result)
        console.log(result)
    })
})
router.get(`/:id`, (req,res)=>{
    let sql = "SELECT * FROM ache_med WHERE med_id ="+req.params.id;
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        
        res.send(result[0])
        
    })
})

router.post('/add', async(req,res)=>{
    try{

    ache_med = {
        ... req.body
    }
   
    let sql = `INSERT INTO ache_med ( name, quantity) VALUES ("${ache_med.name}", 
                "${ache_med.quantity}")`
    database.query(sql,(err,result)=>{
        if(err){
            throw err        
        }
        res.send({err:"",result})
        console.log(result)
    })
}catch(err){
    res.send({err:"Could not post!"})
    console.log(err)
}
})
router.put('/update', async(req,res)=>{
    try{

    patient = {
        ... req.body
    }
    let sql = `UPDATE med_id SET med_id='${ache_med.med_id}', name='${ache_med.name}', quantity='${ache_med.quantity}' WHERE id=${ache_med.med_id}`
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