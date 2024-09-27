//Ejercicio 2: Añade una clase "resaltado" a un elemento `<div>` con el id "miDiv".

export function ejercicio2() {
    document.addEventListener("DOMContentLoaded",() => {
        var div = document.getElementById("miDiv");
        console.log("CARGANDO PINTURA PARA EL CAMBIO");
        setTimeout(() => {
            div.className = 'azul';
            console.log("CHAPA Y PINTURA COMPLETADOS");
        }, 10000);
    });
}