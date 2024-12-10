const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASEURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("CONNECTED TO MONGODB")
})
.catch (error => {
    console.log("MONGODB CONNECTION ERROR", error.message)
});

const docotorRoutes = require('./routes/doctorRoutes')
app.use('/api/doctors', docotorRoutes)

const patientRoutes = require('./routes/patientRoutes')
app.use('/api/patient', patientRoutes)

const appoinmentRoutes = require('./routes/appoinmentsRoutes')
app.use('/api/appoinments', appoinmentRoutes)

const adminRoutes = require('./routes/userRoutes')
app.use('/api/admin', adminRoutes); 


app.listen(process.env.PORT,() =>{
    console.log(`server is runing on port ${process.env.PORT}`)
})