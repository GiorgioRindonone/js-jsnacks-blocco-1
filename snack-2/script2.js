var parola1 = prompt("inserisci una parola");

var parola2 = prompt("inserisci una parola");

if (parola1.length < parola2.length ) {
  console.log("parola1" + "è la più corta");
} else if (parola2.length < parola1.length) {
  console.log("parola2" + "è la più corta");
} else {
  console.log("le parole sono lunghe uguali");
  document.getElementById('testo').innerHTMTL = "i numeri sono pari";
}
