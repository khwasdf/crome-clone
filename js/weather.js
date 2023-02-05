const API_KEY = "9ccaf97115ae21ad655f568564e36bf0";
function getOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //console.log(`You live in ${lat} ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `/ ${data.main.temp} ${data.weather[0].main}`;
    });
}
function getError(){
  alert("Error!!");
}

navigator.geolocation.getCurrentPosition(getOk, getError);