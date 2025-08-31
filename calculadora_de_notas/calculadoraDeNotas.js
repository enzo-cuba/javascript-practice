//Obtener elementos HTML.
const userInput = document.getElementById("userInput");
const btn = document.getElementById("btn")
const list = document.getElementById("list");


// Array donde acumular los puntos.
let scoresArray = [];

function imprimir(){
    //Valida y agrega los puntajes a la lista.
    score = parseFloat(userInput.value);
    if (score <= 100 && score >= 0 && typeof score === "number") {
        const li = document.createElement("li")
        li.textContent = "Nota: " + score;
        list.appendChild(li);
        // Agregamos los puntajes al array.
        scoresArray.push(score);
        // Limpiamos y enfocamos el input para la siguiente nota (Sugerencia de ChatGPT).
        userInput.value = "";
        userInput.focus();
    } else {
        alert("Ingrese un número válido.")
    }
    // Suma los puntajes acumulados en el array y saca el promedio.
    let calcAverage = scoresArray.reduce((acum, num) => acum + num, 0) / scoresArray.length;
    // Escribe el promedio en el DOM.
    let average = document.getElementById("average");
    average.textContent = calcAverage.toFixed(2);

    // Verifica si se aprueba o reprueba en base a una puntuación mínima.
    let status = document.getElementById("status");
    let approved = calcAverage >= 60;
    if(approved){
        status.textContent = "Aprobado";
    } else {
        status.textContent = "Reprobado";
    }
    
}

btn.addEventListener('click', imprimir);