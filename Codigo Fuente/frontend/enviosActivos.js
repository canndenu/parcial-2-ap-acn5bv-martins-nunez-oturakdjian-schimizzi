// HU08 - Consulta de envíos activos
// Muestra los envíos que todavía están en curso.

function listarEnviosActivos(envios) {
  return envios.filter(
    (e) => e.estado !== "Entregado" && e.estado !== "Cancelado"
  );
}

const envios = [
  { id: 1, estado: "En curso" },
  { id: 2, estado: "Entregado" },
  { id: 3, estado: "Pendiente" },
];

console.log(listarEnviosActivos(envios));
