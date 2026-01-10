/* 
   Crea un contatore automatico con setInterval
   Definisci una funzione creaContatoreAutomatico che accetta 
   un intervallo di tempo e restituisce una funzione 
   che avvia un setInterval, incrementando un contatore e stampandolo.
*/

/* Definizione funzione */
function creaContatoreAutomatico(tempo) {
    
    let contatore = 0;

    return function() {
        setInterval( () => {
            contatore++;
            console.log(contatore);
        }
        , tempo);
    }
}

/* Chiamata funzione */
const avviaContatore = creaContatoreAutomatico(2000);
avviaContatore();
