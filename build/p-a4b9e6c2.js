import{a as n}from"./p-29cdcf48.js";import{c as o}from"./p-40dcfbb9.js";import{g as s}from"./p-9d22fb54.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const t={};const r={};async function a(o){const c=s(o);if(t[c]){return t[c]}if(!r[c]){r[c]=fetch(n(`./assets/date-picker/nls/${c}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${c}" not found or invalid, falling back to english`);return a("en")}))}const f=await r[c];t[c]=f;return f}function c(n){return n.map(((n,s)=>o(n,s===1)))}export{a,c as g};
//# sourceMappingURL=p-a4b9e6c2.js.map