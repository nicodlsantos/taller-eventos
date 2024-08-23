const miDiv = document.getElementById('miDiv');

miDiv.addEventListener('click', () => {
    alert('Hola! Soy el div');
});

const miBoton = document.getElementById('miBoton');

miBoton.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Hola!');
});