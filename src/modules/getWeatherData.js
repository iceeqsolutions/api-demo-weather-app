import currentTimeAndTemperature from "./currentTimeAndTemperature";

async function getData(location) {
  const KEY = process.env.API_KEY;
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3`,
      { mode: "cors" }
    );
    let json = await response.json();
    // View data structure
    /* console.log(json); */

    currentTimeAndTemperature(json);
  } catch (error) {
    console.log(error.message);
  }
}
  
export default getData;