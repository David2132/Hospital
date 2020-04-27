const express = require("express");
 const app = express();
const employeesRoute = require('./routes/employee')
const patientRoute = require('./routes/patient')
const acheRoute = require('./routes/ache_med')
const patientMedRoute = require('./routes/patient_med')
const lhsRouter = require('./routes/lhs_med')
const requestMedRoute = require('./routes/req_med')
var cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(cors())



//Middleware
app.use('/employee', employeesRoute)
app.use('/patient', patientRoute)
app.use('/ache_med', acheRoute)
app.use('/patient_med', patientMedRoute)
app.use('/lhs', lhsRouter)
app.use('/request', requestMedRoute)



//Need to adjust based on your databse port
app.listen(8080)

