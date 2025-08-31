const formData = document.getElementById("studentInput");
const container = document.getElementById("studentResume");
const obj = {
    nombre: "",
    notas: [],
    promedio: 0,
    estado: null
}

formData.addEventListener('submit', (event) =>{
    event.preventDefault();
    const data = new FormData(formData);
    const name = data.get("student");
    const score = data.getAll("score");
    obj.nombre = name;
    obj.notas = score.map(nota => Number(nota));
    const promedio = parseFloat(obj.notas.reduce((acc, num) => acc + num, 0) / obj.notas.length).toFixed(2);
    obj.promedio = Number(promedio);
    obj.estado = promedio >= 60 ? "Aprobado" : "Reprobado";
})
