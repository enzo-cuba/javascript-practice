let userInput = document.getElementById("userInput").value;
let scores = [userInput];
let list = document.getElementById("list");


scores.forEach(score => {
    document.getElementById("btn").addEventListener('click', () => {
    const li = document.createElement("li")
    li.textContent = scores;
    list.appendChild(li);
    })
})
