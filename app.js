const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


lugar.getLugar(argv.ciudad)
     .then(console.log);