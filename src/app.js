/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  window.Generatecard = function() {
    // Funcion generador de cartas
    var simbolo = ["♥", "♠", "♣", "♦"];
    var numeros = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    // en este paso mezclamos los numeros y simbolos
    function randomCard() {
      let randomSimb = simbolo[Math.floor(Math.random() * simbolo.length)];
      let randomNumber = numeros[Math.floor(Math.random() * numeros.length)];
      // en este paso selecciono el documento html que quiero agregar un cambio con innerHTML
      //en este caso el icon devuelve un icono ramdon y el numerocentral un numero ramdon dentro del div
      document.querySelector(".icon").innerHTML = randomSimb;
      document.querySelector(".numerocentral").innerHTML = randomNumber;
      document.querySelector(".icon2").innerHTML = randomSimb;
      // creamos una condicion para definir que simbolos tendran sus colores
      if (randomSimb == "♥" || randomSimb == "♦") {
        document.querySelector("#card").style.color = "red";
        // si no cumple lo de arriba sera alguno de estos simbolos con el color negro
      } else if (randomSimb == "♠" || randomSimb == "♣") {
        document.querySelector("#card").style.color = "black";
      }
    }

    randomCard(); // llamamos a la funcion randomCard - linea 28
  };

  window.Generatecard(); // llamamos a la funcion de la linea 9
};
