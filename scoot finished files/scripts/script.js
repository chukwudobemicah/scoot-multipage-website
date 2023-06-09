"use strict";
const hamburgerContainer = document.querySelector(".hamburger-container");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

hamburgerContainer?.addEventListener("click", function () {
  if (nav.classList.contains("translate-left")) {
    nav.classList.remove("translate-left");
    nav.classList.add("translate-right");

  } else {
    nav.classList.remove("translate-right");
    nav.classList.add("translate-left");
  }
  hamburgerContainer.classList.toggle('black-bg');
  overlay.classList.toggle('hidden');
  body.classList.toggle("max-height-100vh");
});

overlay?.addEventListener('click', function(){
  hamburgerContainer.classList.remove('black-bg');
  overlay.classList.add('hidden');
  nav.classList.remove("translate-right");
    nav.classList.add("translate-left");
  body.classList.remove("max-height-100vh");
})

const chevrons = document.querySelectorAll(".chevron");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

// rotate chevrons
questions?.forEach(question => { question.addEventListener('click', function(){
 const chevron = question.querySelector('.chevron');
 chevron.classList.toggle('rotate-down')
 chevron.classList.toggle('rotate-up')
 const closestAnswer = question.nextElementSibling;
 closestAnswer.classList.toggle('hidden')
})})

// body.addEventListener('mouseover', function () {
// setTimeout(() => body.style.cursor = 'url(./styles/assets/images/cursor(1).png) 16 16 ,auto', 50)})

body.addEventListener('mouseover', function () {
  setTimeout(() => {
    body.style.cursor = 'url(./styles/assets/images/cursor.png) 8 8, auto'
  }, 100);
})

const hoverTapCursor = function (element) {
  element.forEach(el => {
    el.addEventListener('mouseover', function () {
      setTimeout(() => {
        el.style.cursor = 'url(./styles/assets/images/tap.png) 12 12, auto'
      }, 100);
    })
  })
}

const lists = document.querySelectorAll('li');
const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');

hoverTapCursor(lists);
hoverTapCursor(links);
hoverTapCursor(buttons);

