// Ejercicio 35 - Historial de navegación

// Acceder a los botones en el DOM
const btnBack = document.getElementById("btnBack");
const btnForward = document.getElementById("btnForward");


// Event listeners para los botones
btnBack.addEventListener("click", () => {
  console.log("Navegando al historial anterior...");
  history.back();
});

btnForward.addEventListener("click", () => {
  console.log("Navegando al siguiente elemento del historial...");
  history.forward();
});
