// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element


let dada;
const API_Key = "1bd70637fd3342c486544916231702";
const city = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");

const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const weatherStatus = document.getElementById("weatherStatus");
const logoImage = document.getElementById("logoImage");

const getData = async (event) => {
  event.preventDefault();
  if(city.value == ""){
    alert("Please enter City Name")
    return;
  }

  data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city.value}`)
  console.log(data)
  jsondata = await data.json();
  console.log(jsondata)
  if(jsondata.error && jsondata.error.code=='1006'){
    alert('Enter valid City name')
  }

  updateData(jsondata)
}

const  updateData = (data) =>{
  countryName.innerHTML = (data.location.country)
  stateName.innerHTML = (data.location.region)
  cityName.innerHTML = (data.location.name)
  humidity.innerHTML = (data.current.humidity)
  windSpeed.innerHTML = (data.current.wind_kph)
  temprature .innerHTML = (data.current.temp_c)
  weatherStatus .innerHTML = (data.current.condition.text)
  logoImage.src = (data.current.condition.icon)
}