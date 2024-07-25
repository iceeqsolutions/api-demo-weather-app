const container = document.querySelector("#pageContent");
const mainContent = document.querySelector(".mainContent");


function currentTimeAndTemperature(json) {
  // CREATE ELEMENTS
  const dateTimeLocationContainer = document.createElement("div");
  dateTimeLocationContainer.classList.add("dateTimeLocationContainer");

  const localTime = document.createElement("div");
  localTime.classList.add("localTime");

  const currentDate = document.createElement("div");
  currentDate.classList.add("currentDate");

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("locationContainer");

  const country = document.createElement("div");
  country.classList.add("country");

  const locationName = document.createElement("div");
  locationName.classList.add("locationName");

  const currentTempContainer = document.createElement("div");
  currentTempContainer.classList.add("currentTempContainer");

  const currentTemp = document.createElement("div");
  currentTemp.classList.add("currentTemp");

  const currentTempIcon = document.createElement("img");
  currentTempIcon.classList.add("weatherIcon");

  // ACCESS API AND FORMAT DATA

  // Add data to elements
  currentTempIcon.src = json.current.condition.icon;
  locationName.textContent = `${json.location.name}, ${json.location.country}`;
  currentTemp.textContent = `${json.current.temp_c}°C`;

  // Update page
  function updateLocation() {
    // Clear page of old content
    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.firstChild);
    }
    // Add new content
    dateTimeLocationContainer.appendChild(locationName);
    dateTimeLocationContainer.appendChild(currentTemp);
    dateTimeLocationContainer.appendChild(currentTempIcon);

    mainContent.appendChild(dateTimeLocationContainer);
    container.appendChild(mainContent);
  }
  updateLocation();
}

export default currentTimeAndTemperature;