// HU05 - Cálculo dinámico del costo de entrega
// Esqueleto del servicio de tarifas: arma el precio en base a distancia,
// peso, tipo de vehículo y franja horaria, devolviendo el desglose.

const TARIFA_BASE = 800;
const PRECIO_POR_KM = 120;
const PRECIO_POR_KG = 90;

const RECARGO_VEHICULO = {
  moto: 1,
  auto: 1.4,
  camion: 2.2,
};

function calcularCosto({ distanciaKm, pesoKg, vehiculo, horaPico }) {
  const costoDistancia = distanciaKm * PRECIO_POR_KM;
  const costoPeso = pesoKg * PRECIO_POR_KG;
  const recargo = RECARGO_VEHICULO[vehiculo] || 1;

  let subtotal = (TARIFA_BASE + costoDistancia + costoPeso) * recargo;
  const recargoHoraPico = horaPico ? subtotal * 0.15 : 0;
  const total = subtotal + recargoHoraPico;

  return {
    base: TARIFA_BASE,
    costoDistancia,
    costoPeso,
    recargoVehiculo: recargo,
    recargoHoraPico,
    total: Math.round(total),
  };
}

console.log(
  calcularCosto({ distanciaKm: 12, pesoKg: 5, vehiculo: "auto", horaPico: true })
);

module.exports = { calcularCosto };
