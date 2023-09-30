/*
 * Created on Tue Jul 25 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

export default class Modo {
  body;
  button;
  static estado = true;

  /**
   * @param {HTMLElement} body - Cuerpo del documento
   * @param {HTMLButtonElement} button - Solicitado para cambiar el texto
   */
  constructor(body, button) {
    this.body = body;
    this.button = button;
  }

  light() {
    this.button.textContent = "Light";
    this.body.classList.remove("modo--dark");
    this.body.classList.add("modo--light");
    Modo.estado = !Modo.estado;
  }

  dark() {
    this.button.textContent = "Dark";
    this.body.classList.remove("modo--light");
    this.body.classList.add("modo--dark");
    Modo.estado = !Modo.estado;
  }

  alternar() {
    Modo.estado ? this.dark() : this.light();
  }
}
