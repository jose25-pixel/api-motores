const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
//const bodyparser = require('body-parser');


//ambiente virtual
require('dotenv').config();


const app = express();


const API = require('./routes/APIMotores');
const APIU = require('./routes/APIMotores');


//funcion del puerto
app.set('port', process.env.PORT || 7000);

app.use(cors());
app.use(express.urlencoded({extended:false}))

app.use(express.json());

//rutas definidas
app.use("/api/motores", API);
app.use("/api/usuarios", APIU);

//connecion a la base de datos

mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    console.log("conexion exitosa || localhost: 27017");
}).catch((error) => {
    console.log(error.message);
});


//levantar el servidor

app.listen(app.get('port'), () => {
    console.log("servidor corriendo|| localhost:", app.get('port'));
});