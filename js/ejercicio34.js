// Crear una ventana emergente
var ventana = window.open("", "", "width=400,height=300");

// Escribir el contenido en la ventana emergente
ventana.document.write("<h3>Información del navegador</h3>");
ventana.document.write("<p>Navegador: " + navigator.userAgent + "</p>");
ventana.document.write("<p>Plataforma: " + navigator.platform + "</p>");
