
//moltiplicare il numero di km (distanza) da fare x ogni km (il costo x km è di 0,21€)
//definire lo sconto in base agli anni possedduti (anni<18=20% di sconto anni>=65=40% di sconto)
//definire la condizione di sconto applicato in base agli anni possedduti
//visione attreverso la consoleweb

var distanza = prompt('Quanti km devi percorrere?')
console.log(distanza);
var anni = prompt('Quanti anni hai?')
console.log(anni);

var prezzo1km = 0.21;
// console.log(prezzo1km);
var costoTotale = distanza * prezzo1km;
console.log(costoTotale);

var scontoUnder = costoTotale / 100 * 20;
// console.log(scontoUnder);

var scontoOver = costoTotale / 100 * 40;
// console.log(scontoOver);

if (anni<18) {
    console.log('Hai uno sconto del 20% da applicare al prezzo del biglietto');
} else if (anni>=65) {
    console.log('Hai uno sconto del 40% da applicare al prezzo del biglietto');
}
