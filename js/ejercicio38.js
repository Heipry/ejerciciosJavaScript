// Crear una ventana con contenido dinámico (tabla con información del navegador y ubicación)
var ventana = window.open("", "", "width=600,height=400");
ventana.document.write("<table border='1'>");
ventana.document.write("<tr><th>Propiedad</th><th>Valor</th></tr>");

// Mostramos propiedades 
ventana.document.write(
  "<tr><td>cookieEnabled</td><td>" + navigator.cookieEnabled + "</td></tr>"
);
ventana.document.write(
  "<tr><td>geolocation</td><td>" +
    (navigator.geolocation ? "Disponible" : "No disponible") +
    "</td></tr>"
);
ventana.document.write(
  "<tr><td>language</td><td>" + navigator.language + "</td></tr>"
);
ventana.document.write(
  "<tr><td>onLine</td><td>" + navigator.onLine + "</td></tr>"
);
ventana.document.write(
  "<tr><td>userAgent</td><td>" + navigator.userAgent + "</td></tr>"
);

// Otras propiedades relacionadas con la ubicación
ventana.document.write(
  "<tr><td>URL actual</td><td>" + window.location.href + "</td></tr>"
);

ventana.document.write("</table>");
