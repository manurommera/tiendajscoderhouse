let nombre = prompt("Ingrese su nombre porfavor.");

function Saludar() {
    alert("Hola " + nombre + ".Bienvenido a su tienda online");
};

Saludar();

let suma = 0;
function Tienda() {
    let numeroprod = parseInt(prompt("Coloca el numero respectivo del producto: 1-> Shampoo Sólido= $1000 2-> Jabon Natural= $500 3-> Aceite Natural= $2000 4-> Vela Aromática= $750 5-> Ver total. 9-> Salir."));
    while (numeroprod != 9){
        switch(numeroprod){
            case 1:
                alert("Se agregó Shampoo Sólido a tu carrito")
                suma = suma+1000;
                break;
            case 2:
                alert("Se agregó Jabon Natural a tu carrito")
                suma = suma+500;
                break;
            case 3:
                alert("Se agregó Aceite Natural a tu carrito")
                suma = suma+2000;
                break;
            case 4:
                alert("Se agregó Vela Aromática a tu carrito")
                suma = suma+750;
                break;
            case 5:
                alert("Esta es su cuenta " + "$" + suma)
                break;
            case 9:
                alert("Gracias, vuelva prontos")
                break;
        }
        parseInt(prompt("Coloca el numero respectivo del producto: 1-> Shampoo Sólido= $1000 2-> Jabon Natural= $500 3-> Aceite Natural= $2000 4-> Vela Aromática= $750 5-> Ver total. 9-> Salir."));
    }
}

Tienda();


