const { Router } = require('express');
const {API_KEY} = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.get("/gasd",(req,res)=>{
    res.status(200).send("Hola");
})

module.exports = mainRouter;
