import{f as t}from"./p-29cdcf48.js";import{c as o}from"./p-8725476e.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const c=new Set;let n;const f={childList:true};function s(t){if(!n){n=o("mutation",r)}n.observe(t.el,f)}function i(t){c.delete(t.el);r(n.takeRecords());n.disconnect();for(const[t]of c.entries()){n.observe(t,f)}}function r(o){o.forEach((({target:o})=>{t(o)}))}export{s as c,i as d};
//# sourceMappingURL=p-117dabce.js.map