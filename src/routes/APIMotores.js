const express = require('express');
const MotoresController = require('../controllers/MotoresController');
const usercontroller = require('../controllers/usercontroller');
const router = express.Router();


//routes de compresores

router.get('/motores', MotoresController.GetMotores);
router.get('/motoresgetid/:id', MotoresController.GetIdMotores);
router.post('/postmotores', MotoresController.AgreeMotores);
router.put('/updatemotor/:id', MotoresController.UpdateMotores);
router.delete('/deletemotor/:id', MotoresController.DeleteMotor);


//routes de usuarios

router.get('/usuario', usercontroller.getUser);
router.get('/usuariogetid/:id', usercontroller.GetIdUsuarios);
router.delete('/usuariodelete/:id', usercontroller.DeleteUsuario);
router.post('/usuariopost', usercontroller.PostUser);
router.post('/login', usercontroller.LoginUser);
router.put('/usuarioupdate/:id', usercontroller.UpdateUsuarios);




module.exports = router;