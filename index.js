// NAVBAR BEHAVIOUR 

let isMouseOver = true;
var currentDropdown = "";

const navbar = document.getElementById("nav-bar");
const dropdownNavMouseArea = document.getElementById("dropdown-mouse-area");
const dropdownNavText = document.getElementById("dropdown-text");
const navMoreStats = document.getElementById("nav-more-stats");
const navAllStats = document.getElementById("nav-all-stats");
const navText1 = document.getElementById("dropdown-text-1-link");
const navText2 = document.getElementById("dropdown-text-2-link");
const navText3 = document.getElementById("dropdown-text-3-link");


// makes it so when u hover over the overview/mission/logo buttons, the nav bar doesnt stay open
document.getElementById("nav-mission").addEventListener("mouseover", function() {
      dropdownNavText.style.display = "hidden";
      dropdownNavText.style.opacity = "0";
      navbar.style.height = "50px";
      dropdownNavMouseArea.style.height = "0";
    });

document.getElementById("nav-overview").addEventListener("mouseover", function() {
      dropdownNavText.style.display = "hidden";
      dropdownNavText.style.opacity = "0";
      navbar.style.height = "50px";
      dropdownNavMouseArea.style.height = "0";
    });

document.getElementById("invert").addEventListener("mouseover", function() {
      dropdownNavText.style.display = "hidden";
      dropdownNavText.style.opacity = "0";
      navbar.style.height = "50px";
      dropdownNavMouseArea.style.height = "0";
    });



// navbar opening for the all stats dropdown
navAllStats.addEventListener("mouseover", function() {
    navText1.textContent = "Station similarities";
    navText1.href = "#";
    navText2.textContent = "Metric similarities";
    navText2.href = "#";
    navText3.textContent = "Correlations";
    navText3.href = "correlations.html";


    isMouseOver = true;
    navbar.style.height = "200px";
    dropdownNavMouseArea.style.height = "170px";
    setTimeout(function() {dropdownNavText.style.opacity = "1";}, 200);

});

// navbar opening for the more stats dropdown
navMoreStats.addEventListener("mouseover", function() {
    navText1.textContent = "Weather station";
    navText1.href = "#";
    navText2.textContent = "Climate metric";
    navText2.href = "#";
    navText3.textContent = "Threats";
    navText3.href = "threats.html";

    isMouseOver = true;
    navbar.style.height = "200px";
    dropdownNavMouseArea.style.height = "170px";
    setTimeout(function() {dropdownNavText.style.opacity = "1";}, 200);

});




// so that when the cursor hovers over the dropdown bold text, the navbar doesnt close
dropdownNavText.addEventListener("mouseover", function() {
    isMouseOver = true;
    });

dropdownNavMouseArea.addEventListener("mouseover", function() {
    isMouseOver = true;
    });

dropdownNavText.addEventListener("mouseout", function() {
    isMouseOver = false;
    });


// navbar close
dropdownNavMouseArea.addEventListener("mouseout", function() {
    
  setTimeout(function() {
    if (!isMouseOver) {
      dropdownNavText.removeEventListener("mouseover", function() {
        navbar.style.height = "200px";
        dropdownNavText.style.opacity = "1";

      });


      dropdownNavText.style.display = "hidden";
      dropdownNavText.style.opacity = "0";
      navbar.style.height = "50px";
      dropdownNavMouseArea.style.height = "0";
    }
  },200);

  isMouseOver = false;                
                  
});















