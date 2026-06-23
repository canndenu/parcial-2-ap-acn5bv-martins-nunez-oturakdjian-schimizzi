// HU14 - Seguimiento en tiempo real sobre el mapa
// Actualiza la posición del envío y calcula el tiempo estimado.

function actualizarUbicacion(envio, lat, lng) {
  return {
    ...envio,
    ubicacionActual: { lat, lng },
    actualizado: new Date().toISOString(),
  };
}

function tiempoEstimado(distanciaKm, velocidadKmh) {
  return Math.round((distanciaKm / velocidadKmh) * 60) + " min";
}

console.log(actualizarUbicacion({ id: 1 }, -34.6037, -58.3816));
console.log(tiempoEstimado(12, 30));
