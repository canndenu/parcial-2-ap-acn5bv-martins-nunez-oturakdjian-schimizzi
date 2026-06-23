// HU22 - Verificación y aprobación de conductor / vehículo
// Valida la identidad del chofer leyendo los datos del DNI y comparando
// la cara del documento con una selfie. Solo operan choferes habilitados.

function parsearDni(codigoPdf417) {
  const partes = codigoPdf417.split("@");
  return {
    apellido: partes[1] || null,
    nombre: partes[2] || null,
    dni: partes[4] || null,
  };
}

function compararRostros(fotoDni, selfie) {
  // Simulación: en producción se calcula la distancia entre embeddings faciales.
  const similitud = fotoDni && selfie ? 0.92 : 0;
  return { similitud, coincide: similitud >= 0.8 };
}

function verificarChofer({ codigoPdf417, fotoDni, selfie, licencia }) {
  const datos = parsearDni(codigoPdf417);
  const rostro = compararRostros(fotoDni, selfie);
  const aprobado = Boolean(datos.dni && licencia && rostro.coincide);

  return {
    datos,
    rostro,
    estado: aprobado ? "Aprobado" : "Rechazado",
  };
}

console.log(
  verificarChofer({
    codigoPdf417: "00@PEREZ@JUAN@M@30123456@A",
    fotoDni: "foto.jpg",
    selfie: "selfie.jpg",
    licencia: "B1-2031",
  })
);

module.exports = { parsearDni, compararRostros, verificarChofer };
