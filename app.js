const clima = require('./clima/clima.js');
const axios = require('axios');
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: 'true'
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp} grados centigrados`
    } catch (e) {
        console.log(`No se pudo calcular la temperatura en ${direccion}`);
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

//clima.getClima(10.4805937, -66.90360629999999)
//  .then(temp => console.log(temp))
//.catch(e => consolo.log(e));

//lugar.getLatLng(argv.direccion)
//  .then(resp => {
//    console.log(resp)
// })
//.catch(e => console.log(e))