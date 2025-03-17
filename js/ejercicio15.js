// Dada la edad de una persona (entre 1 y 110 años) y su género ('F' para mujeres, 'M' para hombres), indicar si está en edad para jubilarse.
// Observación: Las mujeres se jubilan con 60 años o más. Los hombres se jubilan con 65 años o más. Ejemplo: Si ingresa 60 y 'M', debe mostrar como resultado en pantalla “No se jubila”.

let edad = parseInt(prompt("Ingresa la edad de la persona:"));
let genero = prompt("Ingresa el género de la persona ('F' para mujeres, 'M' para hombres):");

if (isNaN(edad) || (genero !== 'F' && genero !== 'M')) {
    alert("Por favor, ingresa una edad válida y un género válido ('F' o 'M').");
} else {
    // Determinamos si la persona está en edad para jubilarse
    if ((genero === 'F' && edad >= 60) || (genero === 'M' && edad >= 65)) {
        alert("Está en edad para jubilarse.");
    } else {
        alert("No se jubila.");
    }
}
