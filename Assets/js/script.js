var cityInput = $('#city-input');
var searchButton = $('#search-button');
var apiKey = 'bc75d86aaaf94f7d71bdb338fcf7ed0e';
var cityURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
var fiveURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`;
var forecastURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
var cityName = '';
var geoCodeURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
var currentWeather = $('.current-weather');
var FiveDayForcast = $('.five-day-forecast');

// city URL needs this param q={city name}
// forecast URL needs params lat={latitude} & lon={longitude}

function searchCurrentWeather() {
  var city = cityInput.val();

  $.get(cityURL + '&q=' + city + '&units=imperial').then((data) => {
    currentWeather.html(`
      <p>${data.name}</p>
      <p>Temperature ${data.main.temp} °F</p>
      <p>Humidity ${data.main.humidity} %</p>
      <p>Wind ${data.wind.speed} m/h`);
    console.log(data);
  });
}


function search5dayForcast() {
  var city = cityInput.val();

  $.get(fiveURL + '&q=' + city + '&units=imperial').then((data) => {
    var html = []
    for (let index = 0; index < data.list.length; index = index + 8) {
      console.log(data.list[index])
      const card = `
      <div class='card'>
    <p>Temperature ${data.list[index].main.temp}
    <p>Humidity ${data.list[index].main.humidity} %</p>
    <p>Wind${data.list[index].wind.speed} m/h </p>
    </div>
    `
      console.log(card);
      html.push(card)
    }
    console.log(html.join(''))
      FiveDayForcast.append(html.join(''))
  })
};



searchButton.on('click', searchCurrentWeather);
searchButton.on('click', search5dayForcast);



