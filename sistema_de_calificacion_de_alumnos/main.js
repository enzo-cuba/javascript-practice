// Obtenemos el formulario y el contenedor donde se imprimirán los detalles de cada alumno.
const formData = document.getElementById("studentInput");
const container = document.getElementById("studentResume");

// Objeto modelo donde guardar datos de cada alumno.
const obj = {
    nombre: "",
    notas: [],
    promedio: 0,
    estado: null
}

// Con esto evitamos que el navegador se reinicie al hacer submit.
formData.addEventListener('submit', (event) =>{
    event.preventDefault();

    // Acá se procesan todos los datos del formulario:

    const data = new FormData(formData); // Guardamos todos los datos del form en esta variable.

    // Obtenemos los datos por separado por el name de cada input.
    const name = data.get("student"); // Obtenemos el nombre del alumno.
    const scoresArray = data.getAll("score"); // Obtenemos los datos de cada input con el mismo name y se agrupan en un array.

    // Pasamos las notas del array a números en un nuevo array.
    const scoresNumber = scoresArray.map(num => Number(num));
    
    // Sacamos el promedio y convertimos a números.
    const calcAverage = scoresNumber.reduce((acc, num) => acc + num, 0) / scoresNumber.length; // Sumamos cada nota entre sí y luego dividimos por la cantidad de notas.
    const average = Number(parseFloat(calcAverage).toFixed(2)); // Limitamos el resultado a dos decimales y reconvertimos a número.
   
    // Validamos los datos e ingresamos al objeto.
    

    
    obj.nombre = name;
    obj.notas = scoresNumber;
    
    //obj.estado = promedio >= 60 ? "Aprobado" : "Reprobado";

    // Añadimos esos datos al objeto.

    console.log(obj)
})
