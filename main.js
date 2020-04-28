// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).

//chiedo la difficolta all'utente e definisco il minimo e il massimo per ogni difficoltà
difficolta = inserimento_numero(0 , 2);
console.log(difficolta);

if(difficolta == 0) {
    var minimo = 1
    var massimo = 100;
}else if (difficolta == 1){
    var minimo = 1
    var massimo = 80;
}else{
    var minimo = 1
    var massimo = 50;
}

//creo un array in cui immagazinare i 16 numeri random creati dal pc
max_numeri_pc = 16;
var numeri_pc = [];

for(var i = 0; i < max_numeri_pc; i++){
    do{
        var random = numero_random(minimo, massimo);
    }while(numeri_pc.includes(random))

    numeri_pc[i] = random;
}

console.log(numeri_pc);

var errore = false;

var punteggio = 0;

//con un ciclo while chiedo un numero nuovo numero all'utente fino a che l'utente non scelga uno dei numeri estratti
// while (errore == false){
//     var numero_utente = inserimento_numero(minimo, massimo);
//
//     for (var i = 0; i < max_numeri_pc && errore == false; i++){
//         if(numeri_pc[i] == numero_utente){
//             errore = true;
//         }
//     }
//     if(errore == false){
//         punteggio++;
//     }else{
//         console.log('hai perso');
//         console.log('il tuo puntegio è ' + punteggio);
//     }
//
// }
var array_utente = [];

while (errore == false){
    var numero_utente = inserimento_numero(minimo, massimo);

    while(array_utente.includes(numero_utente)){
        alert('hai già inserito questo numero');
        var numero_utente = inserimento_numero(minimo, massimo);
    }

    array_utente.push(numero_utente);

    for (var i = 0; i < max_numeri_pc && errore == false; i++){
        if(numeri_pc[i] == numero_utente){
            errore = true;
        }
    }

    if(errore == false){
        punteggio++;
    }
}

if(punteggio == (massimo - max_numeri_pc)){
    console.log('hai vinto e hai raggiunto il punteggio massimo di  ' + punteggio );
}else{
    console.log('hai perso');
    console.log('il tuo punteggio è ' + punteggio);
}




//FUNZIONI

function inserimento_numero(min, max){

    var numero = prompt('inserisci un numero compreso tra ' + min + ' e ' + max )

    while (isNaN(numero) == true || numero < min || numero > max ) {
        alert('valore non valido')
        var numero = prompt('inserisci un numero compreso tra ' + min + ' e ' + max )
    }

    return numero;
}

function numero_random(min, max){
     return Math.floor(Math.random() * (max - min + 1) ) + min;
}
