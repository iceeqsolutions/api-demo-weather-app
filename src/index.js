import "./styles.css";
import getData from "./modules/getWeatherData";

const mainContent = document.querySelector(".mainContent");

// Initialize page
function loadPage() {
    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.firstChild);
    }
    getData("helsinki");
  }
  
  loadPage();