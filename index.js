// let nombre = prompt("Ingrese su nombre porfavor.");

// function Saludar() {
//     alert("Hola " + nombre + ".Bienvenido a su tienda online");
// };


// Saludar();
// class producto{
//     constructor(numero, nombre, precio){
//         this.numero = numero;
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// function suma(total){
//     let cuenta = 0;
//     for(let i = 0; i < total.length; i++){
//         cuenta += total[i]
//     }
//     return cuenta
// }


// function Tienda() {
//     let carrito = [];
//     let numeroprod = parseInt(prompt(`Coloca el numero respectivo del producto: \n 1-> Shampoo Sólido= $1000 \n 2-> Jabon Natural= $500 \n 3-> Aceite Natural= $2000 \n 4-> Vela Aromática= $750 \n 5-> Ver total. \n 0-> Salir.`));
//     while (numeroprod > 0 && numeroprod < 6){
//         if (numeroprod == 1) {
//                 alert("Se agregó Shampoo Sólido a tu carrito");
//                 let Shampoo = new producto(1, "Shampoo solido", 1000);
//                 carrito.push(Shampoo)
//                 numeroprod = parseInt(prompt(`Coloca el numero respectivo del producto: \n 1-> Shampoo Sólido= $1000 \n 2-> Jabon Natural= $500 \n 3-> Aceite Natural= $2000 \n 4-> Vela Aromática= $750 \n 5-> Ver total. \n 0-> Salir.`));
//         }
//         else if (numeroprod == 2){
//                 alert("Se agregó Jabon Natural a tu carrito");
//                 let Jabon = new producto(2, "Jabon Natural", 500);
//                 carrito.push(Jabon)
//                 numeroprod = parseInt(prompt(`Coloca el numero respectivo del producto: \n 1-> Shampoo Sólido= $1000 \n 2-> Jabon Natural= $500 \n 3-> Aceite Natural= $2000 \n 4-> Vela Aromática= $750 \n 5-> Ver total. \n 0-> Salir.`));
//         }
//         else if (numeroprod == 3){
//                 alert("Se agregó Aceite Natural a tu carrito");
//                 let Aceite = new producto(3, "Aceite Natural", 2000);
//                 carrito.push(Aceite)
//                 numeroprod = parseInt(prompt(`Coloca el numero respectivo del producto: \n 1-> Shampoo Sólido= $1000 \n 2-> Jabon Natural= $500 \n 3-> Aceite Natural= $2000 \n 4-> Vela Aromática= $750 \n 5-> Ver total. \n 0-> Salir.`));
//         }
//         else if (numeroprod == 4){
//                 alert("Se agregó Vela Aromática a tu carrito");
//                 let Vela = new producto(4, "Vela Aromática", 750);
//                 carrito.push(Vela)
//                 numeroprod = parseInt(prompt(`Coloca el numero respectivo del producto: \n 1-> Shampoo Sólido= $1000 \n 2-> Jabon Natural= $500 \n 3-> Aceite Natural= $2000 \n 4-> Vela Aromática= $750 \n 5-> Ver total. \n 0-> Salir.`));
//         }
//         else if (numeroprod == 5){
//                 const precio = carrito.map(prod=>prod.precio)
//                 alert("Esta es su cuenta " + "$" + suma(precio)+ "pesos.");
//                 numeroprod = parseInt(prompt(`Coloca el numero respectivo del producto: \n 1-> Shampoo Sólido= $1000 \n 2-> Jabon Natural= $500 \n 3-> Aceite Natural= $2000 \n 4-> Vela Aromática= $750 \n 5-> Ver total. \n 0-> Salir.`));
//         }
//     }
//     alert("Gracias, vuelva prontos");
// }



// Tienda();


// const nombreproducto = carrito.map(prod=>prod.nombre)

const items = document.getElementById('card');
const bodyCard = document.getElementById('bodycard')

class producto{
    constructor(numero, nombre, precio){
        this.numero = numero;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let Shampoo = new producto(1, "Shampoo solido", 1000);
let Jabon = new producto(2, "Jabon Natural", 500);
let Aceite = new producto(3, "Aceite Natural", 2000);
let Vela = new producto(4, "Vela Aromática", 750);

const button = document.querySelector(".btn");

button.addEventListener("click", e =>{
    addCarrito(e)
})

const addCarrito = e =>{
    console.log(e)
}

