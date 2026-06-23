// HU10 - Asignación automática de transporte
// Decide el tipo de vehículo en base al peso, volumen y cantidad de bultos
// del paquete, sin intervención manual del cliente.

function elegirVehiculo({ pesoKg, volumenM3, bultos }) {
  if (pesoKg <= 5 && volumenM3 <= 0.05 && bultos <= 2) {
    return "moto";
  }
  if (pesoKg <= 50 && volumenM3 <= 1 && bultos <= 6) {
    return "auto";
  }
  return "camion";
}

function asignarTransporte(paquete) {
  const vehiculo = elegirVehiculo(paquete);
  return {
    vehiculoRecomendado: vehiculo,
    motivo: "Asignado automáticamente según peso, volumen y bultos",
  };
}

console.log(asignarTransporte({ pesoKg: 3, volumenM3: 0.02, bultos: 1 }));
console.log(asignarTransporte({ pesoKg: 120, volumenM3: 2, bultos: 10 }));

module.exports = { elegirVehiculo, asignarTransporte };
