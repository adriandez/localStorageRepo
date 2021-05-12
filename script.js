// Ejercicios
// 1. Formulario de contacto - Local Storage

// Crear un formulario de contacto con los siguientes campos:

//sumbit

// let counter = 0

// function sum(){
//     console.log("counter", counter)
//     counter++
// }

// sum()

// console.log(counter)

class Usuario {
    constructor(name, email, msg) {
        this.name = name;
        this.email = email;
        this.msg = msg;
    }
}

let arrayUsuarios = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : []


/* const comprobarUsuarios = () => localStorage.getItem("userData") !== null ? arrayUsuarios = JSON.parse(localStorage.getItem("userData")) : arrayUsuarios = [] */

// comprobarUsuarios()

const guardarDatos = (key, array) => localStorage.setItem(key, array)

const addSubmit = () => {
    let brSubmit1 = document.createElement("br");
    document.getElementById("fieldset").appendChild(brSubmit1);

    let inputSend = document.createElement("input")
    inputSend.id = "SendForm";
    inputSend.name = "SendForm";
    inputSend.value = "Enviar";
    inputSend.type = "submit";
    document.getElementById("fieldset").appendChild(inputSend);
};

addSubmit();



document.getElementById("formulario").addEventListener("submit", (event) => {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const mensaje = document.getElementById("mensaje").value

    const eventSubmit = new Usuario(nombre, email, mensaje)
    arrayUsuarios.push(eventSubmit);
    const userData = JSON.stringify(arrayUsuarios)

    guardarDatos("userData", userData);

    printData();

})

const printData = () => {

    for (let i = 0;i<arrayUsuarios.length; i++) {

        document.getElementById(`${i}`) !== null ? document.getElementById(`${i}`).remove() : ""

        const div = document.createElement("div")
        div.id = `${i}`
        document.getElementById("seccion").appendChild(div)

        const ul = document.createElement("ul")
        ul.id = `pintar${i}`
        document.getElementById(`${i}`).appendChild(ul)

        const li = document.createElement("li")
        document.getElementById(`pintar${i}`).appendChild(li)
        const liTxt = document.createTextNode(`Nombre: ${arrayUsuarios[i].name}, Email: ${arrayUsuarios[i].email}, Mensaje: ${arrayUsuarios[i].msg}`)
        li.appendChild(liTxt)

        const botonBorrar = document.createElement("input")
        botonBorrar.type = "button"
        botonBorrar.id = `boton${i}`
        botonBorrar.value = "Borrar usuario"
        document.getElementById(`${i}`).appendChild(botonBorrar)

        // document.getElementById(`boton${i}`).addEventListener(click, ()=> removeUser())

        // const removeUser = () => document.getElementById(`${i}`).remove()
        
    }
}



document.getElementById("boton").addEventListener("click", () => {
    localStorage.clear()
    arrayUsuarios = []
})



// Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave


// 2. Avanzado - Local Storage

// Crea botón para borrar todos los contactos guardados en Local Storage

// Crea botón para borrar un contacto en concreto de Local Storage.


/* const comprobarUsuarios = () => localStorage.getItem("userData") !== null ? arrayUsuarios = JSON.parse(localStorage.getItem("userData")) : arrayUsuarios = [] */