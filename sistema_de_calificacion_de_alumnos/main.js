const formData = document.getElementById("studentInput");
const container = document.getElementById("studentInfo");

formData.addEventListener('submit', (event) =>{
    event.preventDefault();
    const data = new FormData(formData);
    const objeto = Object.fromEntries(data.entries());
})

