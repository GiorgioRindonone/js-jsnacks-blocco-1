// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.



//cro array vuoto e prompt
var listaNumDispari = [];
var listaNum = [];

// var listaNum = prompt("inserisci numero"); così è sbagliato perchè ci da una stringa e bisogna trasformarlo in numero


for (var i = 0; i <= 2; i++) {
  listaNum = parseInt(prompt("inserisci numero"));
  //verifico che sia dispari il numero inserito
  if ((listaNum) % 2 == 1 ) {
    listaNumDispari.push(listaNum);
    console.log(listaNumDispari);
  }
}

document.getElementById('testo').innerHTML = listaNumDispari;
