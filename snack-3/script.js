// Il software deve chiedere per 10 volte all’utente di inserire
// un numero. Il programma stampa la somma di tutti i numeri
// inseriti.




var somma = 0;

for (var i = 1; i <= 3; i++) {
  var listaNum = parseInt(prompt("inserisci numero"));
  // var listaNum = prompt("inserisci numero"); così è sbagliato perchè ci da una stringa e bisogna trasformarlo in numero
  somma = somma + listaNum;
  console.log(somma);
  // somma += listaNum;
}


document.getElementById('testo').innerHTML = somma;
