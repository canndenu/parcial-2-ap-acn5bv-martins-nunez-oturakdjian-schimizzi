function crearEnvio(origen, destino, paquete) {
  return {
    origen: origen,
    destino: destino,
    paquete: paquete,
    estado: "Pendiente",
    codigoSeguimiento: "LOGI-001"
  };
}

console.log(crearEnvio("CABA", "Avellaneda", "Caja mediana"));
