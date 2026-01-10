/* 
   Creare una funzione che esegue una sequenza di operazioni con ritardi
   Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
   Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
*/

/* Definizione funzione */
function sequenzaOperazioni(operazioni, tempo) {

    let i = 0;


    const intervalID = setInterval( () => 
        {
            // Chiamata funzione
            operazioni[i]();
            i++;

            // Ferma l'intervallo quando termina l'array
            if (i === operazioni.length) {
                clearInterval(intervalID);
            }
        }
        
    , tempo)
}

/* Definizione array operazioni */
const operazioni = [
    () => console.log("operazione 1"),
    () => console.log("operazione 2"),
    () => console.log("operazione 3")
];

// Chiamata funzione 
sequenzaOperazioni(operazioni, 2000);