/*! For license information please see app.js.LICENSE.txt */
!function(){var e={846:function(e,t,n){!function(){"use strict";var t=n(418),r=n(181),o={origin:"*",methods:"GET,HEAD,PUT,PATCH,POST,DELETE",preflightContinue:!1,optionsSuccessStatus:204};function i(e){return"string"==typeof e||e instanceof String}function s(e,t){if(Array.isArray(t)){for(var n=0;n<t.length;++n)if(s(e,t[n]))return!0;return!1}return i(t)?e===t:t instanceof RegExp?t.test(e):!!t}function c(e,t){var n,r=t.headers.origin,o=[];return e.origin&&"*"!==e.origin?i(e.origin)?(o.push([{key:"Access-Control-Allow-Origin",value:e.origin}]),o.push([{key:"Vary",value:"Origin"}])):(n=s(r,e.origin),o.push([{key:"Access-Control-Allow-Origin",value:!!n&&r}]),o.push([{key:"Vary",value:"Origin"}])):o.push([{key:"Access-Control-Allow-Origin",value:"*"}]),o}function l(e){return!0===e.credentials?{key:"Access-Control-Allow-Credentials",value:"true"}:null}function a(e){var t=e.exposedHeaders;return t?(t.join&&(t=t.join(",")),t&&t.length?{key:"Access-Control-Expose-Headers",value:t}:null):null}function u(e,t){for(var n=0,o=e.length;n<o;n++){var i=e[n];i&&(Array.isArray(i)?u(i,t):"Vary"===i.key&&i.value?r(t,i.value):i.value&&t.setHeader(i.key,i.value))}}e.exports=function(e){var n=null;return n="function"==typeof e?e:function(t,n){n(null,e)},function(e,r,i){n(e,(function(n,s){if(n)i(n);else{var p=t({},o,s),d=null;p.origin&&"function"==typeof p.origin?d=p.origin:p.origin&&(d=function(e,t){t(null,p.origin)}),d?d(e.headers.origin,(function(t,n){t||!n?i(t):(p.origin=n,function(e,t,n,r){var o=[];"OPTIONS"===(t.method&&t.method.toUpperCase&&t.method.toUpperCase())?(o.push(c(e,t)),o.push(l(e)),o.push(function(e){var t=e.methods;return t.join&&(t=e.methods.join(",")),{key:"Access-Control-Allow-Methods",value:t}}(e)),o.push(function(e,t){var n=e.allowedHeaders||e.headers,r=[];return n?n.join&&(n=n.join(",")):(n=t.headers["access-control-request-headers"],r.push([{key:"Vary",value:"Access-Control-Request-Headers"}])),n&&n.length&&r.push([{key:"Access-Control-Allow-Headers",value:n}]),r}(e,t)),o.push(function(e){var t=("number"==typeof e.maxAge||e.maxAge)&&e.maxAge.toString();return t&&t.length?{key:"Access-Control-Max-Age",value:t}:null}(e)),o.push(a(e)),u(o,n),e.preflightContinue?r():(n.statusCode=e.optionsSuccessStatus,n.setHeader("Content-Length","0"),n.end())):(o.push(c(e,t)),o.push(l(e)),o.push(a(e)),u(o,n),r())}(p,e,r,i))})):i()}}))}}}()},418:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var s,c,l=o(e),a=1;a<arguments.length;a++){for(var u in s=Object(arguments[a]))n.call(s,u)&&(l[u]=s[u]);if(t){c=t(s);for(var p=0;p<c.length;p++)r.call(s,c[p])&&(l[c[p]]=s[c[p]])}}return l}},181:function(e){"use strict";e.exports=function(e,t){if(!e||!e.getHeader||!e.setHeader)throw new TypeError("res argument is required");var r=e.getHeader("Vary")||"",o=Array.isArray(r)?r.join(", "):String(r);(r=n(o,t))&&e.setHeader("Vary",r)},e.exports.append=n;var t=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function n(e,n){if("string"!=typeof e)throw new TypeError("header argument is required");if(!n)throw new TypeError("field argument is required");for(var o=Array.isArray(n)?n:r(String(n)),i=0;i<o.length;i++)if(!t.test(o[i]))throw new TypeError("field argument contains an invalid header name");if("*"===e)return e;var s=e,c=r(e.toLowerCase());if(-1!==o.indexOf("*")||-1!==c.indexOf("*"))return"*";for(var l=0;l<o.length;l++){var a=o[l].toLowerCase();-1===c.indexOf(a)&&(c.push(a),s=s?s+", "+o[l]:o[l])}return s}function r(e){for(var t=0,n=[],r=0,o=0,i=e.length;o<i;o++)switch(e.charCodeAt(o)){case 32:r===t&&(r=t=o+1);break;case 44:n.push(e.substring(r,t)),r=t=o+1;break;default:t=o+1}return n.push(e.substring(r,t)),n}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}!function(){new Swiper(".swiper",{loop:!0,spaceBetween:10,slidesPerView:3}),new Swiper(".swiper2",{direction:"horosontal",loop:!0,spaceBetween:10,slidesPerView:4}),n(846),new Swiper(".swiper-container",{loop:!0,spaceBetween:10,slidesPerView:5,autoHeight:!0}),new Swiper(".swiper-card",{loop:!0,spaceBetween:60,slidesPerView:1,navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},autoHeight:!0}),new Swiper(".swiper__section7",{loop:!0,spaceBetween:32.75,slidesPerView:3,navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},autoHeight:!0}),new Swiper(".swiper__section8",{loop:!0,spaceBetween:32,slidesPerView:4,navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},autoHeight:!0}),new Swiper(".swiper__section9",{loop:!0,spaceBetween:32,slidesPerView:1,navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},autoHeight:!0});const e=document.querySelectorAll(".filter-button"),t=document.querySelectorAll(".location__card");e.forEach((e=>{e.addEventListener("click",(()=>{const n=e.getAttribute("data-filter");t.forEach((e=>{"all"===n||e.classList.contains(n)?e.style.display="block":e.style.display="none"}))}))})),function(){let e,t=document.querySelectorAll(".tabs-nav__item"),n=document.querySelectorAll(".tab");function r(){console.log(this),t.forEach((e=>{e.classList.remove("is-active")})),this.classList.add("is-active"),e=this.getAttribute("data-tab-name"),function(e){n.forEach((t=>{t.classList.contains(e)?t.classList.add("is-active"):t.classList.remove("is-active")}))}(e)}t.forEach((e=>{e.addEventListener("click",r)}))}();var r=document.getElementById("open-popup"),o=document.getElementById("close-popup"),i=document.querySelector(".popup-win"),s=document.querySelector(".popup__content");r&&r.addEventListener("click",(function(){i.style.zIndex="100",i.style.opacity="1",i.style.visibility="visible",s.style.opacity="1",s.style.transition="all 0.8s ease 0s",s.style.transform="perspective(600px) translate(0px, 0%) rotateX(0deg)",console.log("popupContent")})),o&&o.addEventListener("click",(function(){i.style.zIndex="-10",i.style.opacity="0",i.style.visibility="hidden",s.style.opacity="0",s.style.transition="all 0.8s ease 0s",s.style.transform="perspective(600px) translate(0px, -100%) rotateX(45deg)"}));var c=document.querySelectorAll(".open-popup-esc"),l=document.getElementById("close-popup-esc"),a=document.querySelector(".popup-esc");document.querySelector(".popup-content"),console.log(c),c&&c.forEach((e=>{e.addEventListener("click",(function(){a.classList.add("active"),console.log(a)}))})),l&&(l.addEventListener("click",(function(){a.classList.remove("active")})),console.log(c));var u=document.querySelectorAll(".kadr-enter"),p=document.querySelectorAll(".close-popup-enter"),d=document.querySelector(".popup-enter");document.querySelector(".popup-content"),console.log(u),u&&u.forEach((e=>{e.addEventListener("click",(function(){d.classList.add("active"),console.log(d)}))})),p&&p.forEach((e=>{e.addEventListener("click",(function(){d.classList.remove("active"),console.log(d)})),console.log(u)}));var f=document.querySelectorAll(".coment-button"),v=document.getElementById("close-popup-coment"),g=document.querySelector(".coment");document.querySelector(".popup-content"),console.log(f),f&&f.forEach((e=>{e.addEventListener("click",(function(){g.classList.add("active"),console.log(d)}))})),v&&(v.addEventListener("click",(function(){g.classList.remove("active")})),console.log(f));var y=document.querySelectorAll(".dont-memory"),h=document.getElementById("close-popup-enter-over"),m=document.querySelector(".popup-enter-over");document.querySelector(".popup-content"),console.log(y),y&&y.forEach((e=>{e.addEventListener("click",(function(){m.classList.add("active"),console.log(m)}))})),h&&(h.addEventListener("click",(function(){m.classList.remove("active")})),console.log(y));var w=document.querySelectorAll(".dont-warning"),E=document.getElementById("close-warning"),A=document.querySelector(".popup-enter-warning");document.querySelector(".popup-content"),console.log(w),w&&w.forEach((e=>{e.addEventListener("click",(function(){A.classList.add("active"),console.log(A)}))})),E&&(E.addEventListener("click",(function(){A.classList.remove("active")})),console.log(w))}()}();