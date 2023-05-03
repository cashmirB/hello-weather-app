import axios from "axios";

export default function Greetings(props) {
  function sendInfo(response) {
    alert(
      `It is currently ${response.data.temperature.current}°C here in ${response.data.city} with a humidity of ${response.data.temperature.humidity} and windspeed of ${response.data.wind.speed}`
    );
  }

  let apiKey = "77c45f57f94o3fb60fb856c88ed36ata";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(sendInfo);
  return <h1>Welcome to my weather page!😎</h1>;
}
