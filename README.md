# Encriptador

## Descripción

Este proyecto fue desarrollado durante el curso de Alura, la cual trata de una sencilla pagina que encripta y desencripta los textos introducidos por el usuario.

## [Novedad]
Para este nuevo lanzamiento, se aplico la metodología BEM en el css.

## Previsualización

![alt](assets/img/Capture-Encriptador-Desencriptador.png)

## Modos

#### CSS
Estas clases por el momento solo hace uso de colores monocromáticos.
```css
.modo--light {
  --color-foreground: #2b2c2c;
  --color-background: #fbfbfc;
}

.modo--dark {
  --color-foreground: #fbfbfc;
  --color-background: #2b2c2c;
}
```

Clase responsable de realizar el cambio de modo.
#### JS
```js
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
```

## Copiar Texto

Para copiar el texto resultantes del proceso de encriptado, solamente hay que darle un click al elemento que desee copiar.

## Insignia [Alura Challenges]

![alt](assets/img/cms_files_10224_1671210503Prancheta_3.png)

## Construido con 🛠️

* HTML5
* CSS3
* JavaScript

## Autor ✒️
* **Usui, José Fernando** - *Diseño y Desarrollo de la Pagina*

## Contacto 📱
* Gmail: _joesesilvae@gmail.com_
