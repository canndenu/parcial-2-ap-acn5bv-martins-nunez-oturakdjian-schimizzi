// Ajustes de navegación entre pantallas
// Define el mapa de pantallas y valida los destinos.

const pantallas = [
  "Login", "Home", "SolicitudEnvio", "Pago",
  "Seguimiento", "Perfil", "Historial", "Chat",
];

function navegar(actual, destino) {
  if (!pantallas.includes(destino)) {
    return "Pantalla inexistente: " + destino;
  }
  return "Navegando de " + actual + " a " + destino;
}

console.log(navegar("Home", "SolicitudEnvio"));
console.log(navegar("Home", "PantallaQueNoExiste"));
