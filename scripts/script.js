"use strict";var $=function(a){return document.querySelector(a)},toggleMenu=function(){var a=$(".js-menu-toggle-trigger"),b=$(".js-menu-toggle-target"),c=$("body"),d="is-visible";a.addEventListener("click",function(){this.classList.toggle(d),b.classList.toggle(d),c.classList.toggle("has-no-scrolling")})};toggleMenu();