/*
 * Created on Sun May 28 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

function main(proceso) {
  const TEXTAREA = document.getElementById("text");

  switch (proceso) {
    case 0:
      TEXTAREA.value = "";
      break;
    case 1:
      agregarItem(TEXTAREA, (encriptador) => {
        return encriptador.encriptar();
      });
      break;
    case 2:
      agregarItem(TEXTAREA, (encriptador) => {
        return encriptador.desencriptar();
      });
      break;
    default:
      console.error("Disculpe, pero el proceso solicitado no existe");
      break;
  }
}
