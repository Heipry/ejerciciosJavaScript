// Declara una variable que se llame peliculaElegida y asignale el método prompt() para que le puedas solicitar al usuario que ingrese su película favorita de una lista, que tú vas a proporcionar en dicho método. 

let peliculaElegida = prompt(`Por favor elige cuál de estas películas es tu favorita: 
1- Coco
2- Relatos salvajes
3- Intocable
4- El señor de los anillos`);

// Evalúa cada uno de los casos con el condicional switch (utilizaremos este método para practicarlo). En el bloque de código de cada case le diremos que “su ticket ha sido emitido”, pero, lo haremos a través del método innerHTML escogiendo el id 'pelicula'.
let pelicula = document.getElementById('pelicula')

switch (peliculaElegida) {
  case "1":
    pelicula.innerHTML = '<p>Su ticket ha sido emitido.</p> <img src="./img/coco.jpg" alt"pelicula coco" >';
    
    break;
  case "2":
    pelicula.innerHTML =
      `<p>Su ticket ha sido emitido.</p> <img src="./img/relatos-salvajes.jpg" alt"pelicula relatos salvajes">`
    ;
    break;
  case "3":
    pelicula.innerHTML=  `<p>Su ticket ha sido emitido.</p> <img src="./img/intocable.jpg" alt"pelicula Intocable">`;
    break;
  default:
    pelicula.innerHTML = `<p>Su ticket ha sido emitido.</p> <img src="./img/anillos.jpg" alt"pelicula Elseñor de los anillos">`;
    break;
}

