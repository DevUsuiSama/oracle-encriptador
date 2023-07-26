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
    this.button.textContent = "Dark";
    this.body.setAttribute("style", "background-color: #b2b2b2");
    // HEADER
    this.body.children[0].setAttribute(
      "style",
      "background-color: white; box-shadow: 0 0 3px 0 black"
    );
    this.body.children[0].children[0].children[0].setAttribute(
      "style",
      "color: black; text-shadow: 2px 2px 3px black"
    );
    // MAIN
    this.body.children[1].setAttribute(
      "style",
      "background-color: white; box-shadow: 0 0 3px 0 black"
    );
    this.body.children[1].children[0].children[0].setAttribute(
      "style",
      "background-color: white; color: black"
    );
    // FOOTER
    this.body.children[3].setAttribute(
      "style",
      "background-color: white; box-shadow: 0 0 3px 0 black; color: black"
    );
    Modo.estado = !Modo.estado;
  }

  dark() {
    this.button.textContent = "Light";
    this.body.removeAttribute("style");
    // HEADER
    this.body.children[0].removeAttribute("style");
    this.body.children[0].children[0].children[0].removeAttribute("style");
    // MAIN
    this.body.children[1].removeAttribute("style");
    this.body.children[1].children[0].children[0].removeAttribute("style");
    // FOOTER
    this.body.children[3].removeAttribute("style");
    Modo.estado = !Modo.estado;
  }

  alternar() {
    Modo.estado ? this.light() : this.dark();
  }
}
