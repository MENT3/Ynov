// document.write("<H1>Hello Word</H1>");
// window.alert("test"); // afficher une alert "test"
// console.log("test1"); //afficher "test1" dans la console

// var course = "JavaScript"; //affecter JavaScript à la variable course
// console.log(course); //afficher la variable course ( elle va afficher JavaScript )


// console.log(8+4);
// console.log(8-4);
// console.log(8/4);
// console.log(8*4);

// var firstname = "James";
// var lastname = "Bond";
//
// console.log(firstname + " " + lastname);

// var text = prompt("Tapez quelque chose :");
// console.log(text);

// var first = prompt("Entrez le premier chiffre:");
// var second = prompt("Entrez le deuxieme chiffre:");
// var result = parseInt(first) + parseInt(second);
// console.log(result);

// var myNumber = prompt("Entrez un nombre :");
// if (myNumber <= 10){
//   alert("Nombre inférieur à 10");
// }
// else {
//   alert("Nombre supérieur à 10");
// }

// var age = prompt("Entrez voter âge :");
//
// if (1 < parseInt(age) && parseInt(age) < 17){
//   document.write("<h1>Mineur</h1>");
// }
// else if (18 < parseInt(age) && parseInt(age) < 49){
//   document.write("<h1>Majeur</h1>");
// }
// else if (50 < parseInt(age) && parseInt(age) < 59){
//   document.write("<h1>Senior</h1>");
// }
// else if (60 < parseInt(age) && parseInt(age) < 120){
//   document.write("<h1>Retraité</h1>");
// }
// else{
//   document.write("Aucune information sur l'âge");
// }

// var age = prompt("Entrez votre âge :");
// while(1){
//   if (age >= 18)
//   {
//     alert("Ok c'est bon");
//     break
//   }
//   else{
//     alert("Vous n'avez pas 18 ans");
//     age = prompt("Entrez votre âge :");
//   }
// }


// do{
//   var age = parseInt(prompt("Entrez votre age:"));
// } while (age < 18);

// var numberA = 110, numberB = 54;
// function quiEstLePlusGrand(nombre1, nombre2){
//   if (nombre1 < nombre2) {
//     alert("Nombre 1 est plus petit que nombre 2");
//   }
//   else{
//     alert("Nombre 2 est plus petit que nombre 1");
//   }
// }
//
// quiEstLePlusGrand(numberA, numberB);

// var result = confirm("Voulez-vous quitter la page ?");
// if (result == true) {
//   console.log("Merci d'être passé");
// } else {
//   console.log("Frr");
// }

// function compteurDeMots(phrase){
//   var nombreDeRep = 0;
//   var words = {};
//   words = phrase.split(' ');
//   // alert(words.length);
//   for (var i = 0; i < words.length; i++) {
//     console.log("i: %s", words[i]);
//     for (var y = words.length; y > 0 ; y--)
//     console.log("Y: %s", words[y]);
//     console.log(typeof(words));
//     if (words[i] == words[y]) {
//       nombreDeRep += 2;
//     }
//   }
//   alert(nombreDeRep);
// }
// compteurDeMots("de phrase test  test coucou les test amis test moi");


// var frequenceDesMots = function(phrase){
//   var mots=phrase.toLowerCase().split(" ");
//   var compteur={};
//   for (var i = 0; i < mots.length; i++) {
//     var mot = mots[i];
//     if (compteur[mot] === undefined) {
//       compteur[mot]=1;
//     }
//     else{
//       compteur[mot]++;
//     }
//   }
//   return compteur;
// }


// var Tableau = [1,2,3,4,5,6,7,8,9];
// for (var i = 0; i < Tableau.length; i++) {
//   Tableau[i] *= 2;
// }
// console.log(Tableau);

function myAlert(){
  alert("Hi");
}
setTimeout(myAlert(),3000);

function myAlert(){
  alert("5 secondes se sont passées");
}
setInterval(myAlert(),3000);
