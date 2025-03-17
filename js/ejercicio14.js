// A) Imprimir todos los números entre -20 y 30
let num = -20;
while (num <= 30) {
  console.log(`El número es: ${num}`);
  num++;
}

// B) Imprimir todos los números pares entre 20 y 60
let num2 = 20;
while (num2 <= 60) {
  console.log(`El número es: ${num2}`);
  num2 += 2;
}
// C) Imprimir todos los números impares entre 600 y 666
let num3 = 600;
while (num3 <= 666) {
  if (num3 % 2 == 1) {
    console.log(`El número es: ${num3}`);
  }
  num3++;
}
// D) Imprimir todos los números primos entre 1 y 150
let num4 = 2;
while (num4 <= 150) {
  let esPrimo = true;
  for (let i = 2; i < num4; i++) {
    if (num4 % i == 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    console.log(`El número primo es: ${num4}`);
  }
  num4++;
}

  