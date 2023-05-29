/*
 * Created on Sun May 28 2023
 *
 * Copyright (c) 2023 UsuiSama
 */

/**
 * @param {Event} event
 */
function copiarTexto(event) {
  navigator.clipboard.writeText(event.target.outerText).then(() => {
    alert("Texto copiado");
  });
}
