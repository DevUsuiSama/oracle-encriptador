/*
 * Created on Sun Jul 09 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

let estadoLista = true;

/**
 * @param {HTMLAreaElement} textArea
 * @param {*} lambda 
 */
function agregarItem(textArea, lambda) {
  const ENCRIPTADOR = new Encriptador(textArea.value);
  const LISTA = document.getElementById("lista");

  validarTexto(ENCRIPTADOR, () => {
    if (estadoLista) {
      LISTA.removeChild(LISTA.children[0]);
      estadoLista = false;
    }

    let item = document.createElement("li");
    item.classList.add("font-orbitron");
    item.classList.add("item");
    item.onclick = copiarTexto;
    item.textContent = lambda(ENCRIPTADOR);

    LISTA.appendChild(item);
  });
}