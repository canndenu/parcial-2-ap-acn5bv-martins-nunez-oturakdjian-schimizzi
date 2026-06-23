// HU19 - Calificaciones y reseñas (UI)
// El cliente califica el servicio y al chofer al finalizar el envío.

function calificar(envioId, estrellas, comentario) {
  if (estrellas < 1 || estrellas > 5) {
    return "La calificación debe ir de 1 a 5";
  }
  return {
    envioId,
    estrellas,
    comentario,
    fecha: new Date().toISOString(),
  };
}

console.log(calificar(1, 5, "Excelente, llegó antes de lo esperado"));
