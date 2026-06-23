// HU06 - Pago con Mercado Pago
// Stub de la ruta de pago: genera la preferencia de pago y recibe el webhook
// que confirma el resultado. El estado del envío se actualiza por el webhook,
// no desde el front.

function crearPreferenciaPago(envio) {
  return {
    idPreferencia: "PREF-" + envio.id,
    monto: envio.total,
    descripcion: "Envío Logitrack " + envio.codigoSeguimiento,
    urlPago: "https://mp.com/checkout/PREF-" + envio.id,
  };
}

// Webhook de Mercado Pago: confirma o rechaza el pago.
function procesarWebhook(notificacion) {
  if (notificacion.estado === "approved") {
    return { envio: notificacion.idEnvio, nuevoEstado: "Confirmado" };
  }
  return { envio: notificacion.idEnvio, nuevoEstado: "Pago rechazado" };
}

console.log(crearPreferenciaPago({ id: 1, total: 4200, codigoSeguimiento: "LOGI-001" }));
console.log(procesarWebhook({ idEnvio: 1, estado: "approved" }));

module.exports = { crearPreferenciaPago, procesarWebhook };
