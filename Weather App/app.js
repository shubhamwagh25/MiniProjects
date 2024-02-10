const apikey = "b52965c0ae1fdc012d6b3e95536b6a43";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric";
const temp =document.querySelector(".temp");
const city =document.querySelector(".city");
const Humidty =document.querySelector(".humidity");
const wind =document.querySelector(".wind");
const input =document.querySelector(".search input");
const click =document.querySelector(".search button ");
const card =document.querySelector(".card");
const body =document.querySelector("body");
const icon =document.querySelector(".weather-icon");
window.addEventListener("load" , (evt) =>
{
    evt.preventDefault();
    const city =input.value;
    checkweather(city);
})

async function checkweather(city1)
{
    const response =await fetch(apiUrl + `&q=${city1}` + `&appid=${apikey}`);
    
    data=await response.json();
    if (response.status != "200")
    {
        alert("Invalid City");
        temp.innerHTML="" ;
        Humidty.innerHTML="";
        wind.innerHTML="";
        city.innerHTML="";
    }else{
    temp.innerHTML=Math.round(data.main.temp) +`°c` ;
    Humidty.innerHTML=Math.round(data.main.humidity) +`%`;
    wind.innerHTML=Math.round(data.wind.speed) +`km/h`;
    city.innerHTML=city1.toUpperCase();
    console.log(data);

    if (data.weather[0].main === "Clear") {
        icon.src = "clear.png";
    } else if (data.weather[0].main === "Clouds") {
        icon.src = "clouds.png";
      } else if (data.weather[0].main === "Snow") {
        icon.src = "snow.png";
      }else if (data.weather[0].main === "Drizzle") {
        icon.src = "drizzle.png";
      }else if (data.weather[0].main === "Rain") {
        icon.src = "rain.png";
      }else if (data.weather[0].main === "Mist") {
        icon.src = "mist.png";
    }else if (data.weather[0].main === "Smoke") {
        icon.src = "smoke.png";
    }}
}

click.addEventListener("click" , (evt) =>
{
    const city =input.value;
    checkweather(city);
}, (Error)=>
{
    console.log(Error);
});




