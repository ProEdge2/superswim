var myButton = document.getElementById("myButton");
var myPopup = document.getElementById("myPopup");
var closeButton = document.getElementById("closeButton");
var overlay = document.createElement("div");
overlay.classList.add("overlay");
var background = document.getElementById("background");

myButton.addEventListener("click", function() {
    myPopup.style.display = "block";
    background.style.display = "block";
    document.body.appendChild(overlay);
});

closeButton.addEventListener("click", function() {
    myPopup.style.display = "none";
    background.style.display = "none";
    document.body.removeChild(overlay);
});

overlay.addEventListener("click", function() {
    myPopup.style.display = "none";
    background.style.display = "none";
    document.body.removeChild(overlay);
});
