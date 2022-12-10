const mongoose = require('mongoose');

const MotoresSchema = new mongoose.Schema(
    {
        codigo: {
            type: String,
            required: true,
        },
        
        marcaM: {
            type: String,
            required: true,
        },
        marcaR: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            required: true,
        },
        fabricado: {
            type: String,
            required: true,
        },
        lra : {
            type: Number,
            required: true,
        },
       
        hercios : {
            type: String,
            required: true,
        },
        capacidad : {
            type: String,
            required: true,
        },
        estado: {
            type: String,
            required: true,
        },

        date: {
            type: String,
            required: true,
            default: Date.now
        },

       
    }
);



module.exports = mongoose.model("motores", MotoresSchema);