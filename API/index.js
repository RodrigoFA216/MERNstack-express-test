const express = require('express');
const morgan = require('morgan');
const port = 3000;

const app = express();


app.use(morgan('dev'))
app.listen(port);
console.log("Servidor en el puerto " + port);