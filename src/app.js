/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarCarta() {
  const palos = ["spade", "club", "heart", "diamond"];
  const valores = [
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

  const carta = document.getElementById("carta");
  const paloAleatorio = palos[Math.floor(Math.random() * 4)];
  const valorAleatorio = valores[Math.floor(Math.random() * 13)];

  carta.className = "card";
  carta.classList.add(paloAleatorio);

  carta.innerHTML = `
    <div class="numero">${valorAleatorio}</div>
    <div class="palo-top-left">${getPaloSymbol(paloAleatorio)}</div>
    <div class="palo-bottom-right">${getPaloSymbol(paloAleatorio)}</div>
  `;

  if (paloAleatorio === "heart" || paloAleatorio === "diamond") {
    carta.style.color = "red";
  } else {
    carta.style.color = "black";
  }
}

function getPaloSymbol(palo) {
  switch (palo) {
    case "spade":
      return "♠";
    case "club":
      return "♣";
    case "heart":
      return "♥";
    case "diamond":
      return "♦";
    default:
      return "";
  }
}

window.onload = function() {
  generarCarta();
};

document.getElementById("carta").addEventListener("click", function() {
  generarCarta();
});
