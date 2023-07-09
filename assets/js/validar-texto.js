/*
 * Created on Sun Jul 09 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

/**
 * @param {Encriptador} encriptador
 * @param {*} lambda
 */
function validarTexto(encriptador, lambda) {
  if (encriptador.estaVacio()) alert("Necesitas escribir al menos una letra");
  else if (!encriptador.estaEnMinuscula())
    alert("El texto debe de estar en minúscula");
  else if (!encriptador.estaSinAcentos())
    alert("El texto debe de estar sin acentos");
  else if (!encriptador.estaSinCaracteresEspeciales())
    alert("El texto debe de estar sin caracteres especiales");
  else lambda();
}