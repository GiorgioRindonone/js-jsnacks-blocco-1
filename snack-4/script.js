// In un array sono contenuti i nomi degli invitati alla festa del
// grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.




var listaNomi = ["giorgio", "franco", "samuele", "giulia"];
var nomeUtente = prompt("scrivi il tuo nome e controllo se farti entrare");
var validato = 0;

for (var i = 0; i < listaNomi.length; i++) {
  if (nomeUtente === listaNomi[i]) {
    console.log("ok entra");
    validato = 1;
  }
}

if (validato == 1) {
  document.getElementById('testo').innerHTML = "Puoi entrare";

} else {
  document.getElementById('testo').innerHTML = "Non puoi entrare";

}
