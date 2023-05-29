/*
 * Created on Sun May 28 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

let estadoLista = true;

/**
 * @param {Encriptador} encriptador
 */
function controlarTexto(encriptador, lambda) {
  if (encriptador.estaVacio()) alert("Necesitas escribir al menos una letra");
  else if (!encriptador.estaEnMinuscula())
    alert("El texto debe de estar en minúscula");
  else if (!encriptador.estaSinAcentos())
    alert("El texto debe de estar sin acentos");
  else if (!encriptador.estaSinCaracteresEspeciales())
    alert("El texto debe de estar sin caracteres especiales");
  else lambda();
}

function main(proceso) {
  const TEXTAREA = document.getElementById("text");
  const ENCRIPTADOR = new Encriptador(TEXTAREA.value);

  switch (proceso) {
    case 0:
      TEXTAREA.value = "";
      break;
    case 1:
      controlarTexto(ENCRIPTADOR, () => {
        const LISTA = document.getElementById("lista");

        if (estadoLista) {
          LISTA.removeChild(LISTA.children[0]);
          estadoLista = false;
        }

        let item = document.createElement("li");
        item.classList.add("font-orbitron");
        item.classList.add("item");
        item.onclick = copiarTexto;
        item.textContent = ENCRIPTADOR.encriptar();

        LISTA.appendChild(item);
      });
      break;
    case 2:
      controlarTexto(ENCRIPTADOR, () => {
        const LISTA = document.getElementById("lista");

        if (estadoLista) {
          LISTA.removeChild(LISTA.children[0]);
          estadoLista = false;
        }

        let item = document.createElement("li");
        item.classList.add("font-orbitron");
        item.classList.add("item");
        item.onclick = copiarTexto;
        item.textContent = ENCRIPTADOR.desencriptar();

        LISTA.appendChild(item);
      });
      break;
    default:
      console.error("disculpa flaco pero el proceso solicitado no existe");
      break;
  }
}
