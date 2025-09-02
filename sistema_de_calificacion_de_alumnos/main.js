// Obtenemos el formulario y el contenedor donde se imprimirán los detalles de cada alumno.
const formData = document.getElementById("studentInput");
const container = document.getElementById("studentResume");

// Objeto modelo donde guardar datos de cada alumno.
const obj = {}

// Con esto evitamos que el navegador se reinicie al hacer submit.
formData.addEventListener('submit', (event) =>{
    event.preventDefault();

    // Primero validamos los datos antes de procesarlos.
    
    // Función para validar los datos.
    function dataValidation(){

        const data = new FormData(formData); // Guardamos todos los datos del form en esta variable.

        const validData = {} // Un objeto vacío donde guardar los datos válidos.

        // Obtenemos los datos por separado por el name de cada input.
        const name = data.get("student");
        const inputsArray = data.getAll("score"); // Los inputs obtenidos se agrupan en un array.
        
        // Pasamos las notas del array a números en un nuevo array.
        const numbersArray = inputsArray.map(num => Number(num));

        // Validamos cada nota del array.
        const validScores = numbersArray.every(num => num <= 100 && num >= 0)

        // Si todo sale bien se añaden los datos al objeto.
        if (validScores === true && name !== ""){
            validData.notas = numbersArray;
            validData.nombre = name;
            return validData;
        } else {
            alert("Datos inválidos.")
        }
    }

    function validAverageAndStatus(){

        const scoresArray = dataValidation().notas; // Atrapamos array de notas.
        const processData = {} // Objeto donde guardar los datos procesados.
    
        // Sacamos promedio y estado.
        const avrg = scoresArray.reduce((acc, num) => acc + num, 0) / scoresArray.length;
        const reconvertirAvrg = Number(parseFloat(avrg).toFixed(2));
        const status = avrg >= 60 ? "Aprobado" : "Reprobado";
    
        // Añadimos los datos al objeto.
        processData.promedio = reconvertirAvrg;
        processData.estado = status;
    
        return processData;
    }

    // Nuevo objeto para fusionar los resultados de las funciones. 
    const alumno = { ...dataValidation(), ...validAverageAndStatus()};
    console.log(alumno);
})
