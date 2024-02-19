//go to https://api.openweathermap.org to generate your own key, then added to apiKey
const apiKey = "d2d15e9f7ce926e8497f6f9989e0bbbe";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchbtn");
const weahterIcon = document.querySelector(".weather-icon");
const fahrenheitbtn = document.querySelector(".fahrenheit");
const celsiusbtn = document.querySelector(".celsius");

var wind = ' mph';

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '&deg';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + wind;

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

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }  

    
}

async function switchToF(){
    apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
    wind = ' mph'

}

async function switchToC(){
    apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    wind = ' km/h'


}


searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

fahrenheitbtn.addEventListener('click', ()=>{
    switchToF();

    checkWeather(searchBox.value);

})

celsiusbtn.addEventListener("click", ()=>{
    switchToC();
    checkWeather(searchBox.value);
})
    




