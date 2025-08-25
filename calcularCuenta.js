/*

Ejercicio: Calculadora de Propinas

Crea un programa en JavaScript que pida al usuario el total de una cuenta en un restaurante y el
porcentaje de propina que quiere dejar. Luego, el programa debe mostrar:

- El monto de la propina.

- El total a pagar (cuenta + propina).

Reglas:

- Usa prompt() para pedir los datos al usuario.

- Convierte los valores ingresados a números.

- Usa variables bien nombradas.

- Muestra el resultado con console.log().

- Opcional: redondea los resultados a 2 decimales.

*/


// Mi solución:

// let cuenta = parseFloat(prompt("Total de la cuenta"));
// let propina = Number(prompt("Propina (Porcentaje)"));;
// let calcular = parseFloat(cuenta / propina + cuenta).toFixed(2);
// console.log("Total de la cuenta: " + cuenta);
// console.log("Propina: " + propina + "%");
// console.log("Total a pagar: " + calcular);

// Corrección GPT:

let cuenta = parseFloat(prompt("Total de la cuenta"));
let propina = parseFloat(prompt("Propina (Porcentaje)"));

let propinaMonto = (cuenta * propina) / 100;
let total = cuenta + propinaMonto;

console.log("Total de la cuenta: " + cuenta.toFixed(2));
console.log("Propina: " + propinaMonto.toFixed(2));
console.log("Total a pagar: " + total.toFixed(2));

/*

Explicación:

- Fórmula equivocada para la propina: Ejemplo: si la cuenta es 100 y la propina 10, te da 100 / 10 + 100 = 110
propina 10, sí, pero es pura casualidad; con 20% ya da mal.
La fórmula correcta sería: (cuenta * propina) / 100;

- No estás mostrando el monto de la propina: El enunciado pedía mostrar la propina en dinero, no solo el porcentaje.

- Uso innecesario de parseFloat en la suma final: Ya son números, con toFixed(2) basta al final.

*/