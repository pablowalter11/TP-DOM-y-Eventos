//Ejercicio 6: Crea un formulario con un campo de texto y un botón. Al hacer clic en el botón,
//muestra el valor del campo de texto en un elemento `<p>`.

export function ejercicio6() {
    document.addEventListener('DOMContentLoaded', () => {
        var parrafo = document.getElementById('resultado');
        var pokemon = document.getElementById('pokemon');
        var formulario = document.getElementById('formulario');

        var boton = document.addEventListener('submit', (event) => {
            event.preventDefault();
            parrafo.textContent = `${pokemon.value} ATRAPADO!!`;
            pokemon.value = '';
        });    
    });
}