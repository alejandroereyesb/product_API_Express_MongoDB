const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const port = 3000;

const productApiRouter = require('./routes/productsApi');

app.use(cors());

const loggerFormat = ':method :url :status :response-time ms - :res[content-length]'
app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

app.use(express.json()); // Para habilitar recepción de datos JSON en una request
app.use("/api",productApiRouter);// API products
app.get('/',(req,res)=>{
    res.json({msj:"Welcome to product API"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})