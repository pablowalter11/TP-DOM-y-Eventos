//Ejercicio 7: Añade un evento que escuche cuando se presione una tecla en el documento y
//muestre el código de la tecla presionada en un elemento `<p>`.

export function ejercicio7() {
    var tecla = document.getElementById('tecla');
    document.addEventListener('keypress', e => {
        tecla.textContent = e.key;
    });

}
