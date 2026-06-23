// HU02 - Gestión de perfil de usuario
// Pantalla donde el usuario ve y edita sus datos.

function obtenerPerfil(usuario) {
  return {
    nombre: usuario.nombre,
    email: usuario.email,
    telefono: usuario.telefono,
  };
}

function guardarPerfil(datos) {
  if (!datos.nombre || !datos.email) {
    return "Faltan campos obligatorios";
  }
  return "Perfil actualizado correctamente";
}

console.log(
  guardarPerfil({ nombre: "Juan", email: "juan@logitrack.com", telefono: "1122334455" })
);
