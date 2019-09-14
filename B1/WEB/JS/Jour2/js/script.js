var test = 1;
var change = 1;
var changeAuto;


setInterval(next, 3000);


function show(){
  if (test%2 === 0)
  {
    document.body.style.backgroundColor = "white";
  }
  else
  {
    document.body.style.backgroundColor = "#3E3A3A";
  }
  test++;
}


function changeImg(numberImg){
  if (numberImg === 1){
    document.querySelector(".chario").src = "/Users/clement/Desktop/1.jpg";
  }
  else if (numberImg === 2){
    document.querySelector(".chario").src = "/Users/clement/Desktop/2.jpg";
  }
  else if(numberImg === 3){
    document.querySelector(".chario").src = "/Users/clement/Desktop/3.jpg";
  }
}


function next(){
  if (change >= 3){
    change = 1;
  }
  else{
    change ++;
  }
  changeImg(change);
}


function prev(){
  if (change <= 1){
    change = 3;
  }
  else{
    change --;
  }
  changeImg(change);
}


function changeBackOnFocus(){
  var monInput = document.getElementById("noinput");
  monInput.style.background = "lightgreen";
}


var valeurMDP1 = document.getElementById("monInput1").value;
var valeurMDP2 = document.getElementById("monInput2").value;

function testMDP(){
  if (valeurMDP1 === ""){
    document.getElementById("bouton").type = "button";
  }else if (valeurMDP1 != valeurMDP2) {

  }
}
