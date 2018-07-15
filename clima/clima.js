const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5d06f41b125ee1b87154fd45ce7bb558`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}