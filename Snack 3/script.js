/* 
   Crea una funzione eseguiOperazione
    Definisci una funzione eseguiOperazione che accetta tre parametri: 
    due numeri e una funzione operatore (callback). 
    La funzione deve eseguire l'operazione fornita sui due numeri.
*/

/* Funzione */
function eseguiOperazione(num1, num2, operatore) {
    return operatore(num1, num2);
}

const somma = (num1, num2) => num1 + num2;
const moltiplicazione = (num1, num2) => num1 * num2;


/* Output */
console.log("2 + 3 = ", eseguiOperazione(2, 3, somma));
console.log("5 * 2 = ", eseguiOperazione(5, 2, moltiplicazione));

