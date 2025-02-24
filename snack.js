//SNACK 1 - - - - 

//Crea una funzione che somma due numeri.
//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

/*function somma(a,b){
    let sum = a+b;
    return sum    
}
somma(2,3)*/


//definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile.

const add = function (a, b) {
    let sum = a + b;
    return sum
}


//riscrivi la funzione somma con la sintassi delle arrow functions.
const somma = (a, b) => a + b;


// ---Snack 2---//

/*Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/

const quadrato = (numero) => numero * numero;
console.log(quadrato(9));

// -- Snack 3 --//

/* Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.*/

function eseguiOperazione(a, b, operatore) {
    return operatore(a, b);
}
function prodotto(a, b) {
    return a * b;
}
console.log(eseguiOperazione(3, 3, prodotto));

// Snack 4 // 

/* Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */


