// cmd k s/e Quokka comands.

document.write("<h1>Hola mundo! Por js script</h1>");

console.log(['Nano','Agus','Bauti'])

console.log({ //object
    "username": 'Nano',  
    "score": 43,
    "hours": 13,
    "proffessional": true,
    "friends":['Agus','Bauti']
})

console.log({ //object
    'username': 'Nano',  
    'score': 43,
    'hours': 13,
    "proffessional": true,
    "friends":['Agus','Bauti']
})

firstNum = 1
secondNum = 2
var mySum = firstNum + secondNum;
console.log("Resultado: "+mySum);

var name1 = "Nano1";
let name2 = "Nano2";           //Una variable declarada en un bloque con let solo está disponible para su uso dentro de ese bloque. Limita el alcance. 
console.log(name1,name2);


const PI = 3.14;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var acces = false;

if (acces == true) {
    console.log("Acces OK!!")
} else {
    console.log("Acces Denied!!!")
}


var card = "debit"

switch (card) {
    case "credit":
        console.log("Esto es una tarjeta de credito");
        break;
        case "debit":
        console.log("Esto es una tarjeta de debito");
        break;
    default:
        console.log("Esto es una tarjeta XXX");
        break;
}

var count = 5;
while (count > 0) {  // Se ejecuta mientras la condicion sea verdadera 
    console.log("Numero: "+count)
    count = count - 1;
}


var names = ["Nano","Agus","Bauti"];
console.log(names[2])
console.log(names.length)

for (var i = 0; i < names.length; i++) {
    console.log(names[i])
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function hablar(texto) {
    console.log(texto);
}

hablar("Hablando...");





function sumar(n1,n2) {
    console.log("la suma es: " +(n1+n2));
}

sumar(2,2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
