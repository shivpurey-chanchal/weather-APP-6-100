let inputValue = document.querySelector(".inputValue");
let button = document.querySelector(".button");
let nameValue = document.querySelector(".name");
let tempValue = document.querySelector(".temp");
let weatherValue = document.querySelector(".weather");
let iconValue = document.querySelector(".icon");

button.addEventListener("click", () => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=e1098ad218f6305532ef94538f3cf111&units=metric`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      let name = data["name"];
      let country = data['sys']['country']
      let temp = data["main"]["temp"];
      let maxTemp = data["main"]["temp_max"];
      let minTemp = data["main"]["temp_min"];
      let weather = data["weather"][0]["main"];
      let icon = data["weather"][0]["icon"];
      nameValue.innerHTML = `City Name - ${name} and Country - ${country}`;
      tempValue.innerHTML = `Temperature -${temp} <sub> Max-${maxTemp} | Min-${minTemp} </sub>`;
      weatherValue.innerHTML = `Weather - ${weather}`;
      iconValue.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png" />`;
    })
    .catch((e) => {
      console.log(e);
    });
});
