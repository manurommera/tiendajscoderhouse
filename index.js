let nombre = prompt("Ingrese su nombre porfavor.");
let numeroprod;
function Saludar() {
    alert("Hola " + nombre + ".Bienvenido a su tienda online");
};

Saludar();

function Tienda() {
    let suma = 0;
    while (numeroprod !== 9){
        prompt("Coloca el numero respectivo del producto: 1-> Shampoo Sólido= $1000 2-> Jabon Natural= $500 3-> Aceite Natural= $2000 4-> Vela Aromática= $750 5->")
        if (numeroprod == 1){
            suma = suma+1000;
            alert("Se agregó Shampoo Sólido a tu carrito")
        }
        if (numeroprod == 2){
            suma = suma+500;
            alert("Se agregó Jabon Natural a tu carrito")
        }
        if (numeroprod == 3){     
            suma = suma+2000;
            alert("Se agregó Aceite Natural a tu carrito")
        }
        if (numeroprod == 4){
            suma = suma+750;
            alert("Se agregó Vela Aromática a tu carrito")
        }
        if (numeroprod == 5){
            document.write(suma);
            alert("Esta es su cuenta " + "$" + suma)
        }
        if (numeroprod == 9){
            alert("Gracias, vuelva prontos")
        }
    }
}

Tienda();


