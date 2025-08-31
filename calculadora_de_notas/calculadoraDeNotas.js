const userInput = document.getElementById("userInput");
const btn = document.getElementById("btn")
const list = document.getElementById("list");

function imprimir(score){
    score = Number(userInput.value);
    if (score <= 100 && typeof score === "number") {
        const li = document.createElement("li")
        li.textContent = "Nota: " + score;
        list.appendChild(li);
    } else {
        alert("Ingrese un número válido.")
    }


}



btn.addEventListener('click', imprimir);


//    document.getElementById("btn").addEventListener('click', () => {
//    const li = document.createElement("li")
//    li.textContent = scores;
//    list.appendChild(li);
//    })
