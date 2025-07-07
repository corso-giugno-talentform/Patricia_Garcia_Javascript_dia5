/**
 * Esercizio 8.2: Crea un array con i nomi di 5 tuoi amici. Scrivi funzioni per: aggiungere un amico, rimuovere un amico dalla testa, cercare se un amico è nella lista, mostrare tutti gli amici in ordine alfabetico.
 */
/*
let studenti = [ 'Manuel', 'Mauro' , 'Marina', 'Manuel', 'Arturo'];
// Aggiungo
studenti.push('robin');
console.log(studenti);
// rimuovere
studenti.shift();
console.log(studenti);
//cercare se c'è 
studenti.includes('Manuel');
let dato= console.log(studenti.includes('Manuel'));
//orden alfabetico
let dato1=studenti.sort();
console.log(dato1);

/**
 * Esercizio 8.3: Dato un array di numeri [1, 15, 3, 8, 12, 9, 7, 20], usa i metodi degli array per: trovare e contaretutti i numeri maggiori di 10, calcolare la somma di tutti i numeri, creare un nuovo array con tutti i numeri moltiplicati per 2.
 */
/*

let numeri = [1, 15, 3, 8, 12, 9, 7, 20];

// Numeri maggiori di 10
const findNumber = numeri.filter(number =>number > 10);
console.log(findNumber);

// Sommare i numeri maggiori di 10
let somma = 0;
for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
}
console.log("Somma:", somma);

//nuovo array con tutti i numeri multiplicati per 2
let numerix2 = numeri.map(num =>num* 2);
console.log(numerix2);

/**
 * Esercizio 8.4: Scrivere un programma che, data una stringa in input, conti quante vocali sono state inserite
//Esempio
Aiuole = Nella parola "Aiuole" ci sono 5 vocali 
Alba = Nella parola "Alba" ci sono 2 vocali 
Fgrty = Nella parola "Fgrty" ci sono 0 vocali
*/
let parola = 'Pajarito';
let countA = 0;
let countE = 0;
let countI = 0;
let countO = 0;
let countU = 0;
for (let i = 0; i < parola.length; i++) {
   console.log(parola[i]);
  switch (parola[i].toLowerCase()){
    case 'a':
        countA++;
        break
    case 'e':
        countE++;
        break
    case 'i':
        countI++;
        break
    case 'o':
        countO++;
        break
    case 'u':
        countU++;
        
        break
    default:
        
  }
} console.log('Hay (a):'+countA);console.log('Hay (e):'+countE);console.log('Hay (i):'+countI);console.log('Hay (o):'+countO);console.log('Hay (u):'+countU);

let parola1 = 'Aureole';
let lettere = parola1.split('');  // divide cada letra en un array
console.log(lettere);