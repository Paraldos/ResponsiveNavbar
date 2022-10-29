"use strict";

const MENUBTN = document.querySelector(".menu_btn");
const NAVBAR = document.querySelector(".navbar");
let nav_Menu = false;

MENUBTN.addEventListener("click", () => {
  if (nav_Menu) {
    NAVBAR.classList.remove("open");
  } else {
    NAVBAR.classList.add("open");
  }
  nav_Menu = !nav_Menu;
});
