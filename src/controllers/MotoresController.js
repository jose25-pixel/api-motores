const Motores = require('../models/MotoresModel');

const GetMotores = (req, res) => {
    console.log(req.body);
    Motores.find((err, motores) => {
        if(!err) {
            res.status(200).json(motores)
        } else {
            res.status(400).send(err.message);
        }
    });
}

const GetIdMotores = (req, res) => {
    Motores.findById(req.params.id,(err, motor) => {
        if(!err) {
            res.status(200).json(motor)
        } else {
            res.status(400).send(err.message)
        }
    });
}


const AgreeMotores = async (req, res) => {
    const { codigo, marcaM, marcaR, gas, fabricado, lra,hercios, capacidad, estado,date } = req.body;
    const agreemotores = Motores({
        codigo,
        marcaM,
        marcaR,
        gas,
        fabricado,
        lra,
        hercios,
        capacidad,
        estado,
        date
    });

    try {
        const datasave = await agreemotores.save();
        res.status(200).json(datasave); 
        console.log(datasave)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const UpdateMotores = async (req, res) => {
    const { codigo, marcaM, marcaR, gas, fabricado,lra,hercios,   capacidad, estado,date } = req.body;
    const id = req.params.id;
    const datamotores = ({
        codigo,
        marcaM,
        marcaR,
        gas,
        fabricado,
        lra,
        hercios,
        capacidad,
        estado,
        date
    });
    const opciones = { opciones: true };
    try {
        const updatemotor = await Motores.findByIdAndUpdate(
            id,
            datamotores,
            opciones,
        );
        res.status(200).json(updatemotor)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const DeleteMotor = async (req, res) => {
    const id = req.params.id;
    try {
        const deletemotor = await Motores.findByIdAndDelete(id);
        res.status(200).json(deletemotor);
    } catch (error) {
        res.status(400).send(error.message)
    }
}


module.exports = { GetMotores, GetIdMotores, AgreeMotores, UpdateMotores, DeleteMotor };