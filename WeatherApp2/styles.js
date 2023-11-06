const apiKey = "7e9b576583eaacd385e8185289602a96";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        if(data.weather[0].main == "Clouds"){
            document.querySelector(".weather-icon").src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            document.querySelector(".weather-icon").src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            document.querySelector(".weather-icon").src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            document.querySelector(".weather-icon").src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "mist"){
            document.querySelector(".weather-icon").src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
    }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})


