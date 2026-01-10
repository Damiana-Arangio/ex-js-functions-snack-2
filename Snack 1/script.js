/* 
    Crea una funzione che somma due numeri:
    - Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
    - Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
    - Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

/* Funzione dichiarativa */
function sommaDichiarativa(num1, num2) {
    return num1 + num2;
}

/* Funzione Anonima */
const sommaAnonima = function(num1, num2) {
    return (num1 + num2); 
}

/* Arrow function */
const sommaArrow = (num1, num2) => num1 + num2;

/* Output */
console.log("Somma dichiarativa: ", sommaDichiarativa(2, 3));
console.log("Somma anonima: ", sommaAnonima(4, 5));
console.log("Somma arrow: ", sommaArrow(6, 7));
