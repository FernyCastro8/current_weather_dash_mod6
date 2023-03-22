var cityInput = $('#city-input'); 
var searchButton = $('#search-button');
var apiKey = 'bc75d86aaaf94f7d71bdb338fcf7ed0e';
var cityURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
var forecastURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
var cityName = ''
var geoCodeURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`

// city URL needs this param q={city name}
// forecast URL needs params lat={latitude} & lon={longitude}

function searchForCityWeather() {
cityName = cityInput.val();
geoCodeURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
  
  $.get(geoCodeURL).then(function(data) {
    console.log(data[0].lat);
    console.log(data[0].lon);

  });

}

searchButton.click(searchForCityWeather);

$.get()