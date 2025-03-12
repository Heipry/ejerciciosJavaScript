// Crear una ventana con contenido dinámico (tabla con información del navegador y ubicación)
var ventana = window.open("", "", "width=600,height=400");
ventana.document.write("<table border='1'>");
ventana.document.write(
  "<tr><th>Navegador</th><th>Plataforma</th><th>Ubicación</th></tr>"
);
ventana.document.write(
  "<tr><td>" +
    navigator.userAgent +
    "</td><td>" +
    navigator.platform +
    "</td><td>" +
    window.location.href +
    "</td></tr>"
);
ventana.document.write("</table>");
