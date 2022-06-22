let usuario = prompt("Ingrese el usuario");
let intento = 0;

while (usuario != "manuel") {
    alert("Usuario incorrecto");

    if (intento === 3) {
        break;
    }

    intento = intento + 1;
    usuario = prompt("Ingrese el usuario");
}

if (intento === 3) {
    alert("Acabaste tus intentos. Prueba mas tarde");
} else {
    alert("Ingreso exitoso!");
}