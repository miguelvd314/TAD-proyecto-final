const express = require("express");
const proyectoSchema = require("../models/proyecto");

const router = express.Router();

//crear proyecto
router.post('/proyectos', (req, res) =>{
    const  proyecto = proyectoSchema(req.body);
    proyecto
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;