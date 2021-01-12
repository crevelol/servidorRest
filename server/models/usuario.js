const mogoose = require('mongoose');

let Schema = mogoose.Schema;

let cajasValidas = {
    values: [1, 2, 3],
    message: '{VALUE} no es un caja válida'
}

let cajaSchema = new Schema({
    n_caja: {
        type: String,
        required: [true, 'El numero de caja es requerido'],
        enum: cajasValidas
    },
    fecha: {
        type: String,
        required: [true, 'El fecha es necesario'],
    },
    hora: {
        type: String,
        required: [true, 'El fecha es necesario'],
    },
});

cajaSchema.methods.toJSON = function() {
    let caj = this;
    let cajaObjet = caj.toObject();

    return cajaObjet;
}

module.exports = mogoose.model('Caja', cajaSchema);