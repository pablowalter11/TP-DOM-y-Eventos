//Ejercicio 5: Agrega un evento que cambie el color de fondo de un elemento `<div>` al pasar el
//mouse sobre él y lo restaure cuando se retire el mouse.

export function ejercicio5() {
    document.addEventListener("DOMContentLoaded", () => {
        var div = document.getElementById("divCambioColor");
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'green';
        });
        div.addEventListener('mouseout', () => {
            div.style.backgroundColor = 'white';
        });
    });
}