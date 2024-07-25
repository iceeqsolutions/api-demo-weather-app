import "./styles.css";
import getData from "./modules/getWeatherData";

const mainContent = document.querySelector(".mainContent");
const searchBar = document.querySelector("#searchLocation");
let newLocation;

// Initialize page
function loadPage() {
    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.firstChild);
    }
    getData("helsinki");
  }
  
  loadPage();

// Activate search bar
searchBar.addEventListener("input", recordInput);
searchBar.addEventListener("keypress", recordKey);

// Save input from search bar
function recordInput(evt) {
  evt.preventDefault();
  newLocation = evt.target.value;
}

// Run API search on "Enter"
function recordKey(evt) {
  if (evt.key === "Enter") {
    evt.preventDefault();
    updateLocation();
  }
}

function updateLocation() {
  const mainContent = document.querySelector(".mainContent");

  const ics = document.querySelector(".ics-container");
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }

  const location = newLocation ? newLocation : "helsinki";

  getData(location);
  searchBar.value = "";
}