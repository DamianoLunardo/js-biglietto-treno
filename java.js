// chiedi all'utente il numero di chilometri da fare e la sua età
let numeroChilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
let etaPasseggiero = parseInt(prompt("Quanti anni hai?"));

// prezzo per ogni chilometro
const prezzoPerChilometro = 0.21;

// calcolo il prezzo base
const prezzoBase = numeroChilometri * prezzoPerChilometro;

// inizializzo sconto
let sconto = 0;

// applico lo sconto in base all'età
if (etaPasseggiero < 18) {
    sconto = prezzoBase * 20 / 100;
} else if (etaPasseggiero > 65) {
    sconto = prezzoBase * 40 / 100;
}

// calcolo prezzo con sconto
const prezzoScontato = prezzoBase - sconto;

// formatto prezzo per decimali
const prezzoFinale = prezzoScontato.toFixed(2);

// stampo prezzo
console.log("Il prezzo del biglietto è " + prezzoFinale + "€");

// rifermento html
var prezzoElement = document.getElementById("prezzoElement");

// stampo costo biglietto
prezzoElement.innerHTML = "Il prezzo del biglietto è " + prezzoFinale + "€";