const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/studentRT');
const cors=require('cors');

require('dotenv').config();
app.use(cors());


mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{console.log('DB Connected')})
    .catch((err)=>{console.log(err)});

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Working!");
});

app.use('/api',router);

port = process.env.PORT ||4000;

app.listen(port,()=>{console.log(`App Running on port ${port}`)});