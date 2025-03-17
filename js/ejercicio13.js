// Se le pedirá al usuario 2 números para generar la suma, la resta, la división y la multiplicación entre ellos.
//1. Preguntar al usuario que operación quiere realizar antes de que ingrese los dos números a operar.
// 2. Si el usuario no ingresa ninguna respuesta, automáticamente informarle que deberá ingresar un dato.
//Defino las varaibles
let num1 = 0;
let num2 = 0;
let resultado = 0;

//Pido que elija la operacion
let operacion =
  prompt(`Ingrese la opción en número de  la operación que desea hacer:
1 - Suma
2 - Resta
3 - Multiplicación
4 - División
`)

// Validamos si la operación es válida
if (operacion === "1" || operacion === "2" || operacion === "3" || operacion === "4") {
    // Pedimos los números para operar
    num1 = parseInt(prompt("Ingresa el primer número:"));
    num2 = parseInt(prompt("Ingresa el segundo número:"));
    
    // Validamos que los números ingresados sean válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
    } else {
        // Realizamos la operación según la opción seleccionada
        switch (operacion) {
            case "1":
                resultado = num1 + num2;
                break;
            case "2":
                resultado = num1 - num2;
                break;
            case "3":
                resultado = num1 * num2;
                break;
            case "4":
                resultado = num1 / num2;
                break;
        }
        // Mostramos el resultado
        alert(`El resultado es: ${resultado}`);
    }
} else {
    alert("Debes ingresar una operación válida (suma, resta, multiplicación, división).");
}