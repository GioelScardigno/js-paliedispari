// chiedre all'utente di inserire una parola tramite prompt
// inserire ogni lettera della parola in un array
// invertire l'ordine delle lettere della parola dentro l'array
// confrontare adesso la parola digitata nel prompt e la parola invertita nell'array
// se sono uguali la parola è palindroma
// se sono diverse la parola non è palindroma

const userWord = prompt("scrivi una parola");
const yesMessage = "la parola è palindroma";
const noMessage = "la parola non è palindroma";

function IsTheWordPalindrome(word){
    const wordLetters = [];
    for (let i = 0; i < word.length; i++) {
        wordLetters.push(word[i]);
    }
    const reverseWord = wordLetters.reverse();
    const joinedWord = reverseWord.join("");
    
    if (word === joinedWord) {
        return true;
    } else {
        return false;
    }
}

if(IsTheWordPalindrome(userWord) === true){
    console.log(yesMessage);
    } else {
        console.log(noMessage);
        
    }






