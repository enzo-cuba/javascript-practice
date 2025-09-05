// Obtenemos el formulario y el contenedor donde se imprimirán los detalles de cada alumno.
const formData = document.getElementById("studentInput");
const container = document.getElementById("studentInfo");

// Array donde guardar cada alumno.
const arrStudents = [];

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

    try {
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
        arrStudents.push(alumno); // Agregamos cada alumno al array de alumnos.

        // Imprimimos cada alumno en el contenedor.
        container.innerHTML = "";
        arrStudents.forEach(student => {
        container.innerHTML += `
            <li>
                Alumno: ${student.nombre}, 
                Notas: ${student.notas}, 
                Promedio: ${student.promedio}, 
                Estado: <span style="color: ${
                    student.estado === "Aprobado" ? "green" : "red"
                }; font-weight: bold;">${student.estado}</span>
            </li>`;
        });

        

    } catch (error) {

        console.log(error);

    }

})

// Corrección GPT:

/*

const formData = document.getElementById("studentInput");
const container = document.getElementById("studentInfo");
const arrStudents = [];

formData.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validar y obtener datos
    function dataValidation() {
        const data = new FormData(formData);
        const name = data.get("student");
        const inputsArray = data.getAll("score").map(Number);

        if (!name || !inputsArray.every(num => !isNaN(num) && num >= 0 && num <= 100)) {
            alert("Datos inválidos.");
            return null;
        }
        return { nombre: name, notas: inputsArray };
    }

    // Calcular promedio y estado
    function calculateAverageAndStatus(validData) {
        const avrg = validData.notas.reduce((acc, n) => acc + n, 0) / validData.notas.length;
        const promedio = +avrg.toFixed(2);
        const estado = promedio >= 60 ? "Aprobado" : "Reprobado";
        return { promedio, estado };
    }

    const validatedData = dataValidation();
    if (!validatedData) return;

    const alumno = { ...validatedData, ...calculateAverageAndStatus(validatedData) };
    arrStudents.push(alumno);

    // Renderizar lista
    container.innerHTML = "";
    arrStudents.forEach(student => {
        container.innerHTML += `
            <li>
                Alumno: ${student.nombre}, 
                Notas: ${student.notas.join(", ")}, 
                Promedio: ${student.promedio}, 
                Estado: <span style="color: ${student.estado === "Aprobado" ? "green" : "red"}; font-weight: bold;">
                    ${student.estado}
                </span>
            </li>`;
    });
});

*/