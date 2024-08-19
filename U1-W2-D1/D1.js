/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*Esistono diversi tipi di dati in Javascript. 
i valori primitivi sono:
1)Number: sono i numeri. possono essere interi o decimali e vengono decodificati da Javascript proprio come numeri. Potrai, quindi, sottoporli ad operazioni matematiche. 
Qualora dovesero essere concatenati a delle stringhe, cioè a dei dati testuali, Js per convenzione li leggerà come stringa. 
Quando parliamo di numeri, il valore che diamo alla variabile, non dovrà essere compreso tra "". La giusta scrittura è data da let num=10;
 2)String: sono dati testuali, ad esempio un nome, un cognome. qualsiasi dato testuale. Per indicare questo tipo di dato, sarà necessario utilizzare i " oppure ': "Mario" oppure 'Mario'; 
 convenzionalmente, si preferiscono "". La scrittura corretta è let string="Mario" Se inseriti tra apici, anche i numeri diventano stringhe, cioé pure e semplici info testuali.
 Importante ricordare che js sia case se4nsitive e, pertaqto, scrivere una variabile con lettere minuscole o maiuscole, cambia il risultato!  
3)Boolean: è un tipo di dato che restituisce come valore vero o falso. La scruttura corretta è let boolean:true oppure let boolean:false
4)undefinied: si presenta quando abbiamo dato un nome a una variabile senza darle un valore. raprresenta quindi un assenza di valore. es let dog.
 se andassimo a fare il console log su questa variabile che non ha un valore, riceveremmo come risposta undefinied, cioé la variabile esiste ma non ha - appunto- valore.
 5)Null: è un dato che rappresenta un assenza intenzionale di valore. Siamo noi a dire che una variabile sia null es: let dog=null; 
 Si usa per svuotare una variabile dal suoi valore oppure per dare un valore vuoto temporaneo.
 6)NaN: not a number. è una risposta di javascript quando il risultato di un'operazione non è un numero o qwquando non è avvenuta correttamente la conversione da string a number prima dell'operazione  */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Corinne";

console.log("il mio nome è " + myName);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
let num2 = 20;
let sum = num1 + num2;
console.log("la somma di " + num1 + "+" + num2 + "è: " + sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Mainardi";

const nameS = "Corinne Mainardi";
//nameS = "Celine Mainardi";

console.log("il mio nome è " + nameS);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4;

let sott = y - x;

console.log("il risultato della sottrazione di " + y + "e " + x + "è: " + sott);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";

console.log(name1 === name2);

//dando per scontato che la variabile sia stata già data come nel caso dell'esercizio, aLLora la soluzione può essere la seguente:

console.log(name1 === name2.toLowerCase());

//diversamente, putando che gli utenti possano cambiare le variabili, si  imposta il toLowerCase() a entrambe le domande
console.log(name1.toLowerCase() === name2.toLowerCase());
