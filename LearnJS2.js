function showFullname(){
    console.log("Esto es una funcion");
    }

    showFullname();


//////////////////////////////////////

const user = {    //objeto con propiedades y objeto dentro.
    name: "Nano",
    lastname: "Panella",
    age: 34,
    hobbies: ["leer","programing","run"],
    address: {
        street: "Av Siempreviva",
        city: "Rosario"
    }
}

console.log(user);


    //////////////////////////////////////

const account = {
    monto: 0,
    total(){
        console.log("Su monto actual es de " + this.monto)
    },
    sumar(importe){
        this.monto = this.monto + importe;
        console.log("Se sumo "+importe+"$"+" ahora el monto es de " +this.monto);
    },
    restar(importe){
        this.monto = this.monto - importe;
        console.log("Se resto "+importe+"$"+" ahora el monto es de " +this.monto);
    },
}

console.log(account.monto)
console.log(account.sumar(3))
console.log(account.monto)
console.log(account.restar(1))
console.log(account.monto)

//////////////////////////////////////

function User(){  //Constructor de Objetos
    this.name = "";
    this.lastname = "";
    this.age = "";
    this.showInfo = function () {
       return "El usuario "+ this.name + " " + this.lastname + " tiene " + this.age + " años!";
    }
}

const user1 = new User();
user1.name = "Nano"
user1.lastname = "Pane"
user1.age = 33
console.log(user1.showInfo())


