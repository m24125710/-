var myHeading=document.querySelector("19.jpg");
mylmage.onclick=function(){
    var myscr = mylmage.getAttribute("scr")
    if(mySrc === "images/19.jpg") {
        mylmage.setAttribute ("src","images/19.jpg")
    } else {
        mylmage.setAttribute("src", "images/19.ipg")
    }
}
var myButton = document.querySelector("button")
var myHeading = document.querySelector("h1")
function setUserName() {
    var myName = prompt("Введите свое имя")
    localStorade.setltem("name", myName);
    myHeading.textContent = "Добро пожаловать" + myName
}
if(!iocalStorage.getltem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Привет" + storedName;
}
myButton.onclick = function() {
    setUserName();
}
myHeading.textContent="Привет сталкеры!"