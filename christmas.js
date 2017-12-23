const xmasButton = document.getElementById("xmas-button");
const hnkButton = document.getElementById("hnk-button");
const xmas = document.querySelectorAll(".xmas");
const hnk = document.querySelectorAll(".hnk");
const divs = document.getElementsByTagName("div");
const main = document.getElementById("main");
const blue = document.querySelectorAll(".blue");
const gold = document.querySelectorAll(".gold");
const house = document.getElementById("house");
 
function showXmas() {
  console.log("Christmas selected");
 
  main.style.backgroundColor = "#3dffe8";
 
  hnk.forEach(function(item){
    item.style.display = "none"});
 
    for(let i=0; i<divs.length; i++){
      setTimeout(
        function(){
          divs[i].classList.add("showme")},i*200);
    };
  };
 
function showHnk() {
  console.log("Hanukkah selected");
 
  main.style.backgroundColor = "#0048ff";
 
  xmas.forEach(function(item){
    item.style.display = "none"});
 
    blue.forEach(function(light){
      light.style.backgroundColor = "blue";
    })
 
    gold.forEach(function(light){
      light.style.backgroundColor = "gold";
    })
 
    house.style.top = "220px";
    house.style.height = "330px";
    house.style.width = "400px";
               
    for(let i=0; i<divs.length; i++){
      setTimeout(
        function(){
          divs[i].classList.add("showme")},i*200);
    };
};
 
xmasButton.addEventListener("click", showXmas);
 
hnkButton.addEventListener("click", showHnk);