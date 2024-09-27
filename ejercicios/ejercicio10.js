//Ejercicio 10: Crea una galería de imágenes. Al hacer clic en una imagen, muestra su descripción
//en un elemento `<p>`.

export function ejercicio10() {
    const tekken = document.getElementById('tekken');
    const moto = document.getElementById('moto');
    const bugs = document.getElementById('bugs');
    const descripción = document.getElementById('descripcion');
    tekken.addEventListener('click', () => {
        descripción.textContent = tekken.alt;
    });
    moto.addEventListener('click', () => {
        descripción.textContent = moto.alt;
    });
    bugs.addEventListener('click', () => {
        descripción.textContent = bugs.alt;
    });
}