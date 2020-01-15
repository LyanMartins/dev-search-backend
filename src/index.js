const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://lyan:3510035100@cluster0-ii3y4.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true  
});

app.use(express.json());
app.use(routes);

// Query Parans : request.query()
// Route Parans : request.params()
// Body : request.body

app.listen(3333, ()=>{
    console.log("Api rondando na porta 3333 ...");
})

