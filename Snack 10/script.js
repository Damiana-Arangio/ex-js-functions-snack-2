/* 
   Creare un throttler per limitare l’esecuzione di una funzione
   Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
   Restituisce una nuova funzione che, quando chiamata ripetutamente, 
   esegue l'operazione originale al massimo una volta ogni n millisecondi.
*/

// Definizione funzione throttler
function creaThrottler(funzioneDaEseguire, tempoLimite) {

    // istante dell'ultima esecuzione (in ms)
    let msUltimaEsecuzione = 0;

    return function throttler() {

        // timestamp in ms trascorsi da 1 gennaio 1970
        const msPrimaEsecuzione = Date.now();

        // Se è passato il tempo limite esegui la funzione
        if (msPrimaEsecuzione - msUltimaEsecuzione >= tempoLimite) {
            funzioneDaEseguire();                                 // esegue funzione
            msUltimaEsecuzione = msPrimaEsecuzione;               // aggiorna l'ultima esecuzione
        }
    };
}

// Chiamata funzione

const throttledLog = creaThrottler( () => console.log("Eseguito!"), 2000);
throttledLog();                 // ✅ "Eseguito!"
throttledLog();                 //  ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)