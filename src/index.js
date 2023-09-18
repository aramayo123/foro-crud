const express = require('express');
const config = require('./server/config');
const app = config(express());

const conexion = require('./database');

app.listen(app.get('port'), () =>{
    console.log('Servidor abierto en :',app.get('port'));
});