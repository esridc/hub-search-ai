import{r as t,h as a,H as i,g as n}from"./p-29cdcf48.js";import{c as e,a as o,s as c}from"./p-49bfd61d.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const r={textContainer:"text-container",fullName:"full-name",username:"username",button:"button"};const l="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-flex;outline:2px solid transparent;outline-offset:2px}:host .button{background-color:transparent;border:none;margin:0px;display:flex;cursor:pointer;align-items:center;justify-content:center;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size-0);line-height:1.25rem;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end:2px solid transparent}:host(:hover) .button,:host(:focus) .button{background-color:var(--calcite-ui-foreground-2)}:host(:focus) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:active) .button{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}calcite-avatar{padding-inline:1rem}calcite-avatar~.text-container{padding-inline-start:0px}:host([active]) .button{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1);--calcite-ui-icon-color:var(--calcite-ui-brand)}.text-container{margin-block-start:0.125rem;display:flex;flex-direction:column;padding-inline:1rem;text-align:start}.full-name{margin-inline-start:0px;font-size:var(--calcite-font-size-0);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.username{color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}";const s=class{constructor(a){t(this,a);this.active=undefined;this.fullName=undefined;this.label=undefined;this.textDisabled=false;this.thumbnail=undefined;this.userId=undefined;this.username=undefined}async setFocus(){await e(this);this.el.focus()}componentWillLoad(){o(this)}componentDidLoad(){c(this)}render(){return a(i,null,a("button",{"aria-label":this.label,class:r.button},a("calcite-avatar",{"full-name":this.fullName,label:this.label,thumbnail:this.thumbnail,"user-id":this.userId,username:this.username}),(this.fullName||this.username)&&!this.textDisabled&&a("div",{class:r.textContainer},this.fullName&&a("span",{class:r.fullName,key:r.fullName},this.fullName),this.username&&a("span",{class:r.username,key:r.username},this.username))))}static get delegatesFocus(){return true}get el(){return n(this)}};s.style=l;export{s as calcite_navigation_user};
//# sourceMappingURL=p-1bceb262.entry.js.map