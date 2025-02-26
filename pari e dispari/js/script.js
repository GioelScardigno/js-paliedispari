// l'utente sceglie un numero da 1 a 6 tramite un prompt
// il computer genera un numero casuale da 1 a 6
// una funzione somma i due numeri
// il risultato sarà o pari o dispari, quindi la vittoria dipenderà da che tipo di numero l'utente ha scelto

const oddOrOeven = prompt("pari o dispari?")
const userNumber = prompt("inserisci un numero a 1 a 6")
const evenWinMessage = "il numero è pari, hai vinto! :)"
const evenLostMessage = "il numero è pari, hai perso :("
const oddWinMessage = "il numero  dispari, hai vinto! :)"
const oddLostMessage = "il numero  dispari, hai perso :("
const error = "i parametri inseriti non sono corretti"

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function numberProcessing(number) {
    const randomNumber = getRndInteger(1, 6);
    addResult = number + randomNumber;
    if (addResult % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if (userNumber > 6) {
    console.log(error);
} else if (oddOrOeven === "pari" && numberProcessing(userNumber) === true) {
    console.log(evenWinMessage);
} else if (oddOrOeven === "pari" && numberProcessing(userNumber) === false) {
    console.log(oddLostMessage);
} else if (oddOrOeven === "dispari" && numberProcessing(userNumber) === true) {
    console.log(evenLostMessage);
} else if (oddOrOeven === "dispari" && numberProcessing(userNumber) === false) {
    console.log(oddWinMessage);
} else {
    console.log(error);
}







