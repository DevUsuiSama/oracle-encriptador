/*
 * Created on Wed Jul 26 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

export default class Item {
  titulo;
  clases;
  li;

  /**
   *
   * @param {string} titulo
   * @param {Array<string>} clases - Hace referencia a la clases definidas en el archivo .css
   */
  constructor(titulo, clases) {
    this.li = document.createElement("li");
    this.li.title = titulo;
    clases.forEach((value) => {
      this.li.classList.add(value);
    });
  }

  /**
   * @param {string} contenido
   */
  setContenido(contenido) {
    this.li.textContent = contenido;
  }

  /**
   * @param {(this: GlobalEventHandlers, ev: MouseEvent) => any} funcion
   */
  setFuncion(funcion) {
    this.li.onclick = funcion;
  }

  getElemento() {
    return this.li;
  }
}
