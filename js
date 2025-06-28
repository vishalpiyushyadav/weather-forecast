async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey ="10282fa236f0e13ae4006d1a2a160a6c"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("description").textContent = `🌤 ${data.weather[0].description}`;
    document.getElementById("temperature").textContent = `🌡 Temperature: ${data.main.temp}°C`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `🌬 Wind: ${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("weatherCard").classList.remove("hidden");
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}
