const apikey="9488018c294038c503d571f4171c0716";
const url ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const h1= document.querySelector(".temp");
const h2= document.querySelector(".city");
const humid= document.querySelector(".humidity");
const wind= document.querySelector(".wind");
const btn=document.querySelector(".search button");
const input=document.querySelector(".search input");
const weathericon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data =await response.json();
        h2.innerHTML=data.name;
        h1.innerHTML=Math.round(data.main.temp)+"°C";
        humid.innerHTML=data.main.humidity+"%";
        wind.innerHTML=data.wind.speed+"km/h";
    
        if(data.weather[0].main=="Rain"){
            weathericon.src="images/rain.png"
        }
       else if(data.weather[0].main=="Clear"){
            weathericon.src="images/clear.png"
        }
       else if(data.weather[0].main=="Clouds"){
            weathericon.src="images/clouds.png"
        }
       else if(data.weather[0].main=="Drizzle"){
            weathericon.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Humidity"){
            weathericon.src="images/humidity.png"
        }
       else if(data.weather[0].main=="Mist"){
            weathericon.src="images/mist.png"
        }
       else if(data.weather[0].main=="Snow"){
            weathericon.src="images/snow.png"
        }
       else if(data.weather[0].main=="Wind"){
            weathericon.src="images/wind.png"
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}

btn.addEventListener("click",()=>{
    checkWeather(input.value);
})
