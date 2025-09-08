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
    mostrarProductos(arrayDeProductos);
    filtroInput.value = "";
});

tablaBody.addEventListener("click", function(e) {
    if (e.target.classList.contains("eliminar")) {
        const fila = e.target.closest("tr");
        const index = Array.from(tablaBody.children).indexOf(fila);
        eliminarFila(arrayDeProductos, index);
        fila.remove();
    }
});

tablaBody.addEventListener("click", function(e) {
    if (e.target.classList.contains("editar")) {
        const fila = e.target.closest("tr");
        const index = Array.from(tablaBody.children).indexOf(fila);
        editarFila(arrayDeProductos, index);
    }
});

filtroCategoria.addEventListener('change', () => {
    filtrarPorCategoria(arrayDeProductos);
});

function obtenerDatos() {
    const datos = Object.fromEntries(new FormData(form));

    form.querySelectorAll('input, select').forEach(input => {
        input.classList.remove('input-error');
    });

    let tieneError = false;

    if (!datos.nombre) {
        document.getElementById("nombre").classList.add('input-error');
        tieneError = true;
    }

    if (!datos.cantidad || isNaN(datos.cantidad) || datos.cantidad <= 0) {
        document.getElementById("cantidad").classList.add('input-error');
        tieneError = true;
    }

    if (!datos.precio || isNaN(datos.precio) || datos.precio <= 0) {
        document.getElementById("precio").classList.add('input-error');
        tieneError = true;
    }

    if (tieneError) return;

    arrayDeProductos.push(datos);
    mostrarProductos(arrayDeProductos);
    form.reset();
}


function agregarFila(producto) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td><button class="eliminar">Eliminar</button></td>
        <td><button class="editar">Editar</button></td>
    `;

    actualizarStockBajo(fila, producto)

    tablaBody.appendChild(fila);
}

function mostrarProductos(arr) {
    tablaBody.innerHTML = "";
    for (const producto of arr) {
        agregarFila(producto);
    }
}

function filtrarPorNombre(arr) {
    const input = filtroInput.value.toLowerCase();
    const filtrados = arr.filter(producto => producto.nombre.toLowerCase().includes(input));

    tablaBody.innerHTML = "";
    for (const producto of filtrados) {
        agregarFila(producto);
    }
}

function eliminarFila(arr, index) {
    arr.splice(index, 1);
    return arr;
}

function editarFila(arr, index) {
    const producto = arr[index];
    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("cantidad").value = producto.cantidad;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("indiceEditar").value = index;
}

function filtrarPorCategoria(arr) {
    const categoriaSeleccionada = filtroCategoria.value;
    const filtrados = categoriaSeleccionada === "" ? arr : arr.filter(producto => producto.categoria === categoriaSeleccionada);
    mostrarProductos(filtrados);
}

function actualizarStockBajo(fila, producto) {
    const cantidadMinima = 5;
    const stockCell = fila.children[2];
    if (producto.cantidad < cantidadMinima) {
        stockCell.classList.add("stock-bajo");
    } else {
        stockCell.classList.remove("stock-bajo");
    }
}