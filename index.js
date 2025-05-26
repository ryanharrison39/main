
const navbar = document.getElementById("nav-bar");

const dropdownNavMouseArea = document.getElementById("dropdown-mouse-area");
const dropdownNavText = document.getElementById("dropdown-text");

const dropdowns = document.getElementsByClassName("dropdown");

for (let dropdown of dropdowns) {
  dropdown.addEventListener("mouseover", function() {
    
    navbar.style.height = "200px";
    dropdownNavMouseArea.style.height = "170px";
    setTimeout(function() {dropdownNavText.style.opacity = "1";}, 200);


    dropdownNavText.addEventListener("mouseover", function() {
    navbar.style.height = "200px";
    dropdownNavText.style.opacity = "1";

});
});
}



dropdownNavMouseArea.addEventListener("mouseout", function() {

    setTimeout(function() {
          dropdownNavText.removeEventListener("mouseover", function() {
          navbar.style.height = "200px";
          dropdownNavText.style.opacity = "1";

        });


          dropdownNavText.style.display = "hidden";
          dropdownNavText.style.opacity = "0";
          navbar.style.height = "50px";
          dropdownNavMouseArea.style.height = "0";
        },200);
});



