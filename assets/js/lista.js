/*
 * Created on Tue Jul 25 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

import Encriptador from "./encriptador.js";
import Item from "./item.js";

export default class Lista {
  lista;
  encriptador;
  static estadoLista = true;

  /**
   * @param {HTMLUListElement} lista
   * @param {Encriptador} encriptador
   */
  constructor(lista, encriptador) {
    this.lista = lista;
    this.encriptador = encriptador;
  }

  /**
   * @param {(encriptador: Encriptador) => string} funcion 
   */
  agregar(funcion) {
    this.encriptador.validar(() => {
      if (Lista.estadoLista) {
        this.lista.removeChild(this.lista.children[0]);
        Lista.estadoLista = !Lista.estadoLista;
      }
      const ITEM = new Item("copiar texto", ["font-orbitron", "item"]);
      ITEM.setContenido(funcion(this.encriptador));
      ITEM.setFuncion(this.encriptador.copiar);
      this.lista.appendChild(ITEM.getElemento());
    });
  }
}
