const form = document.querySelector('form');
const weatherInfo = document.querySelector('.weather-forecast');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = form.elements.city.value;
  const api = "66a50a1215fdbe9bba268368d1acb534"
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const forecast = data.list;
    const tableHeader = `
      <tr>
        <th>Date/Time</th>
        <th>Weather</th>
        <th>Temperature (°C)</th>
        <th>Feels Like (°C)</th>
        <th>Humidity (%)</th>
      </tr>
    `;
    let tableBody = '';
    let currentDate = '';
    forecast.forEach((item) => {
      const dateTime = new Date(item.dt * 1000);
      const date = dateTime.toLocaleDateString();
      const time = dateTime.toLocaleTimeString();
      const weather = item.weather[0].description;
      const temperature = item.main.temp;
      const feelsLike = item.main.feels_like;
      const humidity = item.main.humidity;
      if (date !== currentDate) {
        tableBody += `<tr><td colspan="5"><strong>${date}</strong></td></tr>`;
        currentDate = date;
      }
      if (dateTime.getHours() % 4 === 0) {
        tableBody += `
          <tr>
            <td>${time}</td>
            <td>${weather}</td>
            <td>${temperature}</td>
            <td>${feelsLike}</td>
            <td>${humidity}</td>
          </tr>
        `;
      }
    });
    weatherInfo.innerHTML = `
      <h2>${city} Weather Forecast</h2>
      <table>
        ${tableHeader}
        ${tableBody}
      </table>
    `;
  } catch (error) {
    console.error(error);
    weatherInfo.innerHTML = `<p>Could not retrieve weather forecast for ${city}.</p>`;
  }
});
