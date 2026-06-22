function login(email, password) {
  if (!email || !password) {
    return "Debe completar email y contraseña";
  }

  return "Inicio de sesión exitoso";
}
function validarUsuario(){
   return true;
}
console.log(login("usuario@logitrack.com", "123456"));
