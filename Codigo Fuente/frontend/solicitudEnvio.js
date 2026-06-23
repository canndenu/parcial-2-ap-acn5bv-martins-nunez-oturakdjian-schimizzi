// HU03 - Solicitud de envío
// Formulario con origen, destino y detalles del paquete.

function validarSolicitud(form) {
  const errores = [];
  if (!form.origen) errores.push("Falta el origen");
  if (!form.destino) errores.push("Falta el destino");
  if (!form.paquete) errores.push("Faltan los detalles del paquete");
  return errores.length ? errores : "Solicitud lista para cotizar";
}

console.log(
  validarSolicitud({ origen: "CABA", destino: "La Plata", paquete: { peso: 3 } })
);
