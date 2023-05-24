const express = require('express');
const morgan = require('morgan');
const itemRoutes = require('./routes/item.routes')
const port = 3000;

const app = express();


app.use(morgan('dev'))
app.use(itemRoutes)
app.listen(port);
console.log("Servidor en el puerto " + port);