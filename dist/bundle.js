(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var n,o,r,a,c,i,l;(function(e){var t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");function r(){var e=(new Date("9 sep 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),o=Math.floor(e/60/60);return o<10&&(o="0"+o),n<10&&(n="0"+n),t<10&&(t="0"+t),{hours:o,minutes:n,seconds:t,timeRemaining:e}}function a(){r().timeRemaining>0?(t.textContent=r().hours,n.textContent=r().minutes,o.textContent=r().seconds):(t.textContent="00",n.textContent="00",o.textContent="00")}a(),setInterval(a,1e3)})(),function(){var e=document.querySelector("menu");function t(){e.classList.toggle("active-menu")}document.querySelector(".menu").addEventListener("click",t),e.addEventListener("click",(function(e){var n=e.target;n.closest(".close-btn")&&t(),n.closest('a[href*="#"]')&&"#close"!==n.attributes.href.textContent&&t()})),document.addEventListener("click",(function(t){var n=t.target;n.closest(".active-menu")||n.closest(".menu")||e.classList.remove("active-menu")}))}(),a=document.querySelectorAll(".popup-btn"),c=document.querySelector(".popup"),i=document.querySelector(".popup-content"),l=-300,a.forEach((function(e){e.addEventListener("click",(function(){c.style.display="block",window.screen.width>768&&function e(){l+=7,i.style.top=l+"px",l<=100&&setTimeout(e,1)}()}))})),c.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?(c.style.display="none",l=-300,i.querySelectorAll("input").forEach((function(e){e.value="",e.classList.contains("error-input")&&e.classList.remove("error-input"),e.nextElementSibling&&e.nextElementSibling.remove()}))):(t=t.closest(".popup-content"))||(c.style.display="none",l=-300,i.querySelectorAll("input").forEach((function(e){e.value="",e.classList.contains("error-input")&&e.classList.remove("error-input"),e.nextElementSibling&&e.nextElementSibling.remove()})))})),document.querySelector("menu").querySelectorAll('a[href*="#"]').forEach((function(e){"#close"!==e.attributes.href.textContent&&e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))})),document.addEventListener("click",(function(e){var t=e.target;if("scrollImg"===t.id){e.preventDefault();var n=t.parentNode.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}})),n=document.querySelector(".service-header"),o=n.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab"),n.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&o.forEach((function(e,n){e===t&&function(e){for(var t=0;t<r.length;t++)e===t?(o[t].classList.add("active"),r[t].classList.remove("d-none")):(o[t].classList.remove("active"),r[t].classList.add("d-none"))}(n)}))})),function(){var e,t=document.querySelectorAll(".portfolio-item"),n=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots")),o=document.querySelector(".portfolio-content"),r=0;!function(){for(var e=0;e<t.length;e++){var o=document.createElement("li");o.classList.add("dot"),0===e&&o.classList.add("dot-active"),n.appendChild(o)}}();var a=document.querySelectorAll(".dot"),c=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)},l=function(){c(t,r,"portfolio-item-active"),c(a,r,"dot-active"),++r>=t.length&&(r=0),i(t,r,"portfolio-item-active"),i(a,r,"dot-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(l,t)};o.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(c(t,r,"portfolio-item-active"),c(a,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&a.forEach((function(e,t){e===n&&(r=t)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),i(t,r,"portfolio-item-active"),i(a,r,"dot-active"))})),o.addEventListener("mouseover",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(e)})),o.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u(1e3)})),u()}(),document.querySelectorAll(".command__photo").forEach((function(e,t){e.addEventListener("mouseenter",(function(){e.setAttribute("src",e.dataset.img)})),e.addEventListener("mouseleave",(function(){e.setAttribute("src","images/command/command-".concat(t+1,".jpg"))}))})),document.querySelectorAll("input.calc-item").forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/\D/g,"")}))})),document.querySelectorAll("form").forEach((function(e,t){e.addEventListener("input",(function(e){var n=e.target;n.id==="form".concat(t+1,"-name")&&(n.value=n.value.replace(/[\d\w^^\^~`!@#\$%^*_+\[\]{}\\:;?|>'\/<=&()№"]+$/gi,"")),n.id==="form".concat(t+1,"-message")&&(n.value=n.value.replace(/[a-z\^~`@#\$%^*_+\[\]{}\\|>'\/<=&()]+$/gi,"")),n.id==="form".concat(t+1,"-email")&&(n.value=n.value.replace(/[\а-яА-Я0-9^^\^`#\$%^+\[\]{}\\:;?|>\/<=&()№"]/g,"")),n.id==="form".concat(t+1,"-phone")&&(n.value=n.value.replace(/[а-яa-z^^\^~`!@#\$%^*_\[\]{}\\:;?|>'\/<=&№"]+$/gi,""))}))})),document.querySelectorAll("input").forEach((function(e){e.addEventListener("blur",(function(){if("user_name"===e.getAttribute("name")){if(!e.value)return;e.value=e.value.replace(/^\s+|\s+$/g,"");var t=e.value.split(" "),n="";t.length>1?(t.forEach((function(e,o){e=o<t.length?e[0].toUpperCase()+e.slice(1)+" ":e[0].toUpperCase()+e.slice(1),n+=e})),e.value=n):e.value=e.value[0].toUpperCase()+e.value.slice(1)}e.value=e.value.replace(/\s+/g," "),e.value=e.value.replace(/^\s+|\s+$/g,""),e.value.match(/^-+|-+$/)?(e.value=e.value.replace(/^-+|-+$/g,""),e.value.match(/^\s+|\s+$/)&&(e.value=e.value.replace(/^\s+|\s+$/g,""))):e.value=e.value.replace(/-+/g,"-")}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),c=document.getElementById("total"),i=function(){var t,i=0,l=1,u=1,s=0,d=n.options[n.selectedIndex].value,m=o.value;a.value>1&&(l+=(a.value-1)/10),r.value&&r.value<5?u*=2:r.value&&r.value<10&&(u*=1.5),d&&m&&(i=e*d*+m*l*u),0===d.length||0===m.length||"0"===m?(c.textContent=0,cancelAnimationFrame(t)):t=requestAnimationFrame((function e(){s<i&&(s+=Math.ceil(i/10),t=requestAnimationFrame(e),c.textContent=s,s>i&&(c.textContent=Math.floor(s-(s-i))))}))};t.addEventListener("change",(function(e){var t=e.target;(t.matches(".calc-type")||t.matches(".calc-square")||t.matches(".calc-day")||t.matches(".calc-count"))&&i()}))}(100),document.querySelectorAll("form").forEach((function(t){var n;t.querySelector(".btn").disabled=!0,(n=t.elements,function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){var n=document.createElement("div");n.classList.add("error"),e.insertAdjacentElement("afterend",n),e.addEventListener("change",(function(){var o=t.querySelector(".btn");"user_name"===e.getAttribute("name")&&(e.value?e.value.length<3||e.value.length>10?(e.classList.add("error-input"),n.textContent="Введите от 3 до 10 букв",o.disabled=!0):(e.classList.remove("error-input"),n.textContent="",o.disabled=!1):(e.classList.remove("error-input"),n.textContent="",o.disabled=!0)),"user_phone"===e.getAttribute("name")&&(e.value?"+7"!==e.value.slice(0,2)||e.value.length<12||e.value.length>12?(e.classList.add("error-input"),n.textContent="Номер должен быть в формате +7XXXXXXX",o.disabled=!0):(e.classList.remove("error-input"),n.textContent="",o.disabled=!1):(e.classList.remove("error-input"),n.textContent="",o.disabled=!0)),"user_email"===e.getAttribute("name")&&(e.value?/^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11}))$/.test(e.value)?(e.classList.remove("error-input"),n.textContent="",o.disabled=!1):(e.classList.add("error-input"),n.textContent="Email введен некорректно.",o.disabled=!0):(e.classList.remove("error-input"),n.textContent="",o.disabled=!0))}))}))})),function(){var e=document.querySelectorAll("form"),n=document.createElement("div");n.style.cssText="font-size: 2rem;",e.forEach((function(e){e.addEventListener("submit",(function(a){n.innerHTML="\n\t<div class='sk-double-bounce'>\n\t\t<div class='sk-child sk-double-bounce-1'></div>\n\t\t<div class='sk-child sk-double-bounce-2'></div>\n\t</div>\n\t\t\t\t",o(),e.querySelector(".btn").disabled=!0,a.preventDefault(),e.appendChild(n);var c,i=new FormData(e),l={};i.forEach((function(e,t){l[t]=e})),r(l).then((function(t){if(200!==t.status)throw new Error("status network not 200");"form3"===e.id&&setTimeout((function(){document.querySelector(".popup").style.display="none"}),3e3),n.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){n.textContent=""}),3e3)})).catch((function(t){n.textContent="Что-то пошло не так...","form3"===e.id&&setTimeout((function(){document.querySelector(".popup").style.display="none"}),3e3),setTimeout((function(){n.textContent=""}),3e3),console.error(t)})),(c=e,function(e){if(Array.isArray(e))return t(e)}(c)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){e.value=""}))})),"form3"===e.id&&(n.style.color="#fff")}));var o=function(){var e=document.createElement("style");e.textContent="\n.sk-double-bounce {\n  width: 50px;\n  height: 50px;\n  position: fixed;\n  margin: auto;  \n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%)\n  \n}\n.sk-child {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #19b5fe;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: sk-double-bounce 2s infinite ease-in-out;\n  }\n\n  .sk-double-bounce-2 {\n    animation-delay: -1s;\n  }\n@keyframes sk-double-bounce {\n  0%,\n  100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n\t\t",document.head.appendChild(e)},r=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}}()})();