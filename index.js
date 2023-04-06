const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res)=>{
    res.send('Olá mundo')
})

app.listen(PORT, ()=>{
    console.log('O APP está rodando')
})