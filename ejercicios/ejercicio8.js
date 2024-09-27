//Ejercicio 8: Crea una lista de elementos `<li>`. Al hacer clic en un elemento de la lista, cambia
//su color de fondo.

const arreglo = ['red','pink','violet'];

var aleatorio = () => Math.floor(Math.random() * 3);

export function ejercicio8() {
    var lista = document.getElementById('listaPlay');

    lista.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.backgroundColor = arreglo[aleatorio()];
        }
    });
}
