const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        
        },
        apellido: {
            type: String,
            required: true,
        },
        ciudad: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

        telefono: {
            type: Number,
            required: true,

        },

        password:
        {
            type: String, required: true,
            min: 8,
            max: 12,
        },

        date: {
            type: String,
            required: true,
            default: Date.now
        },


    }
);



module.exports = mongoose.model("usuarios", UserSchema);