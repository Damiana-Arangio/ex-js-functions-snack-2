/* 
   Crea una funzione stampaOgniSecondo con setInterval.
    Definisci una funzione che accetta un messaggio 
    e lo stampa ogni secondo.

    Nota: Questa funzione creerà un loop infinito. 
    Interrompilo manualmente o usa clearInterval() in un altro script.
*/

/* Funzione */
function stampaOgniSecondo(messaggio) {
    const intervalId = setInterval( 
        () => console.log(messaggio)
    , 1000 );

    return intervalId;
}

/* Chiamata funzione */
const intervalId = stampaOgniSecondo("Ciao damiana!");

/* Disattiva intervallo dopo 5s */
setTimeout(
    () => clearInterval(intervalId)
,5000 );