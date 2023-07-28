/*
 * Created on Tue Jul 25 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

export default class Texto {
  texto;

  /**
   * @param {string} texto
   */
  constructor(texto) {
    this.texto = texto;
  }

  /**
   * A modo de pregunta, ¿esta vació?
   * @returns {boolean}
   */
  estaVacio() {
    return this.texto === "";
  }

  /**
   * A modo de pregunta, ¿esta en minúscula?
   * @returns {boolean}
   */
  estaEnMinuscula() {
    return this.texto === this.texto.toLowerCase();
  }

  /**
   * A modo de pregunta, ¿esta sin acentos?
   * @returns {boolean}
   */
  estaSinAcentos() {
    return (
      this.texto === this.texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    );
  }

  /**
   * A modo de pregunta, ¿esta sin caracteres especiales?
   * @returns {boolean}
   */
  estaSinCaracteresEspeciales() {
    return this.texto === this.texto.replace(/[^\w\s]/gi, "");
  }

  /**
   * @param {Event} event
   */
  copiar(event) {
    navigator.clipboard.writeText(event.target.outerText).then(() => {
      alert("Texto copiado");
    });
  }

  /**
   * Si el texto pasa las validaciones, se ejecuta la función que se paso por parámetros.
   * @param {() => void} funcion
   */
  validar(funcion) {
    this.estaVacio()
      ? alert("Necesitas escribir al menos una letra")
      : !this.estaEnMinuscula() ||
        !this.estaSinAcentos() ||
        !this.estaSinCaracteresEspeciales()
      ? alert(
          "El texto debe de estar en minúscula, sin acentos y sin caracteres especiales"
        )
      : funcion();
  }
}
