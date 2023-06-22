/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function e(){const{disabled:e}=this;if(!e){HTMLElement.prototype.click.call(this)}}function n(e){e.preventDefault()}const t=["mousedown","mouseup","click"];function i(e){const{disabled:n}=e.target;if(n){e.stopImmediatePropagation();e.preventDefault()}}const o={capture:true};function s(s,d=false){if(s.disabled){s.el.setAttribute("tabindex","-1");s.el.setAttribute("aria-disabled","true");if(s.el.contains(document.activeElement)){document.activeElement.blur()}s.el.click=e;s.el.addEventListener("pointerdown",n,o);t.forEach((e=>s.el.addEventListener(e,i,o)));return}s.el.click=HTMLElement.prototype.click;s.el.removeEventListener("pointerdown",n,o);t.forEach((e=>s.el.removeEventListener(e,i,o)));if(typeof d==="function"){s.el.setAttribute("tabindex",d.call(s)?"0":"-1")}else if(d===true){s.el.setAttribute("tabindex","0")}else if(d===false){s.el.removeAttribute("tabindex")}else;s.el.removeAttribute("aria-disabled")}export{s as u};
//# sourceMappingURL=p-f53bba85.js.map