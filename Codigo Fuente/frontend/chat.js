// HU16 - Chat cliente <-> chofer (UI)
// Mensajería simple entre el cliente y el chofer durante el envío.

const mensajes = [];

function enviarMensaje(de, texto) {
  const msg = { de, texto, hora: new Date().toLocaleTimeString() };
  mensajes.push(msg);
  return msg;
}

enviarMensaje("cliente", "Hola, ¿en cuánto llegás?");
enviarMensaje("chofer", "En 10 minutos estoy ahí");

console.log(mensajes);
