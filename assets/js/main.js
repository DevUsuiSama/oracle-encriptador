/*
 * Created on Sun May 28 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

import Encriptador from "./encriptador.js";
import Lista from "./lista.js";
import Modo from "./modo.js";

function main() {
  const T_BUTTON = document.getElementById("modo");
  const T_DIV = document.getElementById("lista-botones");
  const T_UL = document.getElementById("lista-resultado");
  const T_TEXTAREA = document.getElementById("texto");
  const MODO = new Modo(document.body, T_BUTTON);

  T_BUTTON.addEventListener("click", () => {
    MODO.alternar();
  });

  T_DIV.children[0].addEventListener("click", () => {
    T_TEXTAREA.value = "";
  });

  T_DIV.children[1].addEventListener("click", () => {
    const LISTA = new Lista(
      T_UL,
      new Encriptador(T_TEXTAREA.value)
    );
    LISTA.agregar((encriptador) => {
      return encriptador.encriptar();
    });
  });

  T_DIV.children[2].addEventListener("click", () => {
    const LISTA = new Lista(
      T_UL,
      new Encriptador(T_TEXTAREA.value)
    );
    LISTA.agregar((encriptador) => {
      return encriptador.desencriptar();
    });
  });
}

main();
