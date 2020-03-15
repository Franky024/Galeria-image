const mongoose = require('mongoose');
//cadena de conexion
mongoose.connect('mongodb://localhost/galeria', {
    useNewUrlParser: true
})
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));