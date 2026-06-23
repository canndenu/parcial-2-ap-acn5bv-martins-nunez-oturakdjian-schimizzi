// HU18 - Notificaciones visuales (Toast)
// Muestra mensajes breves de éxito, error o información.

function mostrarToast(tipo, mensaje) {
  const iconos = { exito: "OK", error: "X", info: "i" };
  return "[" + (iconos[tipo] || "") + "] " + mensaje;
}

console.log(mostrarToast("exito", "Envío confirmado"));
console.log(mostrarToast("error", "No se pudo procesar el pago"));
