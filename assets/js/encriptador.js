/*
 * Created on Sun May 28 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

import Texto from "./texto.js";

export default class Encriptador extends Texto {
  /**
   * @param {string} texto
   */
  constructor(texto) {
    super(texto);
  }

  encriptar() {
    this.texto = this.texto.replaceAll("e", "enter");
    this.texto = this.texto.replaceAll("i", "imes");
    this.texto = this.texto.replaceAll("a", "ai");
    this.texto = this.texto.replaceAll("o", "ober");
    this.texto = this.texto.replaceAll("u", "ufat");
    return this.texto;
  }

  desencriptar() {
    this.texto = this.texto.replaceAll("enter", "e");
    this.texto = this.texto.replaceAll("imes", "i");
    this.texto = this.texto.replaceAll("ai", "a");
    this.texto = this.texto.replaceAll("ober", "o");
    this.texto = this.texto.replaceAll("ufat", "u");
    return this.texto;
  }
}
