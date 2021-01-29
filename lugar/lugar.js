const axios = require('axios');

const getLugar = async(ciudad) => {

const encounded = encodeURI(ciudad);

var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {q: encounded, units: 'metric'},
  headers: {
    'x-rapidapi-key': '4bf55562c3msh64865472323fce8p18d557jsn9bdc775d790b',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'  
  }
};

try {
    const rest = await axios.request(options)
    const data = rest.data;
    const coor = data.coord;
    const temp = data.main;
    const weat = data.weather;
    const dataWeather = {
      ciudad,
      longitud: coor.lon,
      latitud: coor.lat,
      condicion: weat[0].main,
      viento: weat[0].icon,
      temperatura: temp.temp,
      max: temp.temp_max,
      min: temp.temp_min
    }
    return dataWeather;
} catch (error) {
    return error
}

}

module.exports = {
    getLugar
}

