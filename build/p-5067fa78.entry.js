import{r as t,h as e,f as i,g as a}from"./p-29cdcf48.js";import{c as n,d as o}from"./p-117dabce.js";import{b as l,i as s,s as r,a as c}from"./p-2752c00d.js";import{c as h,d}from"./p-9d22fb54.js";import{c as p}from"./p-6bf1dc23.js";import{c as m,s as u,d as x,u as f}from"./p-97b95874.js";import{C as v}from"./p-7865f4b5.js";import"./p-8725476e.js";import"./p-7d251f50.js";import"./p-7fc09c90.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const b={container:"container",content:"content",contentHeader:"content__header",contentBody:"content__body",contentFloat:"content--float",contentOverlay:"content--overlay",separator:"separator"};const y={actionBar:"action-bar",header:"header"};const w="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{pointer-events:none;position:relative;display:flex;flex:0 1 auto;align-items:stretch;z-index:var(--calcite-shell-panel-z-index, var(--calcite-app-z-index));--calcite-shell-panel-detached-max-height:unset;--calcite-shell-panel-max-height:unset;--calcite-shell-panel-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl.content--overlay{--calcite-shell-panel-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04)}:host([layout=vertical]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-app-z-index) + 1))}:host([layout=vertical][display-mode=overlay]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-app-z-index-header) + 1))}:host([layout=vertical][width-scale=s]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 12vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 300px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 150px)}:host([layout=vertical][width-scale=m]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 20vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 420px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 240px)}:host([layout=vertical][width-scale=l]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 45vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 680px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 340px)}:host([layout=horizontal][height-scale=s]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 20vh)\n  )}:host([layout=horizontal]) .content{--calcite-shell-panel-min-height-internal:var(--calcite-shell-panel-min-height, 5vh);--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 30vh)\n  )}:host([layout=horizontal][height-scale=l]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 40vh)\n  )}.container{pointer-events:none;box-sizing:border-box;display:flex;flex:1 1 auto;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}.container *{box-sizing:border-box}:host([layout=horizontal]) .container{flex-direction:column}:host(:hover) .separator:not(:hover):not(:focus),:host(:focus-within) .separator:not(:hover):not(:focus){opacity:1;background-color:var(--calcite-ui-border-3)}.separator{pointer-events:auto;position:absolute;display:flex;background-color:transparent;opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;cursor:col-resize;outline:none}.separator:hover{opacity:1;background-color:var(--calcite-ui-border-2)}.separator:focus{background-color:var(--calcite-ui-brand);opacity:1}:host([layout=vertical]) .separator{inset-block:0px;block-size:100%;inline-size:0.125rem;cursor:col-resize}:host([layout=horizontal][position=start]) .separator{inset-block-end:0px}:host([layout=horizontal][position=end]) .separator{inset-block-start:0px}:host([layout=horizontal]) .separator{inset-inline-end:0px;block-size:0.125rem;inline-size:100%;cursor:row-resize}:host([layout=vertical][position=start]) .separator{inset-inline-end:-2px}:host([layout=horizontal][position=start]) .separator{inset-block-end:-2px}:host([layout=vertical][position=end]) .separator{inset-inline-start:-2px}:host([layout=horizontal][position=end]) .separator{inset-block-start:-2px}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%;inline-size:100%;flex:1 1 auto;max-block-size:unset;max-inline-size:unset}::slotted(.calcite-match-height){display:flex;flex:1 1 auto;overflow:hidden}.content{pointer-events:auto;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:stretch;align-self:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), max-inline-size var(--calcite-animation-timing)}:host([layout=vertical]) .content{inline-size:var(--calcite-shell-panel-width-internal);max-inline-size:var(--calcite-shell-panel-max-width-internal);min-inline-size:var(--calcite-shell-panel-min-width-internal)}:host([layout=horizontal]) .content{block-size:var(--calcite-shell-panel-height-internal);max-block-size:var(--calcite-shell-panel-max-height-internal);min-block-size:var(--calcite-shell-panel-min-height-internal)}.content__header{display:flex;flex:0 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch}.content__body{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden}.content--overlay{position:absolute;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([layout=vertical]) .content--overlay{inset-block-start:0px;block-size:100%}:host([layout=horizontal]) .content--overlay{inset-inline-start:0px;inline-size:100%}:host([layout=vertical][position=start]) .content--overlay{inset-inline-start:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-start-internal)}:host([layout=vertical][position=end]) .content--overlay{inset-inline-end:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-end-internal)}:host([layout=horizontal][position=start]) .content--overlay{inset-block-start:100%;box-shadow:var(--calcite-shell-panel-shadow-block-start-internal)}:host([layout=horizontal][position=end]) .content--overlay{inset-block-end:100%;box-shadow:var(--calcite-shell-panel-shadow-block-end-internal)}.content--float{margin-inline:0.5rem;margin-block:0.5rem auto;block-size:auto;overflow:hidden;border-radius:0.25rem;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-block-size:var(--calcite-shell-panel-max-height-internal, calc(100% - 1rem))}.content--float ::slotted(calcite-panel),.content--float ::slotted(calcite-flow){max-block-size:unset}:host([layout=horizontal]) .content--float{margin-block:0.5rem}:host([position=start]) .content--float ::slotted(calcite-panel),:host([position=start]) .content--float ::slotted(calcite-flow),:host([position=end]) .content--float ::slotted(calcite-panel),:host([position=end]) .content--float ::slotted(calcite-flow){border-style:none}.content[hidden]{display:none}slot[name=action-bar]::slotted(calcite-action-bar),.content ::slotted(calcite-flow),.content ::slotted(calcite-panel:not([closed])){border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start]) .content ::slotted(calcite-flow),:host([position=start]) .content ::slotted(calcite-panel){border-inline-start:none}:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end]) .content ::slotted(calcite-flow),:host([position=end]) .content ::slotted(calcite-panel){border-inline-end:none}:host([layout=horizontal]) slot[name=action-bar]::slotted(calcite-action-bar){border-inline:0}:host([layout=horizontal][position=start]) .content ::slotted(calcite-flow),:host([layout=horizontal][position=start]) .content ::slotted(calcite-panel){border-inline:0;border-block-start:0}:host([layout=horizontal][position=end]) .content ::slotted(calcite-flow),:host([layout=horizontal][position=end]) .content ::slotted(calcite-panel){border-inline:0;border-block-end:0}";const g=class{constructor(e){t(this,e);this.initialContentWidth=null;this.initialContentHeight=null;this.initialClientX=null;this.initialClientY=null;this.contentWidthMax=null;this.contentWidthMin=null;this.contentHeightMax=null;this.contentHeightMin=null;this.step=1;this.stepMultiplier=10;this.actionBars=[];this.storeContentEl=t=>{this.contentEl=t};this.getKeyAdjustedSize=t=>{const{key:e}=t;const{el:i,step:a,stepMultiplier:n,layout:o,contentWidthMin:s,contentWidthMax:r,initialContentWidth:c,initialContentHeight:h,contentHeightMin:d,contentHeightMax:p,position:m}=this;const u=a*n;const x=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"];if(x.indexOf(e)>-1){t.preventDefault()}const f=l(i);const v=["ArrowLeft","ArrowRight"];const b=["ArrowDown","ArrowUp"];const y=f==="rtl"&&v.includes(e)?-1:1;const w=o==="horizontal"?m==="end"?e===b[1]||e===v[0]:e===b[0]||e===v[1]:e===b[1]||(m==="end"?e===v[0]:e===v[1]);if(w){const e=t.shiftKey?u:a;return o==="horizontal"?h+y*e:c+y*e}const g=o==="horizontal"?m==="end"?e===b[0]||e===v[0]:e===b[1]||e===v[1]:e===b[0]||(m==="end"?e===v[1]:e===v[0]);if(g){const e=t.shiftKey?u:a;return o==="horizontal"?h-y*e:c-y*e}if(e==="Home"&&o==="horizontal"&&typeof d==="number"){return d}if(e==="Home"&&o==="vertical"&&typeof s==="number"){return s}if(e==="End"&&o==="horizontal"&&typeof p==="number"){return p}if(e==="End"&&o==="vertical"&&typeof r==="number"){return r}if(e==="PageDown"){return o==="horizontal"?h-u:c-u}if(e==="PageUp"){return o==="horizontal"?h+u:c+u}return null};this.initialKeydownWidth=t=>{this.setInitialContentWidth();const e=this.getKeyAdjustedSize(t);if(typeof e==="number"){this.setContentWidth(e)}};this.initialKeydownHeight=t=>{this.setInitialContentHeight();const e=this.getKeyAdjustedSize(t);if(typeof e==="number"){this.setContentHeight(e)}};this.separatorKeyDown=t=>{this.layout==="horizontal"?this.initialKeydownHeight(t):this.initialKeydownWidth(t)};this.separatorPointerMove=t=>{t.preventDefault();const{el:e,layout:i,initialContentWidth:a,initialContentHeight:n,position:o,initialClientX:s,initialClientY:r}=this;const c=i==="horizontal"?t.clientY-r:t.clientX-s;const h=i==="vertical"&&l(e)==="rtl"?-1:1;const d=i==="horizontal"?o==="end"?-h*c:h*c:o==="end"?-h*c:h*c;i==="horizontal"?this.setContentHeight(n+d):this.setContentWidth(a+d)};this.separatorPointerUp=t=>{if(!s(t)){return}t.preventDefault();document.removeEventListener("pointerup",this.separatorPointerUp);document.removeEventListener("pointermove",this.separatorPointerMove)};this.setInitialContentHeight=()=>{var t;this.initialContentHeight=(t=this.contentEl)===null||t===void 0?void 0:t.getBoundingClientRect().height};this.setInitialContentWidth=()=>{var t;this.initialContentWidth=(t=this.contentEl)===null||t===void 0?void 0:t.getBoundingClientRect().width};this.separatorPointerDown=t=>{if(!s(t)){return}t.preventDefault();const{separatorEl:e}=this;e&&document.activeElement!==e&&e.focus();if(this.layout==="horizontal"){this.setInitialContentHeight();this.initialClientY=t.clientY}else{this.setInitialContentWidth();this.initialClientX=t.clientX}document.addEventListener("pointerup",this.separatorPointerUp);document.addEventListener("pointermove",this.separatorPointerMove)};this.connectSeparator=t=>{this.disconnectSeparator();this.separatorEl=t;t===null||t===void 0?void 0:t.addEventListener("pointerdown",this.separatorPointerDown)};this.disconnectSeparator=()=>{var t;(t=this.separatorEl)===null||t===void 0?void 0:t.removeEventListener("pointerdown",this.separatorPointerDown)};this.setActionBarsLayout=t=>{t.forEach((t=>t.layout=this.layout))};this.handleActionBarSlotChange=t=>{const e=r(t).filter((t=>t===null||t===void 0?void 0:t.matches("calcite-action-bar")));this.actionBars=e;this.setActionBarsLayout(e)};this.collapsed=false;this.detached=false;this.displayMode="dock";this.detachedHeightScale=undefined;this.heightScale=undefined;this.widthScale="m";this.layout="vertical";this.position="start";this.resizable=false;this.messages=undefined;this.messageOverrides=undefined;this.contentWidth=null;this.contentHeight=null;this.defaultMessages=undefined;this.effectiveLocale=""}handleDetached(t){if(t){this.displayMode="float"}else if(this.displayMode==="float"){this.displayMode="dock"}}handleDisplayMode(t){this.detached=t==="float"}handleDetachedHeightScale(t){this.heightScale=t}handleHeightScale(t){this.detachedHeightScale=t}layoutHandler(){this.setActionBarsLayout(this.actionBars)}onMessagesChange(){}connectedCallback(){n(this);h(this);m(this)}async componentWillLoad(){await u(this)}disconnectedCallback(){o(this);this.disconnectSeparator();d(this);x(this)}componentDidLoad(){this.updateAriaValues()}effectiveLocaleChange(){f(this,this.effectiveLocale)}renderHeader(){const{el:t}=this;const i=c(t,y.header);return i?e("div",{class:b.contentHeader,key:"header"},e("slot",{name:y.header})):null}render(){const{collapsed:t,position:i,initialContentWidth:a,initialContentHeight:n,contentWidth:o,contentWidthMax:s,contentWidthMin:r,contentHeight:c,contentHeightMax:h,contentHeightMin:d,resizable:p,layout:m,displayMode:u}=this;const x=l(this.el);const f=u!=="float"&&p;const w=f?m==="horizontal"?c?{height:`${c}px`}:null:o?{width:`${o}px`}:null:null;const g=!t&&f?e("div",{"aria-label":this.messages.resize,"aria-orientation":m==="horizontal"?"vertical":"horizontal","aria-valuemax":m=="horizontal"?h:s,"aria-valuemin":m=="horizontal"?d:r,"aria-valuenow":m=="horizontal"?c!==null&&c!==void 0?c:n:o!==null&&o!==void 0?o:a,class:b.separator,key:"separator",onKeyDown:this.separatorKeyDown,role:"separator",tabIndex:0,"touch-action":"none",ref:this.connectSeparator}):null;const z=()=>{if(m==="horizontal"){return i==="start"?v.calciteAnimateInDown:v.calciteAnimateInUp}else{const t=x==="ltr"&&i==="end"||x==="rtl"&&i==="start";return t?v.calciteAnimateInLeft:v.calciteAnimateInRight}};const k=e("div",{class:{[v.rtl]:x==="rtl",[b.content]:true,[b.contentOverlay]:u==="overlay",[b.contentFloat]:u==="float",[v.calciteAnimate]:u==="overlay",[z()]:u==="overlay"},hidden:t,key:"content",style:w,ref:this.storeContentEl},this.renderHeader(),e("div",{class:b.contentBody},e("slot",null)),g);const H=e("slot",{key:"action-bar",name:y.actionBar,onSlotchange:this.handleActionBarSlotChange});const D=[H,k];if(i==="end"){D.reverse()}return e("div",{class:{[b.container]:true}},D)}setContentWidth(t){const{contentWidthMax:e,contentWidthMin:i}=this;const a=Math.round(t);this.contentWidth=typeof e==="number"&&typeof i==="number"?p(a,i,e):a}updateAriaValues(){const{contentEl:t}=this;const e=t&&getComputedStyle(t);if(!e){return}this.layout==="horizontal"?this.updateHeights(e):this.updateWidths(e);i(this)}setContentHeight(t){const{contentHeightMax:e,contentHeightMin:i}=this;const a=Math.round(t);this.contentHeight=typeof e==="number"&&typeof i==="number"?p(a,i,e):a}updateWidths(t){const e=parseInt(t.getPropertyValue("max-width"),10);const i=parseInt(t.getPropertyValue("min-width"),10);const a=parseInt(t.getPropertyValue("width"),10);if(typeof a==="number"&&!isNaN(a)){this.initialContentWidth=a}if(typeof e==="number"&&!isNaN(e)){this.contentWidthMax=e}if(typeof i==="number"&&!isNaN(i)){this.contentWidthMin=i}}updateHeights(t){const e=parseInt(t.getPropertyValue("max-height"),10);const i=parseInt(t.getPropertyValue("min-height"),10);const a=parseInt(t.getPropertyValue("height"),10);if(typeof a==="number"&&!isNaN(a)){this.initialContentHeight=a}if(typeof e==="number"&&!isNaN(e)){this.contentHeightMax=e}if(typeof i==="number"&&!isNaN(i)){this.contentHeightMin=i}}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{detached:["handleDetached"],displayMode:["handleDisplayMode"],detachedHeightScale:["handleDetachedHeightScale"],heightScale:["handleHeightScale"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};g.style=w;export{g as calcite_shell_panel};
//# sourceMappingURL=p-5067fa78.entry.js.map