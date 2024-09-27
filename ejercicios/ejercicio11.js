//Ejercicio 11: Agrega un botón que oculte o muestre un elemento `<div>` con el id "miDiv".

const mostrar = '=(_8(|)';

export function ejericio11() {
    const boton = document.getElementById('asustador');
    const homero = document.getElementById('homero');
    homero.textContent = mostrar;
    boton.addEventListener('click', () => homero.classList.contains('ninja') ? homero.classList.remove('ninja') : homero.classList.add('ninja'));
}