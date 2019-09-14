//Listes via JS

/*let liste = document.createElement("ul");
let elementListe
let a=1
while (a!=7) {
    elementListe=document.createElement("li");
    elementListe.innerText="Element "+a;
    liste.appendChild(elementListe);
    a+=1
}
document.body.appendChild(liste);*/

// JSON

/*let voitureModele, voitureMarque, voitureAnnée;
const voiture = {
    voitureModele: "Toyota",
    voitureModele: "Yaris",
    voitureAnnée: "2012"
};

console.log(JSON.stringify(voiture));*/

// let image=document.createElement("img")
//
//
// const req = new XMLHttpRequest();
//
// req.onreadystatechange = function(event) {
//     // XMLHttpRequest.DONE === 4
//     if (this.readyState === XMLHttpRequest.DONE) {
//         if (this.status === 200) {
//             console.log("Réponse reçue: %s", this.responseText);
//         } else {
//             console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
//         }
//     }
// };

// req.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=LS6dKfyTTlTN5dVojgT48caUdF0Ec96Fb9TZQ46p', true);
// req.send(null);

const req = new XMLHttpRequest();


req.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          const data = JSON.parse(this.responseText);
          console.dir(data.url); document.getElementById("imgNasa").src = data.url;
        } else {
            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};


req.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=mRN22HdRYyM2mq6hXAF1RnhVW8IiGQsJR3YUMSpA', true);
req.send(null);
