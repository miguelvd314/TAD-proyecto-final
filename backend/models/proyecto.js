const mongoose = require('mongoose');

const proyectoSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    requisitos: {
        type: String,
        required: true
    },
    pago: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);