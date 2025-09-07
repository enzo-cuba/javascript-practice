const form = document.getElementById('form');
const tablaBody = document.querySelector('#tabla tbody');
const filtroInput = document.getElementById('filtrar-nombre');

const arrayDeProductos = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    obtenerDatos();
});

filtroInput.addEventListener('input', () => {
    filtrarProductos();
})

function obtenerDatos(){
    const datos = Object.fromEntries(new FormData(form));

    // Validación de datos

    if (!datos.nombre){
        alert("Escriba un nombre válido");
        return;
    }

    if(!datos.cantidad || isNaN(datos.cantidad) || datos.cantidad <= 0){
        alert("Escriba una cantidad válida");
        return;
    }

    if(!datos.precio || isNaN(datos.precio) || datos.precio <= 0){
        alert("Escriba un precio válido");
        return;
    }

    arrayDeProductos.push(datos) // Agregamos los datos validados al array

    mostrarProductos() // Imprime los productos si fueron añadidos al array

    form.reset();

}

function mostrarProductos(){
    
    const index = arrayDeProductos.length - 1;
    const fila = document.createElement("tr");

    for (const producto of arrayDeProductos){
        fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td><button onclick="eliminarAlumno(${index}, this)">Eliminar</button></td>
        <td><button onclick="eliminarAlumno(${index}, this)">Editar</button></td>
        `;
    }

    tablaBody.appendChild(fila);
    
}

function filtrarProductos(){
    //const texto = filtroInput.value;
    //const resultados = arrayDeProductos.filter(producto => producto.nombre.includes(texto));
}