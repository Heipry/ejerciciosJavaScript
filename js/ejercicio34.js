// Crear una ventana emergente con información del navegador
var ventana = window.open("", "", "width=400,height=200");

// Escribir contenido en la ventana emergente
ventana.document.write("<h3>Mi Nombre</h3>");
ventana.document.write(
  "<p>Idioma del Navegador: " + navigator.language + "</p>"
);
ventana.document.write("<p>URL Actual: " + location.href + "</p>");
