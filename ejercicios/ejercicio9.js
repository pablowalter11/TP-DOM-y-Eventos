//Ejercicio 9: Implementa un contador que incremente en 1 cada vez que se haga clic en un
//botón.

let i = 0;

export function ejercicio9() {
    const contador = document.getElementById('contador');
    const p = document.getElementById('pContador');
    contador.addEventListener('click', () => {
        i++;
        p.textContent = i;
    });
}