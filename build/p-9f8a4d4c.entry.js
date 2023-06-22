import{r as i,c as t,h as e,H as n,g as a}from"./p-29cdcf48.js";import{a as s,f as o,b as r}from"./p-2752c00d.js";import{s as l,c,d as h,H as d}from"./p-9ba1cfed.js";import{u}from"./p-f53bba85.js";import{c as p,d as f,g as m}from"./p-98c2dbb2.js";import{a as b,s as v,c as g}from"./p-49bfd61d.js";import{c as x,d as y}from"./p-9d22fb54.js";import{c as k}from"./p-8725476e.js";import{C as w}from"./p-7865f4b5.js";import{u as z,c as I,d as D,s as C}from"./p-97b95874.js";import"./p-7d251f50.js";import"./p-7fc09c90.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const _={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper"};const j={action:"action"};const L="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const W=class{constructor(e){i(this,e);this.calciteInternalInputTextFocus=t(this,"calciteInternalInputTextFocus",7);this.calciteInternalInputTextBlur=t(this,"calciteInternalInputTextBlur",7);this.calciteInputTextInput=t(this,"calciteInputTextInput",7);this.calciteInputTextChange=t(this,"calciteInputTextChange",7);this.previousValueOrigin="initial";this.mutationObserver=k("mutation",(()=>this.setDisabledAction()));this.userChangedValue=false;this.keyDownHandler=i=>{if(this.readOnly||this.disabled){return}if(this.isClearable&&i.key==="Escape"){this.clearInputTextValue(i);i.preventDefault()}if(i.key==="Enter"&&!i.defaultPrevented){if(l(this)){i.preventDefault()}}};this.clearInputTextValue=i=>{this.setValue({committing:true,nativeEvent:i,origin:"user",value:""})};this.emitChangeIfUserModified=()=>{if(this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue){this.calciteInputTextChange.emit();this.setPreviousEmittedValue(this.value)}};this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value});this.emitChangeIfUserModified()};this.clickHandler=i=>{if(this.disabled){return}const t=s(this.el,"action");if(i.target!==t){this.setFocus()}};this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})};this.inputTextInputHandler=i=>{if(this.disabled||this.readOnly){return}this.setValue({nativeEvent:i,origin:"user",value:i.target.value})};this.inputTextKeyDownHandler=i=>{if(this.disabled||this.readOnly){return}if(i.key==="Enter"){this.emitChangeIfUserModified()}};this.hiddenInputChangeHandler=i=>{if(i.target.name===this.name){this.setValue({value:i.target.value,origin:"direct"})}i.stopPropagation()};this.setChildElRef=i=>{this.childEl=i};this.setInputValue=i=>{if(!this.childEl){return}this.childEl.value=i};this.setPreviousEmittedValue=i=>{this.previousEmittedValue=i};this.setPreviousValue=i=>{this.previousValue=i};this.setValue=({committing:i=false,nativeEvent:t,origin:e,previousValue:n,value:a})=>{this.setPreviousValue(n!==null&&n!==void 0?n:this.value);this.previousValueOrigin=e;this.userChangedValue=e==="user"&&a!==this.value;this.value=a;if(e==="direct"){this.setInputValue(a);this.setPreviousEmittedValue(a)}if(t){const t=this.calciteInputTextInput.emit();if(t.defaultPrevented){this.value=this.previousValue}else if(i){this.emitChangeIfUserModified()}}};this.alignment="start";this.autofocus=false;this.clearable=false;this.disabled=false;this.form=undefined;this.hidden=false;this.icon=undefined;this.iconFlipRtl=false;this.label=undefined;this.loading=false;this.maxLength=undefined;this.minLength=undefined;this.name=undefined;this.placeholder=undefined;this.prefixText=undefined;this.readOnly=false;this.required=false;this.scale="m";this.status="idle";this.autocomplete=undefined;this.inputMode="text";this.enterKeyHint=undefined;this.pattern=undefined;this.suffixText=undefined;this.editingEnabled=false;this.value="";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined;this.slottedActionElDisabledInternally=false}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(i,t){if(!this.userChangedValue){this.setValue({origin:"direct",previousValue:t,value:!i?"":i})}this.userChangedValue=false}updateRequestedIcon(){this.requestedIcon=o({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){z(this,this.effectiveLocale)}connectedCallback(){var i;x(this);I(this);this.inlineEditableEl=this.el.closest("calcite-inline-editable");if(this.inlineEditableEl){this.editingEnabled=this.inlineEditableEl.editingEnabled||false}this.setPreviousEmittedValue(this.value);this.setPreviousValue(this.value);p(this);c(this);(i=this.mutationObserver)===null||i===void 0?void 0:i.observe(this.el,{childList:true});this.setDisabledAction();this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}disconnectedCallback(){var i;f(this);h(this);y(this);D(this);(i=this.mutationObserver)===null||i===void 0?void 0:i.disconnect();this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}async componentWillLoad(){b(this);this.requestedIcon=o({},this.icon,"text");await C(this)}componentDidLoad(){v(this)}componentDidRender(){u(this)}async setFocus(){var i;await g(this);(i=this.childEl)===null||i===void 0?void 0:i.focus()}async selectText(){var i;(i=this.childEl)===null||i===void 0?void 0:i.select()}onLabelClick(){this.setFocus()}onFormReset(){this.setValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(i){if(this.minLength!=null){i.minLength=this.minLength}if(this.maxLength!=null){i.maxLength=this.maxLength}}setDisabledAction(){const i=s(this.el,"action");if(!i){return}if(this.disabled){if(i.getAttribute("disabled")==null){this.slottedActionElDisabledInternally=true}i.setAttribute("disabled","")}else if(this.slottedActionElDisabledInternally){i.removeAttribute("disabled");this.slottedActionElDisabledInternally=false}}render(){const i=r(this.el);const t=e("div",{class:_.loader},e("calcite-progress",{label:this.messages.loading,type:"indeterminate"}));const a=e("button",{"aria-label":this.messages.clear,class:_.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"x",scale:this.scale==="l"?"m":"s"}));const s=e("calcite-icon",{class:_.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:this.scale==="l"?"m":"s"});const o=e("div",{class:_.prefix},this.prefixText);const l=e("div",{class:_.suffix},this.suffixText);const c=e("input",{"aria-label":m(this),autocomplete:this.autocomplete,autofocus:this.autofocus?true:null,class:{[_.editingEnabled]:this.editingEnabled,[_.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?true:null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,required:this.required?true:null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value,ref:this.setChildElRef});return e(n,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},e("div",{class:{[_.inputWrapper]:true,[w.rtl]:i==="rtl"}},this.prefixText?o:null,e("div",{class:_.wrapper},c,this.isClearable?a:null,this.requestedIcon?s:null,this.loading?t:null),e("div",{class:_.actionWrapper},e("slot",{name:j.action})),this.suffixText?l:null,e(d,{component:this})))}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};W.style=L;export{W as calcite_input_text};
//# sourceMappingURL=p-9f8a4d4c.entry.js.map