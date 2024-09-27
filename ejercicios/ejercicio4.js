//Ejercicio 4: Crea un botón y, al hacer clic en él, muestra un mensaje de alerta que diga "¡Hiciste clic!".

export function ejercicio4() {
    document.addEventListener('DOMContentLoaded', () => {
        var boton = document.getElementById('miBoton');
        boton.onclick = () => {
            alert('HICISTE CLIP CAPO, TODO TRANCA IGUAL EH, NO JODO MÁS');
        }
    });
}