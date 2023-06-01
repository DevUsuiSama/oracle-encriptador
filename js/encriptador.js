/*
 * Created on Sun May 28 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

class Encriptador {
  /**
   * @param {string} texto
   */
  constructor(texto) {
    this.texto = texto;
  }

  estaVacio() {
    // ?
    return this.texto === "";
  }

  estaEnMinuscula() {
    // ?
    return this.texto === this.texto.toLowerCase();
  }

  estaSinAcentos() {
    // ?
    return (
      this.texto === this.texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    );
  }

  estaSinCaracteresEspeciales() {
    // ?
    return this.texto === this.texto.replace(/[^\w\s]/gi, "");
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
