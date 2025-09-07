const form = document.getElementById('form');
const tablaBody = document.querySelector('#tabla tbody');
const filtroInput = document.getElementById('filtrar-nombre');
const filtroCategoria = document.getElementById('filtrar-categoria');

const arrayDeProductos = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    obtenerDatos();
});

filtroInput.addEventListener('input', () => {
    filtrarPorNombre(arrayDeProductos);
});

filtroInput.addEventListener('blur', () => {
    mostrarProductos(arrayDeProductos); // Restaurar lista original
    filtroInput.value = "";
});

// Función para crear y agregar una fila al tbody
function agregarFila(producto) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
    `;
    tablaBody.appendChild(fila);
}

function obtenerDatos() {
    const datos = Object.fromEntries(new FormData(form));

    // Validación de datos
    if (!datos.nombre) {
        alert("Escriba un nombre válido");
        return;
    }

    if (!datos.cantidad || isNaN(datos.cantidad) || datos.cantidad <= 0) {
        alert("Escriba una cantidad válida");
        return;
    }

    if (!datos.precio || isNaN(datos.precio) || datos.precio <= 0) {
        alert("Escriba un precio válido");
        return;
    }

    arrayDeProductos.push(datos); // Agregamos los datos validados al array
    mostrarProductos(arrayDeProductos); // Mostrar lista completa
    form.reset();
}

function mostrarProductos(arr) {
    tablaBody.innerHTML = ""; // Limpiar antes de mostrar
    for (const producto of arr) {
        agregarFila(producto);
    }
}

function filtrarPorNombre(arr) {
    const input = filtroInput.value.toLowerCase();
    const filtrados = arr.filter(producto => producto.nombre.toLowerCase().includes(input));

    tablaBody.innerHTML = ""; // Limpiar antes de mostrar filtrados
    for (const producto of filtrados) {
        agregarFila(producto);
    }
}
