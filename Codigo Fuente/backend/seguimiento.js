// HU07 - Generación automática de código de seguimiento
// Al confirmarse el pago se genera un código único y su QR asociado para
// que el cliente pueda rastrear el envío.

function generarCodigoSeguimiento() {
  const fecha = new Date().getFullYear();
  const aleatorio = Math.floor(100000 + Math.random() * 900000);
  return "LOGI-" + fecha + "-" + aleatorio;
}

function generarQR(codigo) {
  return "https://api.logitrack.com/qr/" + codigo + ".png";
}

function asignarSeguimiento(envio) {
  const codigo = generarCodigoSeguimiento();
  return {
    ...envio,
    codigoSeguimiento: codigo,
    qr: generarQR(codigo),
  };
}

console.log(asignarSeguimiento({ origen: "CABA", destino: "Avellaneda" }));

module.exports = { generarCodigoSeguimiento, generarQR, asignarSeguimiento };
