//Ejercicio 3: Elimina un  elemento`<ul>` con el id "miLista" de la página.

export function ejercicio3() {
    document.addEventListener('DOMContentLoaded', () => {
        var lista = document.getElementById('miLista');
        console.log("EL MAL ESTÁ GESTANDO UN ATAQUE CONTRA NUESTROS HÉROES");
        setTimeout(() => {
            lista.remove();
            console.log("ABAJO EL NINTENDOS, ARRIBA EL PLAYSSTEIYON DECIMOS TODOS SI QUE SI")
        },10000);
    });
}