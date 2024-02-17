const apiKey = "d2d15e9f7ce926e8497f6f9989e0bbbe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weahterIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '&deg';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' mph';

    switch (data.weather[0].main) {
        case "Clear":
            weahterIcon.src = "images/clear.png";
            break;
        case "Clouds":
            weahterIcon.src = "images/clouds.png";
            break;
        case "Drizzle":
            weahterIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weahterIcon.src = "images/mist.png";
            break;
        case "Rain":
            weahterIcon.src = "images/rain.png";
        case "Snow":
            weahterIcon.src = "images/snow/png";
            break;
    }
}  

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})




