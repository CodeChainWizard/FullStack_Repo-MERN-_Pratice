const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

const api_key = "a5890c0a2737e00f35f5f32226367203";
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
  console.log(city);
});

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`a5890c0a2737e00f35f5f32226367203`}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const iconData = data.weather[0].icon;
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconData}.png" alt="Weathe icon" />`;

      const city_name = data.name;
      const weatherCountry = data.sys.country;
      weather.innerText = `${city_name}, ${weatherCountry}`;

      let cal = data.main.temp;
      cal = cal - 273;
      const temp = cal.toFixed(2);
      temperature.innerHTML = `${temp}˚C `;

      let desc = data.weather[0].description;
      description.innerHTML = `${desc}`;
    });
}
