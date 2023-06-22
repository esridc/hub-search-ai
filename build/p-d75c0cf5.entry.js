import{r as t,c as i,h as a,g as e}from"./p-29cdcf48.js";import{u as s}from"./p-f53bba85.js";import{a as n,s as o,c as r}from"./p-49bfd61d.js";import{c,d as l}from"./p-9d22fb54.js";import{c as h}from"./p-8725476e.js";import{u as d,c as m,s as f,d as p}from"./p-97b95874.js";import{q as u,m as g,d as b,a as v,s as w,h as y,b as x,g as k,k as j,t as L,i as D,c as _,f as I,e as C,n as z,r as A,j as F,l as H,o as U,p as S,L as $}from"./p-ceb8defd.js";import{d as B,c as M,o as O,a as R}from"./p-a214ca94.js";import{j as q}from"./p-2752c00d.js";import"./p-7fc09c90.js";import"./p-d64c81c2.js";import"./p-35b7bd93.js";import"./p-58421494.js";import"./p-1bb094fc.js";import"./p-7d251f50.js";import"./p-7865f4b5.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const E={container:"container",handle:"handle"};var T;(function(t){t["grip"]="grip"})(T||(T={}));
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */function V(t,i,a){const{items:e,messages:s}=a;const n=e.length;const o=u(a,t)+1;const r=i==="idle"?s.dragHandleIdle:i==="active"?s.dragHandleActive:i==="change"?s.dragHandleChange:s.dragHandleCommit;return P(r,t.label,o,n)}function K(t){const i=t.composedPath().find((t=>t.dataset?.jsHandle!==undefined));const a=t.composedPath().find((t=>t.tagName?.toLowerCase()==="calcite-value-list-item"));return{handle:i,item:a}}function P(t,i,a,e){const s=t.replace("${position}",a.toString());const n=s.replace("${itemLabel}",i);return n.replace("${total}",e.toString())}const W="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index-sticky)}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";const G=class{constructor(a){t(this,a);this.calciteListChange=i(this,"calciteListChange",6);this.calciteListOrderChange=i(this,"calciteListOrderChange",6);this.calciteListFilter=i(this,"calciteListFilter",6);this.lastSelectedItem=null;this.mutationObserver=h("mutation",g.bind(this));this.setFilterEl=t=>{this.filterEl=t};this.setFilteredItems=t=>{this.filteredItems=t};this.deselectRemovedItems=b.bind(this);this.deselectSiblingItems=v.bind(this);this.selectSiblings=w.bind(this);this.handleFilter=y.bind(this);this.handleFilterEvent=x.bind(this);this.getItemData=k.bind(this);this.keyDownHandler=t=>{if(t.defaultPrevented){return}const{handle:i,item:a}=K(t);if(i&&!a.handleActivated&&t.key===" "){this.updateScreenReaderText(V(a,"commit",this))}if(!i||!a.handleActivated){j.call(this,t);return}t.preventDefault();const{items:e}=this;if(t.key===" "){this.updateScreenReaderText(V(a,"active",this))}if(t.key!=="ArrowUp"&&t.key!=="ArrowDown"||e.length<=1){return}const{el:s}=this;const n=L(this,a,t.key==="ArrowUp"?"up":"down");if(n===e.length-1){s.appendChild(a)}else{const t=s.children[n];const i=t===a.nextElementSibling?t.nextElementSibling:t;s.insertBefore(a,i)}this.items=this.getItems();this.calciteListOrderChange.emit(this.items.map((({value:t})=>t)));requestAnimationFrame((()=>q(i)));a.handleActivated=true;this.updateHandleAriaLabel(i,V(a,"change",this))};this.storeAssistiveEl=t=>{this.assistiveTextEl=t};this.handleFocusIn=t=>{const{handle:i,item:a}=K(t);if(!(a===null||a===void 0?void 0:a.handleActivated)&&a&&i){this.updateHandleAriaLabel(i,V(a,"idle",this))}};this.disabled=false;this.dragEnabled=false;this.filteredItems=[];this.filteredData=[];this.filterEnabled=false;this.filterPlaceholder=undefined;this.filterText=undefined;this.group=undefined;this.loading=false;this.multiple=false;this.selectionFollowsFocus=false;this.messageOverrides=undefined;this.messages=undefined;this.dataForFilter=[];this.defaultMessages=undefined;this.effectiveLocale="";this.selectedValues=new Map}onMessagesChange(){}effectiveLocaleChange(){d(this,this.effectiveLocale)}connectedCallback(){c(this);m(this);D.call(this);_.call(this);this.setUpSorting()}async componentWillLoad(){n(this);await f(this)}componentDidLoad(){o(this);I.call(this)}componentDidRender(){s(this)}disconnectedCallback(){B(this);l(this);p(this);C.call(this)}calciteListFocusOutHandler(t){z.call(this,t)}calciteListItemRemoveHandler(t){A.call(this,t)}calciteListItemChangeHandler(t){F.call(this,t)}calciteInternalListItemPropsChangeHandler(t){t.stopPropagation();this.setUpFilter()}calciteInternalListItemValueChangeHandler(t){H.call(this,t);t.stopPropagation()}getItems(){return Array.from(this.el.querySelectorAll("calcite-value-list-item"))}setUpItems(){U.call(this,"calcite-value-list-item");this.setUpSorting()}setUpFilter(){if(this.filterEnabled){this.dataForFilter=this.getItemData()}}setUpSorting(){const{dragEnabled:t,group:i}=this;if(!t){return}M(this,{dataIdAttr:"id",group:i,handle:`.${E.handle}`,draggable:"calcite-value-list-item",onStart:()=>{C.call(this);O(this)},onEnd:()=>{R(this);_.call(this)},onUpdate:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map((t=>t.value));this.calciteListOrderChange.emit(t)}})}handleBlur(){if(this.dragEnabled){this.updateScreenReaderText("")}}async getSelectedItems(){return this.selectedValues}async setFocus(t){await r(this);return S.call(this,t)}getIconType(){let t=null;if(this.dragEnabled){t=T.grip}return t}updateScreenReaderText(t){this.assistiveTextEl.textContent=t}updateHandleAriaLabel(t,i){t.ariaLabel=i}handleValueListItemBlur(t){const{item:i,handle:a}=t.detail;if(!(i===null||i===void 0?void 0:i.handleActivated)&&i){this.updateHandleAriaLabel(a,V(i,"idle",this))}t.stopPropagation()}render(){return a($,{onBlur:this.handleBlur,onFocusin:this.handleFocusIn,onKeyDown:this.keyDownHandler,props:this})}static get assetsDirs(){return["assets"]}get el(){return e(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};G.style=W;export{G as calcite_value_list};
//# sourceMappingURL=p-d75c0cf5.entry.js.map