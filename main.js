const inputEl = document.querySelector(".input");
const bulb = document.getElementById("bulb");
const bodyEl = document.querySelector("body");
const h2 = document.getElementById("text");
const h3 = document.getElementById("text2");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
        bulb.setAttribute("src", "on.png");
        h2.style.background = "white";
        h3.style.background = "white"; 

    } else {
        bodyEl.style.background = "white";
        bulb.setAttribute("src", "off.png")
    }
}

inputEl.addEventListener("input", ()=>{
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
};