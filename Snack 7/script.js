/* 
   Crea una funzione che ferma un timer dopo un certo tempo
   Scrivi una funzione eseguiEferma che accetta un messaggio, 
   un tempo di avvio e un tempo di stop. 
   Il messaggio deve essere stampato a intervalli regolari, 
   ma si deve fermare dopo il tempo di stop.
*/

/* Definizione funzione */
function eseguiEferma(messaggio, tempoAvvio, tempoStop) {

    /* Stampa messaggio ogni tot secondi */
    const intervalID = setInterval(
        () => console.log(messaggio)
    ,tempoAvvio );

    /* Ferma timer dopo tot secondi */
    setTimeout( 
        () => clearInterval(intervalID)
    , tempoStop );
}

/* Chiamata funzione */
eseguiEferma("Ciao damiana!", 1000, 6000);
