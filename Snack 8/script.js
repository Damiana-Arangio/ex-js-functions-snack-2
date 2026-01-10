/* 
   Crea una funzione che simula un conto alla rovescia
   Scrivi una funzione contoAllaRovescia che accetta un numero n 
   e stampa il conto alla rovescia da n a 0, 
   con un intervallo di 1 secondo tra ogni numero. 
   Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
*/

/* Definizione funzione */
function contoAllaRovescia(n) {
    
    // Conto alla rovescia
    const intervalId = setInterval ( () => {

        // Interrompi timer
        if (n === 0) {
            clearInterval(intervalId);
            console.log("Tempo scaduto!");
        }

        // Stampa numero
        else {
            console.log(n);
            n--;
        }

    }, 1000);


}

/* Chiamata funzione */
contoAllaRovescia(5);
