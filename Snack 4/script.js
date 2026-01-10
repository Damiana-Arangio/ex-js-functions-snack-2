/* 
   Crea un generatore di funzioni creaTimer
   Scrivi una funzione creaTimer che accetta un tempo (in ms) 
   e restituisce una nuova funzione che avvia un setTimeout 
   per stampare "Tempo scaduto!".
*/

/* Funzione */
function creaTimer(tempo) {
    return function() {
        setTimeout( 
            () => console.log("tempo scaduto!")
        , tempo);
    }

}

/* Output */
const timer2s = creaTimer(2000);
timer2s();


