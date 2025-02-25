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
console.log(eseguiOperazione(3, 4, prodotto));

// Snack 4 // 

/* Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */


function creaTimer(ms) {
    return function () {
        setTimeout(() => {
            console.log('tempo scaduto');
        }, ms)

    }
}
const timer3s = creaTimer(3000);
timer3s();


// Snack 5 //


/*Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo*/

/*function stampaOgniSecondo(messagio){
    return function(){
        setInterval(()=>{
            console.log(messagio);
        },2000)
    }
}
const StampaMessagio = stampaOgniSecondo('Ciao come va?');
StampaMessagio()*/ // "Ho messo come commit per non avere un loop infinito " //


/* Snack 6 //
Crea un contatore automatico con setInterval

Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.*/


/*function creaContatoreAutomatico(ms){
    let contatore = 0;
    return function(){
        setInterval(()=>{
            contatore++;
            console.log(contatore);
            
        },ms)
    }
}
const timer1s = creaContatoreAutomatico(1000);
timer1s(); */


/* Snack 7

Crea una funzione che ferma un timer dopo un certo tempo

Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop. */


function eseguiEferma(messagio, tempodaStampare, tempodafermare) {
    let ID = setInterval(() => {
        console.log(messagio);

    }, tempodaStampare);
    setTimeout(() => {
        clearInterval(ID)
    }, tempodafermare)
}
eseguiEferma('Stampa a intervalli', 1000, 6000);

// Snack 8 Bonus //

/* Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.*/


function contoAllaRovescia(numero) {
    let ID = setInterval(() => {
        console.log(numero);
        if (numero === 0) {
            clearInterval(ID);
            console.log('tempo scaduto');

        }
        numero--;
    }, 1000)
}
contoAllaRovescia(5);



// Snack 9 //

/* Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo. */

function aggiungere(){
    console.log('aggiungere'); 
}
function sottrazione(){
    console.log('sottrazione');
}
function multiplicazione(){
    console.log('multiplicazione');
    
}

const operazioni = [aggiungere,sottrazione,multiplicazione];

function  sequenzaOperazioni(operazioni,ms){
    let index = 0;
    let id = setInterval(() => {
        if(index < operazioni.length){
            operazioni[index]();
            index++;
        }else {
            clearInterval(id)
        }
    }, ms);

};
sequenzaOperazioni(operazioni,1000);


