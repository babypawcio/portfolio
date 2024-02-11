function updateTime() {
    let current_time = new Date();

    let hours = current_time.getHours();
    let minutes = current_time.getMinutes();
    let seconds = current_time.getSeconds();

    if(hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    let clock = document.getElementById("clock");
    let time_zone = document.getElementById("clock");
    clock.innerHTML = "time: " + hours + ":" + minutes + ":" + seconds + " UTC + 01:00";
}

setInterval("updateTime()", 1000);

async function getWeather() {

const apiKey = "cb4ac99b68796ac6d418b8f15516158f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pl&q=";
const city = "Torun";

const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
let data = await response.json();
console.log(data);

let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");

temperature.innerHTML = "temperature: " + data['main']['temp'] + "℃";
humidity.innerHTML = "humidity: " + data['main']['humidity'] + "%";
pressure.innerHTML = "pressure: " + data['main']['pressure'] + " hPa";
}
getWeather();