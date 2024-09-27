//Ejercicio 1: Cambia el contenido de un elemento `<p>` con el id "miParrafo" a "Hola, mundo!".

export function ejercicio1() {
    document.addEventListener("DOMContentLoaded", () => {
        var parrafo = document.getElementById("miParrafo");
        console.log("LOADING...");
        setTimeout(() => {
            parrafo.textContent = "Hola, mundo!";
            console.log("COMPLETE");
        },10000);
    });
}