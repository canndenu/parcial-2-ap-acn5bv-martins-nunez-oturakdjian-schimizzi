// HU13 - Visualización del chofer asignado
// Muestra los datos del chofer una vez asignado el envío.

function mostrarChofer(envio) {
  if (!envio.chofer) {
    return "Todavía no hay un chofer asignado";
  }
  return {
    nombre: envio.chofer.nombre,
    vehiculo: envio.chofer.vehiculo,
    patente: envio.chofer.patente,
    calificacion: envio.chofer.calificacion,
  };
}

console.log(
  mostrarChofer({
    chofer: { nombre: "Carlos", vehiculo: "Moto", patente: "AB123CD", calificacion: 4.8 },
  })
);
