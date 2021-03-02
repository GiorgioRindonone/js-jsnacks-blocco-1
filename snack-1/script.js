var num1 = parseInt(prompt("inserisci un numero"));

var num2 = parseInt(prompt("inserisci un numero"));

if (num1 > num2) {
  console.log(num1 è maggiore num1);
  document.getElementById('titolo').innerHTMTL = "il primo numero è maggiore";
} else if (num2 > num1) {
  console.log(num2 è maggiore num2);
  document.getElementById('titolo').innerHTMTL = "il secondo numero è maggiore";
} else {
  console.log(uguali);
  document.getElementById('titolo').innerHTMTL = "i numeri sono pari";
}
