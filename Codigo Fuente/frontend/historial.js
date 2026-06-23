// HU15 - Historial de envíos
// Lista los envíos de un usuario ordenados del más reciente al más antiguo.

function obtenerHistorial(envios, usuarioId) {
  return envios
    .filter((e) => e.usuarioId === usuarioId)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

const envios = [
  { id: 1, usuarioId: 7, estado: "Entregado", fecha: "2026-06-01" },
  { id: 2, usuarioId: 7, estado: "Cancelado", fecha: "2026-06-10" },
];

console.log(obtenerHistorial(envios, 7));
