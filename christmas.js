const gingerbread = document.getElementById("gingy");
const xmasButton = document.getElementById("xmas-button");
const hnkButton = document.getElementById("hnk-button");
const xmas = document.querySelectorAll(".xmas");
const hnk = document.querySelectorAll(".hnk");
const divs = document.getElementsByTagName("div");
const body = document.getElementById("body");
const blue = document.querySelectorAll(".blue");
const gold = document.querySelectorAll(".gold");
const house = document.getElementById("house");
const snowflakes = document.querySelectorAll(".snowflake");
 
function showXmas() {

  gingerbread.remove();

  xmasButton.remove();

  hnkButton.remove();

  body.style.backgroundColor = "#3dffe8";
 
  hnk.forEach(function(item){
    item.remove();
  });
 
  for(let i=0; i<divs.length; i++){
    setTimeout(
      function(){
        divs[i].classList.add("showme")},i*200);
  };
  
  
  function snowfall(){
        for(let i=0; i<snowflakes.length; i++){

        setTimeout(
          function(){
                snowflakes[i].style.top = "515px"}, i*400);
        }
  }

  setTimeout(snowfall, 30000);
  
  
};
 
function showHnk() {

  gingerbread.remove();
 
  xmasButton.remove();

  hnkButton.remove();
  
  body.style.backgroundColor = "#0048ff";
 
  xmas.forEach(function(item){
    item.remove();
});
 
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

    function snowfall(){
        for(let i=0; i<snowflakes.length; i++){

        setTimeout(
          function(){
                snowflakes[i].style.top = "515px"}, i*400);
        }
  }

  setTimeout(snowfall, 30000);
};
 
xmasButton.addEventListener("click", showXmas);
 
hnkButton.addEventListener("click", showHnk);