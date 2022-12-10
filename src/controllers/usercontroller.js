
const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

const getUser = (req, res) => {
    User.find((err, usuarios) => {
        if (!err) {
            res.status(200).json(usuarios)
        } else {
            res.status(400).send(err.message)
        }
    })
}

const GetIdUsuarios = (req, res) => {
    User.findById(req.params.id, (err, usuarios) => {
        if (!err) {
            res.status(200).json(usuarios)
        } else {
            res.status(400).send(err.message)
        }
    });
}


//funcion para enviar los datos
const PostUser = async (req, res) => {
    const { name, apellido, ciudad, email, telefono, password, date } = req.body;
    const PasswordHashed = await bcrypt.hash(password, 10);
    const adduser = await User({
        name,
        apellido,
        ciudad,
        email,
        telefono,
        password: PasswordHashed,
        date,
    })


    try {
        const data = await adduser.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//funcion para editar los datos

const UpdateUsuarios = async (req, res) => {
    const { name, apellido, ciudad, email, telefono, password } = req.body;

    const id = req.params.id;
    const PasswordHashed = await bcrypt.hash(password, 10);
    const datausuarios = ({
        name,
        apellido,
        ciudad,
        email,
        telefono,
        password: PasswordHashed

    });
    const opciones = { opciones: true };
    try {
        const updateuser = await User.findByIdAndUpdate(
            id,
            datausuarios,
            opciones,
        );
        res.status(200).json(updateuser)
    } catch (error) {
        res.status(400).send(error.message)
    }
}



const DeleteUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteuser = await User.findByIdAndDelete(id);
        res.status(200).json(deleteuser);
    } catch (error) {
        res.status(400).send(error.message)
    }
}


const LoginUser = async (req, res) => {
    const { email, password } =req.body;
    try {
        const user = await User.findOne({
            email,
        });
        if(!user) {
            res.json("el email no coincide");
        }
        validatePassword = await bcrypt.compare(password, user.password);
        if(!validatePassword) {
            res.json("la clave no coincide")
        }

        res.status(200).json("Tu estas logueado")
    } catch (error) {
        res.status(400).send(error.message);
    }
}



module.exports = { getUser, GetIdUsuarios, PostUser, UpdateUsuarios, DeleteUsuario, LoginUser };
