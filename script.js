"use strict";

setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minHand = document.querySelector("[data-min-hand]");
const secHand = document.querySelector("[data-sec-hand]");

function setClock() {
  const curDate = new Date();
  const secRatio = curDate.getSeconds() / 60;
  const minRatio = (secRatio + curDate.getMinutes()) / 60;
  const hourRatio = (minRatio + curDate.getHours()) / 12;
  setRotation(secHand, secRatio);
  setRotation(minHand, minRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(el, rotationRatio) {
  el.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
