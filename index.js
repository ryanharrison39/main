let isMouseOver = true;

const navbar = document.getElementById("nav-bar");

const dropdownNavMouseArea = document.getElementById("dropdown-mouse-area");
const dropdownNavText = document.getElementById("dropdown-text");

const dropdowns = document.getElementsByClassName("dropdown");

for (let dropdown of dropdowns) {
  dropdown.addEventListener("mouseover", function() {
    isMouseOver = true;
    navbar.style.height = "200px";
    dropdownNavMouseArea.style.height = "170px";
    setTimeout(function() {dropdownNavText.style.opacity = "1";}, 200);


    
  });
}

dropdownNavText.addEventListener("mouseover", function() {
    isMouseOver = true;
    });

dropdownNavMouseArea.addEventListener("mouseover", function() {
    isMouseOver = true;
    });

dropdownNavText.addEventListener("mouseout", function() {
    isMouseOver = false;
    });

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



