// HU04 - UI del asistente Boxy
// Boxy guía al cliente en lenguaje natural y le sugiere embalaje y servicio.

function responderBoxy(mensajeCliente) {
  if (!mensajeCliente) {
    return "Contame qué necesitás enviar y te ayudo.";
  }
  return {
    sugerencia: "Para eso te conviene una caja mediana y envío estándar.",
    siguientePaso: "¿Querés que cargue estos datos en la solicitud?",
  };
}

console.log(responderBoxy("Quiero mandar unos libros a Rosario"));
