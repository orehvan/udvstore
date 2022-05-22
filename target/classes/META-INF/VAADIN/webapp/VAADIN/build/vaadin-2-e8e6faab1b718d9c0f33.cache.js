(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,function(t,e,r){"use strict";r.d(e,"d",(function(){return s})),r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return i}));var n=r(3);r.d(e,"c",(function(){return n.c}));var o=r(68);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const i=[];function s(t,e,r={}){var o;t&&(o=t,u(customElements.get(o))&&console.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),e=function(t=[]){return[t].flat(1/0).filter(t=>t instanceof n.a||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,r):i.push({themeFor:t,styles:e,include:r.include,moduleId:r.moduleId})}function a(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():i}function l(t=""){let e=0;return 0===t.indexOf("lumo-")||0===t.indexOf("material-")?e=1:0===t.indexOf("vaadin-")&&(e=2),e}function c(t){const e=[];return t.include&&[].concat(t.include).forEach(t=>{const r=a().find(e=>e.moduleId===t);r?e.push(...c(r),...r.styles):console.warn(`Included moduleId ${t} not found in style registry`)},t.styles),e}function d(t){const e=t+"-default-theme",r=a().filter(r=>r.moduleId!==e&&function(t,e){return(t||"").split(" ").some(t=>new RegExp("^"+t.split("*").join(".*")+"$").test(e))}(r.themeFor,t)).map(t=>({...t,styles:[...c(t),...t.styles],includePriority:l(t.moduleId)})).sort((t,e)=>e.includePriority-t.includePriority);return r.length>0?r:a().filter(t=>t.moduleId===e)}function u(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}const h=t=>class extends(Object(o.a)(t)){static finalize(){super.finalize();const t=this.prototype._template;t&&!u(this)&&function(t,e){const r=document.createElement("style");r.innerHTML=t.map(t=>t.cssText).join("\n"),e.content.appendChild(r)}(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[t,...e]:e}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),e=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...d(this.is)];const r=this.__themes.flatMap(t=>t.styles);return r.filter((t,e)=>e===r.lastIndexOf(t))}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(67),o=r(29);r.d(e,"b",(function(){return o.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=Object(n.a)(HTMLElement)},function(t,e,r){"use strict";r(32);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r(7).c`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,o=document.createElement("template");o.innerHTML=`<style>${n.toString().replace(":host","html")}</style>`,document.head.appendChild(o.content)},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r(32);var n=r(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=n.c`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,i=document.createElement("template");i.innerHTML=`<style>${o.toString().replace(":host","html")}</style>`,document.head.appendChild(i.content);const s=n.c`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Object(n.d)("",s,{moduleId:"lumo-color"});const a=n.c`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;Object(n.d)("",[s,a],{moduleId:"lumo-color-legacy"})},function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var n=r(22);const o=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,i=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function s(t,e){if("function"!=typeof t)return;const r=o.exec(t.toString());if(r)try{t=new Function(r[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const a=function(t,e){if(window.Vaadin.developmentMode)return s(t,e)};function l(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(i?!function(){if(i){if(Object.keys(i).map(t=>i[t]).filter(t=>t.productionMode).length>0)return!0}return!1}():!s((function(){return!0})))}catch(t){return!1}}());var c=r(19),d=r(27),u=r(33);let h;
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(n.m)(!1),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){a(l)};const p=new Set,m=t=>class extends(Object(u.a)(t)){static get version(){return"23.0.7"}static finalize(){super.finalize();const{is:t}=this;t&&!p.has(t)&&(window.Vaadin.registrations.push(this),p.add(t),window.Vaadin.developmentModeCallback&&(h=d.a.debounce(h,c.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(d.b)(h)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},function(t,e,r){"use strict";r(32);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r(7).c`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,o=document.createElement("template");o.innerHTML=`<style>${n.toString().replace(":host","html")}</style>`,document.head.appendChild(o.content)},function(t,e,r){"use strict";r(32);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r(7).c`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,o=document.createElement("template");o.innerHTML=`<style>${n.toString().replace(":host","html")}</style>`,document.head.appendChild(o.content)},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(32);var n=r(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=n.c`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,i=n.c`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Object(n.d)("",i,{moduleId:"lumo-typography"});const s=document.createElement("template");s.innerHTML=`<style>${o.toString().replace(":host","html")}</style>`,document.head.appendChild(s.content)},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0;function o(){}o.prototype.__mixinApplications,o.prototype.__mixinSet;const i=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let r=n++;return function(n){let o=n.__mixinSet;if(o&&o[r])return n;let i=e,s=i.get(n);if(!s){s=t(n),i.set(n,s);let e=Object.create(s.__mixinSet||o||null);e[r]=!0,s.__mixinSet=e}return s}}},function(t,e,r){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,e){return t}},,function(t,e,r){"use strict";r(32);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const n=document.createElement("template");n.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n',document.head.appendChild(n.content)},function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return h}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
let n=0,o=0;const i=[];let s=0,a=!1;const l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=i.length;for(let e=0;e<t;e++){const t=i[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}i.splice(0,t),o+=t})).observe(l,{characterData:!0});const c={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},d={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},u={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},h={run(t){a||(a=!0,l.textContent=s,s+=1),i.push(t);const e=n;return n+=1,e},cancel(t){const e=t-o;if(e>=0){if(!i[e])throw new Error("invalid async handle: "+t);i[e]=null}}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r(16);var n=r(94),o=r(25),i=r(24);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function s(t){return"slot"===t.localName}let a=class{static getFlattenedNodes(t){const e=Object(i.a)(t);return s(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>s(t)?(t=t,Object(i.a)(t).assignedNodes({flatten:!0})):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){s(this._target)?this._listenSlots([this._target]):Object(i.a)(this._target).children&&(this._listenSlots(Object(i.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){s(this._target)?this._unlistenSlots([this._target]):Object(i.a)(this._target).children&&(this._unlistenSlots(Object(i.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,o.c.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let r=t[e];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),r=Object(n.a)(e,this._effectiveNodes);for(let e,n=0;n<r.length&&(e=r[n]);n++)for(let r,n=0;n<e.removed.length&&(r=e.removed[n]);n++)t.removedNodes.push(r);for(let n,o=0;o<r.length&&(n=r[o]);o++)for(let r=n.index;r<n.index+n.addedCount;r++)t.addedNodes.push(e[r]);this._effectiveNodes=e;let o=!1;return(t.addedNodes.length||t.removedNodes.length)&&(o=!0,this.callback.call(this._target,t)),o}_listenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];s(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];s(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}}},,function(t,e,r){"use strict";r.d(e,"s",(function(){return o})),r.d(e,"o",(function(){return i})),r.d(e,"k",(function(){return s})),r.d(e,"l",(function(){return a})),r.d(e,"i",(function(){return l})),r.d(e,"n",(function(){return c})),r.d(e,"a",(function(){return d})),r.d(e,"e",(function(){return u})),r.d(e,"g",(function(){return h})),r.d(e,"q",(function(){return p})),r.d(e,"f",(function(){return m})),r.d(e,"h",(function(){return f})),r.d(e,"b",(function(){return _})),r.d(e,"m",(function(){return g})),r.d(e,"j",(function(){return b})),r.d(e,"c",(function(){return v})),r.d(e,"p",(function(){return y})),r.d(e,"d",(function(){return x})),r.d(e,"r",(function(){return w}));r(16);var n=r(71);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=!window.ShadyDOM||!window.ShadyDOM.inUse,i=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,o&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let s=window.Polymer&&window.Polymer.rootPath||Object(n.a)(document.baseURI||window.location.href);let a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let l=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let c=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;let d=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;let u=window.Polymer&&window.Polymer.legacyOptimizations||!1;let h=window.Polymer&&window.Polymer.legacyWarnings||!1;let p=window.Polymer&&window.Polymer.syncInitialRender||!1;let m=window.Polymer&&window.Polymer.legacyUndefined||!1;let f=window.Polymer&&window.Polymer.orderedComputed||!1;let _=!0;const g=function(t){_=t};let b=window.Polymer&&window.Polymer.removeNestedTemplates||!1;let v=window.Polymer&&window.Polymer.fastDomIf||!1;let y=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;let x=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let w=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1},,function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return h}));r(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=0,o=0,i=[],s=0,a=!1,l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=i.length;for(let e=0;e<t;e++){let t=i[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}i.splice(0,t),o+=t})).observe(l,{characterData:!0});const c={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},d={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},u={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},h={run:t=>(a||(a=!0,l.textContent=s++),i.push(t),n++),cancel(t){const e=t-o;if(e>=0){if(!i[e])throw new Error("invalid async handle: "+t);i[e]=null}}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return s}));r(16),r(15),r(25);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,o.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),o.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,r){return t instanceof n?t._cancelAsync():t=new n,t.setConfig(e,r),t}}let o=new Set;const i=function(t){o.add(t)},s=function(){const t=Boolean(o.size);return o.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,o.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),o.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,r){return t instanceof n?t._cancelAsync():t=new n,t.setConfig(e,r),t}}let o=new Set;function i(t){o.add(t)}function s(){const t=Boolean(o.size);return o.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t}const a=()=>{let t;do{t=s()}while(t)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(15);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let o=!1;window.addEventListener("keydown",()=>{o=!0},{capture:!0}),window.addEventListener("mousedown",()=>{o=!1},{capture:!0});const i=Object(n.a)(t=>class extends t{get _keyboardActive(){return o}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class n{constructor(t){this.value=t.toString()}toString(){return this.value}}function o(t){if(t instanceof n)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}const i=function(t,...e){const r=document.createElement("template");return r.innerHTML=e.reduce((e,r,i)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof n)return o(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(r)+t[i+1],t[0]),r}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(15);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(n.a)(t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}})},,function(t,e,r){"use strict";
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class n extends HTMLElement{static get version(){return"23.0.7"}}customElements.define("vaadin-lumo-styles",n)},function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(114);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=[];let i;function s(t,e,r=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=r&&t.removeAttribute("dir")}function a(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const t=a();o.forEach(e=>{s(e,t)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const l=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0}}}static finalize(){super.finalize(),i||(i=n.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),s(this,a(),null))}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),"dir"!==t)return;const n=a(),i=r===n&&-1===o.indexOf(this),l=!r&&e&&-1===o.indexOf(this),c=r!==n&&e===n;i||l?(this.__subscribe(),s(this,n,r)):c&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(t,e,r){("dir"!==r||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,r)}_attributeToProperty(t,e,r){"dir"!==t||e?super._attributeToProperty(t,e,r):this.dir=""}__subscribe(t=!0){t?-1===o.indexOf(this)&&o.push(this):o.indexOf(this)>-1&&o.splice(o.indexOf(this),1)}__getNormalizedScrollLeft(t){return n.a.getNormalizedScrollLeft(i,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return n.a.setNormalizedScrollLeft(i,this.getAttribute("dir")||"ltr",t,e)}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(10),r(18),r(13),r(9),r(12),r(14);var n=r(7),o=r(53),i=r(63),s=r(39);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=n.c`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,l=[s.a,o.a,i.a,a];Object(n.d)("",l,{moduleId:"lumo-input-field-shared-styles"})},function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(8),o=r(78),i=r(11),s=r(28),a=r(96),l=r(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class c extends(Object(o.a)(Object(a.a)(Object(s.a)(Object(i.a)(Object(l.a)(n.a)))))){static get is(){return"vaadin-button"}static get properties(){return{tabindex:{value:0}}}static get template(){return n.b`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}}customElements.define(c.is,c)},function(t,e,r){"use strict";r.d(e,"b",(function(){return y})),r.d(e,"a",(function(){return O})),r.d(e,"e",(function(){return A})),r.d(e,"d",(function(){return P})),r.d(e,"f",(function(){return S})),r.d(e,"c",(function(){return z}));var n=r(19);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const o="string"==typeof document.head.style.touchAction,i="__polymerGesturesHandled",s="__polymerGesturesTouchAction",a=["mousedown","mousemove","mouseup","click"],l=[0,1,4,2],c=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function d(t){return a.indexOf(t)>-1}let u=!1;function h(t){d(t)}!function(){try{const t=Object.defineProperty({},"passive",{get(){u=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const p=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),m={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function f(t){const e=t.type;if(!d(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!c&&(e=l[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}const _={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function g(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function b(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const v=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],y={},x=[];function w(t){const e=v(t);return e.length>0?e[0]:t.target}function C(t){const e=t.type,r=t.currentTarget.__polymerGestures;if(!r)return;const n=r[e];if(!n)return;if(!t[i]&&(t[i]={},"touch"===e.slice(0,5))){const r=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(_.touch.id=r.identifier),_.touch.id!==r.identifier)return;o||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],r=t.type;if("touchstart"===r)_.touch.x=e.clientX,_.touch.y=e.clientY,_.touch.scrollDecided=!1;else if("touchmove"===r){if(_.touch.scrollDecided)return;_.touch.scrollDecided=!0;const r=function(t){let e="auto";const r=v(t);for(let t,n=0;n<r.length;n++)if(t=r[n],t[s]){e=t[s];break}return e}(t);let n=!1;const o=Math.abs(_.touch.x-e.clientX),i=Math.abs(_.touch.y-e.clientY);t.cancelable&&("none"===r?n=!0:"pan-x"===r?n=i>o:"pan-y"===r&&(n=o>i)),n?t.preventDefault():z("track")}}(t)}const a=t[i];if(!a.skip){for(let e,r=0;r<x.length;r++)e=x[r],n[e.name]&&!a[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let r,o=0;o<x.length;o++)r=x[o],n[r.name]&&!a[r.name]&&(a[r.name]=!0,r[e](t))}}function O(t,e,r){return!!y[e]&&(function(t,e,r){const n=y[e],o=n.deps,i=n.name;let s=t.__polymerGestures;s||(t.__polymerGestures=s={});for(let e,r,n=0;n<o.length;n++)e=o[n],p&&d(e)&&"click"!==e||(r=s[e],r||(s[e]=r={_count:0}),0===r._count&&t.addEventListener(e,C,h(e)),r[i]=(r[i]||0)+1,r._count=(r._count||0)+1);t.addEventListener(e,r),n.touchAction&&S(t,n.touchAction)}(t,e,r),!0)}function A(t,e,r){return!!y[e]&&(function(t,e,r){const n=y[e],o=n.deps,i=n.name,s=t.__polymerGestures;if(s)for(let e,r,n=0;n<o.length;n++)e=o[n],r=s[e],r&&r[i]&&(r[i]=(r[i]||1)-1,r._count=(r._count||1)-1,0===r._count&&t.removeEventListener(e,C,h(e)));t.removeEventListener(e,r)}(t,e,r),!0)}function P(t){x.push(t);for(let e=0;e<t.emits.length;e++)y[t.emits[e]]=t}function S(t,e){o&&t instanceof HTMLElement&&n.c.run(()=>{t.style.touchAction=e}),t[s]=e}function E(t,e,r){const n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,t.dispatchEvent(n),n.defaultPrevented){const t=r.preventer||r.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function z(t){const e=function(t){for(let e,r=0;r<x.length;r++){e=x[r];for(let r,n=0;n<e.emits.length;n++)if(r=e.emits[n],r===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function k(t,e,r,n){e&&E(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent:function(t){return z(t)}})}function T(t,e,r){if(t.prevent)return!1;if(t.started)return!0;const n=Math.abs(t.x-e),o=Math.abs(t.y-r);return n>=5||o>=5}function I(t,e,r){if(!e)return;const n=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],i=o.x-t.x,s=o.y-t.y;let a,l=0;n&&(a=o.x-n.x,l=o.y-n.y),E(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:i,dy:s,ddx:a,ddy:l,sourceEvent:r,hover:function(){return function(t,e){let r=document.elementFromPoint(t,e),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){const o=n;if(n=n.shadowRoot.elementFromPoint(t,e),o===n)break;n&&(r=n)}return r}(r.clientX,r.clientY)}})}function M(t,e,r){const n=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),i=w(r||e);!i||m[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(o)||n<=25&&o<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=w(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const r=e.getBoundingClientRect(),n=t.pageX,o=t.pageY;return!(n>=r.left&&n<=r.right&&o>=r.top&&o<=r.bottom)}return!1}(e))&&(t.prevent||E(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}P({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){b(this.info)},mousedown:function(t){if(!f(t))return;const e=w(t),r=this;g(this.info,t=>{f(t)||(k("up",e,t),b(r.info))},t=>{f(t)&&k("up",e,t),b(r.info)}),k("down",e,t)},touchstart:function(t){k("down",w(t),t.changedTouches[0],t)},touchend:function(t){k("up",w(t),t.changedTouches[0],t)}}),P({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,b(this.info)},mousedown:function(t){if(!f(t))return;const e=w(t),r=this,n=t=>{const n=t.clientX,o=t.clientY;T(r.info,n,o)&&(r.info.state=r.info.started?"mouseup"===t.type?"end":"track":"start","start"===r.info.state&&z("tap"),r.info.addMove({x:n,y:o}),f(t)||(r.info.state="end",b(r.info)),e&&I(r.info,e,t),r.info.started=!0)};g(this.info,n,t=>{r.info.started&&n(t),b(r.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){const e=w(t),r=t.changedTouches[0],n=r.clientX,o=r.clientY;T(this.info,n,o)&&("start"===this.info.state&&z("tap"),this.info.addMove({x:n,y:o}),I(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend:function(t){const e=w(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),I(this.info,e,r))}}),P({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){f(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){f(t)&&M(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){M(this.info,t.changedTouches[0],t)}})},function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a}));r(9),r(12);var n=r(7),o=r(38);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=n.c`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;Object(n.d)("",i,{moduleId:"lumo-menu-overlay-core"});const s=n.c`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,a=[o.a,i,s];Object(n.d)("",a,{moduleId:"lumo-menu-overlay"})},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(10),r(9),r(12),r(14);var n=r(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=n.c`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;Object(n.d)("",o,{moduleId:"lumo-overlay"})},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(10),r(9),r(12),r(14);var n=r(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=n.c`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([required]:not([has-value])) [part='required-indicator']::after {
    opacity: 1;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;Object(n.d)("",o,{moduleId:"lumo-required-field"})},function(t,e,r){"use strict";var n=r(8),o=r(33),i=r(7);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class s extends(Object(i.a)(Object(o.a)(n.a))){static get is(){return"vaadin-input-container"}static get template(){return n.b`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          /* See the workaround at the end of this file. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}}customElements.define(s.is,s);const a=i.c`
  /* Needed for Safari, where ::slotted(...)::placeholder does not work */
  :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
    font: inherit;
    color: inherit;
  }
`,l=document.createElement("template");l.innerHTML=`<style>${a.toString()}</style>`,document.head.appendChild(l.content)},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(15);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(n.a)(t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class n{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",t=>{this.__initLabel(t.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}},,,function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var n=r(166),o=(r(61),r(128),r(16),r(107)),i=r(79),s=r(125),a=r(22),l=r(24),c=r(101);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const d=Object(s.a)(Object(i.b)(Object(o.a)(HTMLElement)));customElements.define("dom-bind",class extends d{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),a.n)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,r,n){this.mutableData=!0}connectedCallback(){Object(c.a)()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(l.a)(Object(l.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});r(64),r(129);var u=r(8),h=r(15),p=r(94),m=r(67);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let f=Object(h.a)(t=>{let e=Object(m.a)(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let r=e.path;if(r==JSCompiler_renameProperty("items",this)){let r=e.base||[],n=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),n){let t=Object(p.a)(r,n);this.__applySplices(t)}this.__lastItems=r,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{let t=r.slice((JSCompiler_renameProperty("items",this)+".").length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let r=0;r<t.length;r++){let n=t[r];e.forEach((t,r)=>{t<n.index||(t>=n.index+n.removed.length?e.set(r,t+n.addedCount-n.removed.length):e.set(r,-1))});for(let t=0;t<n.addedCount;t++){let r=n.index+t;e.has(this.items[r])&&e.set(this.items[r],r)}}this.__updateLinks();let r=0;e.forEach((t,n)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null,e.delete(n)):r++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((r,n)=>{e==t++&&this.deselect(n)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let r;this.__selectedMap.delete(t),this.multi&&(r=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(u.a);class _ extends f{static get is(){return"array-selector"}static get template(){return null}}customElements.define(_.is,_);r(182),r(130),r(29);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const g=Object(n.a)(HTMLElement).prototype},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(54);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class o extends n.a{constructor(t,e){super(t,"input",()=>document.createElement("input"),(t,r)=>{t.value&&r.setAttribute("value",t.value),t.type&&r.setAttribute("type",t.type);const n=o._uniqueInputId=1+o._uniqueInputId||0;t._inputId=`${t.localName}-${n}`,r.id=t._inputId,"function"==typeof e&&e(r)})}}},function(t,e,r){"use strict";r(77),r(35)},function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return d}));r(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n=!1,o=[],i=[];function s(){n=!0,requestAnimationFrame((function(){n=!1,a(o),setTimeout((function(){!function(t){for(let e=0,r=t.length;e<r;e++)l(t.shift())}(i)}))}))}function a(t){for(;t.length;)l(t.shift())}function l(t){const e=t[0],r=t[1],n=t[2];try{r.apply(e,n)}catch(t){setTimeout(()=>{throw t})}}function c(t,e,r){n||s(),o.push([t,e,r])}function d(t,e,r){n||s(),i.push([t,e,r])}},function(t,e,r){"use strict";r.d(e,"b",(function(){return o}));r(16);var n=r(26);r.d(e,"a",(function(){return n.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const o=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Object(n.c)()}while(t||e)}},function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return y})),r.d(e,"a",(function(){return x}));r(16);var n=r(107),o=r(79),i=r(22),s=r(24);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a=null;function l(){return a}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});const c=Object(n.a)(l),d=Object(o.a)(c);const u=Object(n.a)(class{});function h(t,e){for(let r=0;r<e.length;r++){let n=e[r];if(Boolean(t)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),Object(s.a)(Object(s.a)(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const t=n.__polymerReplaced__;t&&Object(s.a)(Object(s.a)(t).parentNode).replaceChild(n,t)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class p extends u{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,r(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,e,r)}}_showHideChildren(t){h(t,this.children)}_setUnmanagedPropertyToNode(t,e,r){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(t,e,r)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;const m=Object(o.a)(p);function f(t){let e=t.__dataHost;return e&&e._methodHost||e}function _(t,e,r){let n=r.mutableData?m:p;y.mixin&&(n=y.mixin(n));let o=class extends n{};return o.prototype.__templatizeOptions=r,o.prototype._bindTemplate(t),function(t,e,r,n){let o=r.hostProps||{};for(let e in n.instanceProps){delete o[e];let r=n.notifyInstanceProp;r&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:v(e,r)})}if(n.forwardHostProp&&e.__dataHost)for(let e in o)r.hasHostProps||(r.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,r){t.__dataHost._setPendingPropertyOrPath("_host_"+e,r[e],!0,!0)}})}(o,t,e,r),o}function g(t,e,r,n){let o=r.forwardHostProp;if(o&&e.hasHostProps){const u="template"==t.localName;let h=e.templatizeTemplateClass;if(!h){if(u){let t=r.mutableData?d:c;class n extends t{}h=e.templatizeTemplateClass=n}else{const r=t.constructor;class n extends r{}h=e.templatizeTemplateClass=n}let s=e.hostProps;for(let t in s)h.prototype._addPropertyEffect("_host_"+t,h.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:b(t,o)}),h.prototype._createNotifyingProperty("_host_"+t);i.g&&n&&function(t,e,r){const n=r.constructor._properties,{propertyEffects:o}=t,{instanceProps:i}=e;for(let t in o)if(!(n[t]||i&&i[t])){const e=o[t];for(let r=0;r<e.length;r++){const{part:n}=e[r].info;if(!n.signature||!n.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,r,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),u)l=h,a=s=t,Object.setPrototypeOf(s,l.prototype),new l,a=null,t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,h.prototype);const r=e.hostProps;for(let e in r)if(e="_host_"+e,e in t){const r=t[e];delete t[e],t.__data[e]=r}}}var s,l}function b(t,e){return function(t,r,n){e.call(t.__templatizeOwner,r.substring("_host_".length),n[r])}}function v(t,e){return function(t,r,n){e.call(t.__templatizeOwner,t,r,n[r])}}function y(t,e,r){if(i.n&&!f(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let n=(e?e.constructor:p)._parseTemplate(t),o=n.templatizeInstanceClass;o||(o=_(t,n,r),n.templatizeInstanceClass=o);const s=f(t);g(t,n,r,s);let a=class extends o{};return a.prototype._methodHost=s,a.prototype.__dataHost=t,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=n.hostProps,a=a,a}function x(t,e){let r;for(;e;)if(r=e.__dataHost?e:e.__templatizeInstance){if(r.__dataHost==t)return r;e=r.__dataHost}else e=Object(s.a)(e).parentNode;return null}},function(t,e,r){"use strict";r(10),r(13),r(12),r(14);var n=r(7);Object(n.d)("vaadin-input-container",n.c`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});r(40)},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r(3).c`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;var o=r(119),i=r(120);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=[o.a,i.a,n]},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(10),r(18),r(13),r(12);var n=r(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=n.c`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;Object(n.d)("",o,{moduleId:"lumo-field-button"})},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(93),o=r(20);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class i extends EventTarget{constructor(t,e,r,n){super(),this.host=t,this.slotName=e,this.slotFactory=r,this.slotInitializer=n,this.defaultId=i.generateId(e,t)}static generateId(t,e){const r=t||"default",o=Object(n.b)(r)+"Id";return this[o]=1+this[o]||0,`${r}-${e.localName}-${this[o]}`}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:r}=this;let n=this.defaultNode;return!n&&r&&(n=r(t),n instanceof Element&&(""!==e&&n.setAttribute("slot",e),this.node=n,this.defaultNode=n)),n&&t.appendChild(n),n}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t)}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,r=this.host.shadowRoot.querySelector(e);this.__slotObserver=new o.a(r,t=>{const e=this.node,r=t.addedNodes.find(t=>t!==e);t.removedNodes.length&&t.removedNodes.forEach(t=>{this.teardownNode(t)}),r&&(e&&e.isConnected&&this.host.removeChild(e),this.node=r,r!==this.defaultNode&&(this.initCustomNode(r),this.initNode(r)))})}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(15);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(n.a)(t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){}_onKeyUp(t){}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(15),o=r(28),i=r(96);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=Object(n.a)(t=>class extends(Object(o.a)(Object(i.a)(t))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){void 0!==t&&this.focusElement&&(this.focusElement.tabIndex=t,-1!==t&&(this.tabindex=void 0)),this.disabled&&t&&(-1!==t&&(this._lastTabIndex=t),this.tabindex=void 0)}})},function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return h}));r(16);var n=r(24),o=(r(22),r(20));r(49),r(26);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=Element.prototype,s=i.matches||i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector,a=function(t,e){return s.call(t,e)};class l{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new o.a(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Object(n.a)(this.node).contains(t))return!0;let e=t,r=t.ownerDocument;for(;e&&e!==r&&e!==this.node;)e=Object(n.a)(e).parentNode||Object(n.a)(e).host;return e===this.node}getOwnerRoot(){return Object(n.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(n.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Object(n.a)(this.node).assignedSlot;for(;e;)t.push(e),e=Object(n.a)(e).assignedSlot;return t}importNode(t,e){let r=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(n.a)(r).importNode(t,e)}getEffectiveChildNodes(){return o.a.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),r=[];for(let n,o=0,i=e.length;o<i&&(n=e[o]);o++)n.nodeType===Node.ELEMENT_NODE&&a(n,t)&&r.push(n);return r}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function c(t,e){for(let r=0;r<e.length;r++){let n=e[r];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}class d{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;let u=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=l.prototype[e])}),c(t.prototype,["classList"]),u=t,Object.defineProperties(d.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&h(t).getOwnerRoot(),r=this.path;for(let t=0;t<r.length;t++){const n=r[t];if(h(n).getOwnerRoot()===e)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let r=0;r<e.length;r++){let n=e[r];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),c(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let r=0;r<e.length;r++){let n=e[r];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(t){this.node[n]=t},configurable:!0})}}(l.prototype,["textContent","innerHTML","className"]);const h=function(t){if((t=t||document)instanceof u)return t;if(t instanceof d)return t;let e=t.__domApi;return e||(e=t instanceof Event?new d(t):new u(t),t.__domApi=e),e}},,function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return h}));var n=r(3),o=r(188),i=r(2),s=r(0);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class a extends i.a{constructor(t){if(super(t),this.it=s.d,t.type!==i.b.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===s.d||null==t)return this.ft=void 0,this.it=t;if(t===s.c)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;Object(i.c)(a);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends a{}l.directiveName="unsafeSVG",l.resultType=2;const c=Object(i.c)(l);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function d(t){let e=n.e;if(t){const r=t.cloneNode(!0);r.removeAttribute("id"),e=n.g`${c(r.innerHTML)}`}return e}function u(t){let e=null==t||""===t?n.e:t;return function(t){return Object(o.b)(t,o.a.SVG)||t===n.e}(e)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),e=n.e),e}function h(t,e){const r=u(t);Object(n.f)(r,e)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(30),o=r(54);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class i extends o.a{constructor(t){super(t,"error-message",()=>document.createElement("div"),(t,e)=>{this.__updateErrorId(e),this.__updateHasError()})}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}var s=r(115);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class a{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){this.__target&&this.__isGroupField&&(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(t,e,r){this.__target&&(r&&Object(s.b)(this.__target,t,r),e&&Object(s.a)(this.__target,t,e))}}
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class l extends o.a{constructor(t){super(t,"helper")}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const t=this.__hasHelper(e);this.__toggleHasHelper(t)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();e&&e!==this.defaultNode||this.__applyDefaultHelper(t,e)}__hasHelper(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return t&&""!==t.trim()}__applyDefaultHelper(t,e){const r=this.__isNotEmpty(t);r&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(r)}__observeHelper(t){this.__helperObserver=new MutationObserver(t=>{t.forEach(t=>{const e=t.target,r=e===this.node;if("attributes"===t.type)r&&e.id!==this.defaultId&&this.__updateHelperId(e);else if(r||e.parentElement===this.node){const t=this.__hasHelper(this.node);this.__toggleHasHelper(t)}})}),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}var c=r(108),d=r(116);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const u=t=>class extends(Object(d.a)(Object(c.a)(Object(n.a)(t)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},_helperId:String}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new a(this),this._helperController=new l(this),this._errorController=new i(this),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController),this._labelController.addEventListener("label-changed",t=>{const{hasLabel:e,node:r}=t.detail;this.__labelChanged(e,r)}),this._helperController.addEventListener("helper-changed",t=>{const{hasHelper:e,node:r}=t.detail;this.__helperChanged(e,r)})}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout(()=>{t?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(166),o=r(22);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},a=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},s);function l(t,e,r,n){!function(t,e,r){const n=t._noAccessors,o=Object.getOwnPropertyNames(t);for(let i=0;i<o.length;i++){let s=o[i];if(!(s in r))if(n)e[s]=t[s];else{let r=Object.getOwnPropertyDescriptor(t,s);r&&(r.configurable=!0,Object.defineProperty(e,s,r))}}}(e,t,n);for(let t in i)e[t]&&(r[t]=r[t]||[],r[t].push(e[t]))}function c(t,e){for(const r in e){const n=t[r],o=e[r];t[r]=!("value"in o)&&n&&"value"in n?Object.assign({value:n.value},o):o}}const d=Object(n.a)(HTMLElement);function u(t,e,r){let n;const i={};class d extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let t,e=0;e<n.length;e++)t=n[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(n)for(let t=0;t<n.length;t++)c(e,n[t].properties);return c(e,t.properties),e}static get observers(){let e=[];if(n)for(let t,r=0;r<n.length;r++)t=n[r],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=i.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=d.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.__hasRegisterFinished=!0,super._registered(),o.e&&u(t);const e=Object.getPrototypeOf(this);let r=i.beforeRegister;if(r)for(let t=0;t<r.length;t++)r[t].call(e);if(r=i.registered,r)for(let t=0;t<r.length;t++)r[t].call(e)}}_applyListeners(){super._applyListeners();const t=i.listeners;if(t)for(let e=0;e<t.length;e++){const r=t[e];if(r)for(let t in r)this._addMethodEventListenerToNode(this,t,r[t])}}_ensureAttributes(){const t=i.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const r=t[e];for(let t in r)this._ensureAttribute(t,r[t])}super._ensureAttributes()}ready(){super.ready();let t=i.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=i.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=i.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,r){super.attributeChanged();let n=i.attributeChanged;if(n)for(let o=0;o<n.length;o++)n[o].call(this,t,e,r)}}if(r){Array.isArray(r)||(r=[r]);let t=e.prototype.behaviors;n=function t(e,r,n){r=r||[];for(let o=e.length-1;o>=0;o--){let i=e[o];i?Array.isArray(i)?t(i,r):r.indexOf(i)<0&&(!n||n.indexOf(i)<0)&&r.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return r}(r,null,t),d.prototype.behaviors=t?t.concat(r):n}const u=e=>{n&&function(t,e,r){for(let n=0;n<e.length;n++)l(t,e[n],r,a)}(e,n,i),l(e,t,i,s)};return o.e||u(d.prototype),d.generatedFrom=t,d}r(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const h=function(t){let e;return e="function"==typeof t?t:h.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};h.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let r=e?e(d):d;return r=u(t,r,t.behaviors),r.is=r.prototype.is=t.is,r}},function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"g",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return s})),r.d(e,"i",(function(){return a})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"h",(function(){return h}));r(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t){return t.indexOf(".")>=0}function o(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function i(t,e){return 0===t.indexOf(e+".")}function s(t,e){return 0===e.indexOf(t+".")}function a(t,e,r){return e+r.slice(t.length)}function l(t,e){return t===e||i(t,e)||s(t,e)}function c(t){if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let n=t[r].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function d(t){return Array.isArray(t)?c(t).split("."):t.toString().split(".")}function u(t,e,r){let n=t,o=d(e);for(let t=0;t<o.length;t++){if(!n)return;n=n[o[t]]}return r&&(r.path=o.join(".")),n}function h(t,e,r){let n=t,o=d(e),i=o[o.length-1];if(o.length>1){for(let t=0;t<o.length-1;t++){if(n=n[o[t]],!n)return}n[i]=r}else n[e]=r;return o.join(".")}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(10),r(13),r(12),r(14);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r(7).c`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`},function(t,e,r){"use strict";var n=r(8),o=r(50),i=r(26),s=r(49),a=r(79),l=r(62),c=r(25),d=r(24),u=r(101),h=r(22);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const p=Object(a.b)(n.a);class m extends p{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!h.p,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),Object(u.a)()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Object(d.a)(Object(d.a)(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let r={};r[this.as]=!0,r[this.indexAs]=!0,r[this.itemsIndexAs]=!0,this.__ctor=Object(o.c)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:r,forwardHostProp:function(t,e){let r=this.__instances;for(let n,o=0;o<r.length&&(n=r[o]);o++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,r){if(Object(l.e)(this.as,e)){let n=t[this.itemsIndexAs];e==this.as&&(this.items[n]=r);let o=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,e);this.notifyPath(o,r)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,r=this.__getMethodHost();return function(){return r[e].apply(r,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let r=0;r<e.length;r++)0===t.indexOf(e[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=i.a.debounce(this.__renderDebouncer,e>0?c.d.after(e):c.c,t.bind(this)),Object(s.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(s.b)()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),r=this.__calculateLimit(e.length);this.__updateInstances(t,r,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),h.p&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=r;return this.__filterFn&&(e=e.filter((e,r,n)=>this.__filterFn(t[e],r,n))),this.__sortFn&&e.sort((e,r)=>this.__sortFn(t[e],t[r])),e}__calculateLimit(t){let e=t;const r=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),n=Math.max(e-r,0),this.__chunkCount=n||1):(n=Math.min(Math.max(t-r,0),this.__chunkCount),e=Math.min(r+n,t)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,r){const n=this.__itemsIdxToInstIdx={};let o;for(o=0;o<e;o++){let e=this.__instances[o],i=r[o],s=t[i];n[i]=o,e?(e._setPendingProperty(this.as,s),e._setPendingProperty(this.indexAs,o),e._setPendingProperty(this.itemsIndexAs,i),e._flushProperties()):this.__insertInstance(s,o,i)}for(let t=this.__instances.length-1;t>=o;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const r=Object(d.a)(e.root);for(let t=0;t<e.children.length;t++){let n=e.children[t];r.appendChild(n)}return e}__attachInstance(t,e){let r=this.__instances[t];e.insertBefore(r.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,r){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=r,new this.__ctor(n)}__insertInstance(t,e,r){const n=this.__stampInstance(t,e,r);let o=this.__instances[e+1],i=o?o.children[0]:this;return Object(d.a)(Object(d.a)(this).parentNode).insertBefore(n.root,i),this.__instances[e]=n,n}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let r=t.slice(6),n=r.indexOf("."),o=n<0?r:r.substring(0,n);if(o==parseInt(o,10)){let t=n<0?"":r.substring(n+1);this.__handleObservedPaths(t);let i=this.__itemsIdxToInstIdx[o],s=this.__instances[i];if(s){let r=this.as+(t?"."+t:"");s._setPendingPropertyOrPath(r,e,!1,!0),s._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Object(o.a)(this.template,t)}}customElements.define(m.is,m)},,function(t,e,r){"use strict";r(51);var n=r(34),o=r(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(o.d)("vaadin-text-field",n.a,{moduleId:"lumo-text-field-styles"});r(73);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return m}));r(16);var n=r(22),o=r(15),i=r(92),s=r(71),a=r(72),l=r(107),c=r(113),d=r(112);const u=Object(o.a)(t=>{const e=Object(d.a)(t);function r(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof o?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const r=t.properties;r&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let r in t){const n=t[r];e[r]="function"==typeof n?{type:n}:n}return e}(r))}t.__ownProperties=e}return t.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){Object(c.b)(this.prototype);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=r(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=r(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){Object(c.a)(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});var h=r(24);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const p=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(o.a)(t=>{const e=u(Object(l.a)(t));return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):n.e||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let i in t)e=this.prototype,r=i,n=t[i],o=t,n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(r)?console.warn(`Cannot redefine computed property '${r}'.`):e._createComputedProperty(r,n.computed,o)),n.readOnly&&!e._hasReadOnlyEffect(r)?e._createReadOnlyProperty(r,!n.computed):!1===n.readOnly&&e._hasReadOnlyEffect(r)&&console.warn(`Cannot make readOnly property '${r}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(r)?e._createReflectedProperty(r):!1===n.reflectToAttribute&&e._hasReflectEffect(r)&&console.warn(`Cannot make reflected property '${r}' non-reflected.`),n.notify&&!e._hasNotifyEffect(r)?e._createNotifyingProperty(r):!1===n.notify&&e._hasNotifyEffect(r)&&console.warn(`Cannot make notify property '${r}' non-notify.`),n.observer&&e._createPropertyObserver(r,n.observer,o[n.observer]),e._addPropertyToAttributeMap(r);var e,r,n,o}static createObservers(t,e){const r=this.prototype;for(let n=0;n<t.length;n++)r._createMethodObserver(t[n],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!n.n||n.a)&&(e=a.a.import(t,"template"),n.n&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=Object(s.a)(t.url);else{const t=a.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=n.k,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let r in e){let n=e[r];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[r]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let r=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return Object(s.b)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const r=this.importPath;!function(t,e,r,o){if(!p){const n=e.content.querySelectorAll("style"),s=Object(i.c)(e),a=Object(i.b)(r),l=e.content.firstElementChild;for(let r=0;r<a.length;r++){let n=a[r];n.textContent=t._processStyleText(n.textContent,o),e.content.insertBefore(n,l)}let c=0;for(let e=0;e<s.length;e++){let r=s[e],i=n[c];i!==r?(r=r.cloneNode(!0),i.parentNode.insertBefore(r,i)):c++,r.textContent=t._processStyleText(r.textContent,o)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,r),n.r&&p&&n.o){const r=e.content.querySelectorAll("style");if(r){let e="";Array.from(r).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}(this,e,t,r?Object(s.c)(r):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Object(h.a)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),n.q&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Object(s.c)(this.importPath)),Object(s.c)(t,e)}static _parseTemplateContent(t,r,n){return r.dynamicFns=r.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,r,n)}static _addTemplatePropertyEffect(t,r,o){return!n.g||r in this._properties||o.info.part.signature&&o.info.part.signature.static||o.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,r,o)}}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=t=>class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),"theme"===t&&this._setTheme(r)}}},function(t,e,r){"use strict";r(32);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r(7).c`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`,o=document.createElement("template");o.innerHTML=`<style>${n.toString().replace(":host","html")}</style>`,document.head.appendChild(o.content)},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(8),o=r(11),i=r(59);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s={};class a extends(Object(o.a)(n.a)){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(t){let e=s[t];return e||(e=document.createElement("vaadin-iconset"),e.name=t,s[t]=e),e}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(t){return this._icons=this._icons||this.__createIconMap(),{svg:Object(i.a)(this._icons[this.__getIconId(t)]),size:this.size}}__createIconMap(){const t={};return this.querySelectorAll("[id]").forEach(e=>{t[this.__getIconId(e.id)]=e}),t}__getIconId(t){return(t||"").replace(this.name+":","")}__nameChanged(t,e){e&&(s[t]=a.getIconset(e),delete s[e]),t&&(s[t]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:t})))}}customElements.define(a.is,a)},function(t,e,r){"use strict";r.d(e,"c",(function(){return a})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return c}));r(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let n,o,i=/(url\()([^)]*)(\))/g,s=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&s.test(t))return t;if("//"===t)return t;if(void 0===n){n=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",n="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),n)try{return new URL(t,e).href}catch(e){return t}return o||(o=document.implementation.createHTMLDocument("temp"),o.base=o.createElement("base"),o.head.appendChild(o.base),o.anchor=o.createElement("a"),o.body.appendChild(o.anchor)),o.base.href=e,o.anchor.href=t,o.anchor.href||t}function l(t,e){return t.replace(i,(function(t,r,n,o){return r+"'"+a(n.replace(/["']/g,""),e)+"'"+o}))}function c(t){return t.substring(0,t.lastIndexOf("/")+1)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r(16);var n=r(71),o=r(22);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let i={},s={};function a(t,e){i[t]=s[t.toLowerCase()]=e}function l(t){return i[t]||s[t.toLowerCase()]}class c extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=l(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,n){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Object(n.c)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Object(n.a)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(o.n&&void 0!==l(t))throw a(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,a(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}c.prototype.modules=i,customElements.define("dom-module",c)},function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r(40);var n=r(8),o=r(11),i=r(46),s=r(95),a=r(42),l=r(76),c=r(52),d=r(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(d.d)("vaadin-text-field",c.a,{moduleId:"vaadin-text-field-styles"});class u extends(Object(l.a)(Object(s.a)(Object(d.a)(Object(o.a)(n.a))))){static get is(){return"vaadin-text-field"}static get template(){return n.b`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new i.a(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new a.a(this.inputElement,this._labelController))}}customElements.define(u.is,u)},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(55),o=r(56),i=r(60),s=r(117);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=t=>class extends(Object(o.a)(Object(s.a)(Object(i.a)(Object(n.a)(t))))){static get properties(){return{autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onKeyDown(t){super._onKeyDown(t),"Escape"===t.key&&this.clearButtonVisible&&this.value&&this.__clear()}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(15);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(n.a)(t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this.inputElement.value=null!=t?t:"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_onInput(t){this.__userInput=t.isTrusted,this.value=t.target.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(""!==t&&null!=t),""===t&&void 0===e||this.__userInput||this._forwardInputValue(t)}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(19),o=r(27),i=r(117);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=t=>class extends(Object(i.a)(t)){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const t=this.inputElement;t&&t.value.length>0&&!this.checkValidity()&&(t.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=o.a.debounce(this._inputDebouncer,n.d.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(t){this._checkInputValue(),super._onInput(t)}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(10),r(13),r(9),r(12),r(14);var n=r(7);const o=n.c`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;Object(n.d)("vaadin-button",o,{moduleId:"lumo-button"})},function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(36),o=r(41),i=r(55);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=t=>class extends(Object(o.a)(Object(i.a)(t))){get _activeKeys(){return[" "]}ready(){super.ready(),Object(n.a)(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),Object(n.a)(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&this._setActive(!0)}_onKeyUp(t){super._onKeyUp(t),this._activeKeys.includes(t.key)&&this._setActive(!1)}_setActive(t){this.toggleAttribute("active",t)}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s}));var n=r(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function o(t,e,r,n,o){let i;o&&(i="object"==typeof r&&null!==r,i&&(n=t.__dataTemp[e]));let s=n!==r&&(n==n||r==r);return i&&s&&(t.__dataTemp[e]=r),s}const i=Object(n.a)(t=>class extends t{_shouldPropertyChange(t,e,r){return o(this,t,e,r,!0)}}),s=Object(n.a)(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,r){return o(this,t,e,r,this.mutableData)}});i._mutablePropertyChange=o},,,,,,,,,,,,,function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return h}));var n=r(72),o=r(71);function i(t){return n.a.import(t)}function s(t){let e=t.body?t.body:t;const r=Object(o.b)(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=r,n}function a(t){const e=t.trim().split(/\s+/),r=[];for(let t=0;t<e.length;t++)r.push(...l(e[t]));return r}function l(t){const e=i(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...u(e));const r=e.querySelector("template");r&&t.push(...c(r,e.assetpath)),e._styles=t}return e._styles}function c(t,e){if(!t._styles){const r=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let i=n[t],s=i.getAttribute("include");s&&r.push(...a(s).filter((function(t,e,r){return r.indexOf(t)===e}))),e&&(i.textContent=Object(o.b)(i.textContent,e)),r.push(i)}t._styles=r}return t._styles}function d(t){let e=i(t);return e?u(e):[]}function u(t){const e=[],r=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<r.length;t++){let n=r[t];if(n.import){const t=n.import,r=n.hasAttribute("shady-unscoped");if(r&&!t._unscopedStyle){const e=s(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=s(t));e.push(r?t._unscopedStyle:t._style)}}return e}function h(t){let e=t.trim().split(/\s+/),r="";for(let t=0;t<e.length;t++)r+=p(e[t]);return r}function p(t){let e=i(t);if(e&&void 0===e._cssText){let t=m(e),r=e.querySelector("template");r&&(t+=function(t,e){let r="";const n=c(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),r+=e.textContent}return r}(r,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function m(t){let e="",r=u(t);for(let t=0;t<r.length;t++)e+=r[t].textContent;return e}},function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return a}));r(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n={},o=/-[a-z]/g,i=/([A-Z])/g;function s(t){return n[t]||(n[t]=t.indexOf("-")<0?t:t.replace(o,t=>t[1].toUpperCase()))}function a(t){return n[t]||(n[t]=t.replace(i,"-$1").toLowerCase())}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(16);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(t,e,r){return{index:t,removed:e,addedCount:r}}function o(t,e,r,o,i,a){let l,c=0,d=0,u=Math.min(r-e,a-i);if(0==e&&0==i&&(c=function(t,e,r){for(let n=0;n<r;n++)if(!s(t[n],e[n]))return n;return r}(t,o,u)),r==t.length&&a==o.length&&(d=function(t,e,r){let n=t.length,o=e.length,i=0;for(;i<r&&s(t[--n],e[--o]);)i++;return i}(t,o,u-c)),i+=c,a-=d,(r-=d)-(e+=c)==0&&a-i==0)return[];if(e==r){for(l=n(e,[],0);i<a;)l.removed.push(o[i++]);return[l]}if(i==a)return[n(e,[],r-e)];let h=function(t){let e=t.length-1,r=t[0].length-1,n=t[e][r],o=[];for(;e>0||r>0;){if(0==e){o.push(2),r--;continue}if(0==r){o.push(3),e--;continue}let i,s=t[e-1][r-1],a=t[e-1][r],l=t[e][r-1];i=a<l?a<s?a:s:l<s?l:s,i==s?(s==n?o.push(0):(o.push(1),n=s),e--,r--):i==a?(o.push(3),e--,n=a):(o.push(2),r--,n=l)}return o.reverse(),o}(function(t,e,r,n,o,i){let a=i-o+1,l=r-e+1,c=new Array(a);for(let t=0;t<a;t++)c[t]=new Array(l),c[t][0]=t;for(let t=0;t<l;t++)c[0][t]=t;for(let r=1;r<a;r++)for(let i=1;i<l;i++)if(s(t[e+i-1],n[o+r-1]))c[r][i]=c[r-1][i-1];else{let t=c[r-1][i]+1,e=c[r][i-1]+1;c[r][i]=t<e?t:e}return c}(t,e,r,o,i,a));l=void 0;let p=[],m=e,f=i;for(let t=0;t<h.length;t++)switch(h[t]){case 0:l&&(p.push(l),l=void 0),m++,f++;break;case 1:l||(l=n(m,[],0)),l.addedCount++,m++,l.removed.push(o[f]),f++;break;case 2:l||(l=n(m,[],0)),l.addedCount++,m++;break;case 3:l||(l=n(m,[],0)),l.removed.push(o[f]),f++}return l&&p.push(l),p}function i(t,e){return o(t,0,t.length,e,0,e.length)}function s(t,e){return t===e}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(74);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=t=>class extends(Object(n.a)(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},_enabledCharPattern:{type:String,observer:"_enabledCharPatternChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_onBlur(t){super._onBlur(t),this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_forwardInputValue(t){super._forwardInputValue(t),this.invalid&&this.validate()}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){this._enabledCharPattern&&!this.__shouldAcceptKey(t)&&t.preventDefault(),super._onKeyDown(t)}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__enabledCharRegExp.test(t.key)}_onPaste(t){if(this._enabledCharPattern){const e=(t.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onDrop(t){if(this._enabledCharPattern){const e=t.dataTransfer.getData("text");this.__enabledTextRegExp.test(e)||t.preventDefault()}}_onBeforeInput(t){this._enabledCharPattern&&t.data&&!this.__enabledTextRegExp.test(t.data)&&t.preventDefault()}_enabledCharPatternChanged(t){t&&(this.__enabledCharRegExp=new RegExp("^"+t+"$"),this.__enabledTextRegExp=new RegExp("^"+t+"*$"))}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(41);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=t=>class extends(Object(n.a)(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&-1!==t&&(this._lastTabIndex=t,this.tabindex=-1)}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=t=>class extends t{static get properties(){return{action:{type:String,value:null,notify:!0},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1,notify:!0},noAutofocus:{type:Boolean,value:!1},i18n:{type:Object,value:function(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}},notify:!0},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(t){t.stopPropagation();const{detail:e,composed:r,cancelable:n,bubbles:o}=t;this.dispatchEvent(new CustomEvent(t.type,{bubbles:o,cancelable:n,composed:r,detail:e}))||t.preventDefault()}}},function(t,e,r){"use strict";r.d(e,"d",(function(){return n})),r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=!(window.ShadyDOM&&window.ShadyDOM.inUse);let o,i;function s(t){o=(!t||!t.shimcssproperties)&&(n||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild);const a=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?o=window.ShadyCSS.nativeCss:window.ShadyCSS?(s(window.ShadyCSS),window.ShadyCSS=void 0):s(window.WebComponents&&window.WebComponents.flags);const l=o},function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,o=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,i=/@media\s(.*)/},function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return s}));var n=r(99);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function o(t,e){for(let r in e)null===r?t.style.removeProperty(r):t.style.setProperty(r,e[r])}function i(t,e){const r=window.getComputedStyle(t).getPropertyValue(e);return r?r.trim():""}function s(t){const e=n.b.test(t)||n.c.test(t);return n.b.lastIndex=0,n.c.lastIndex=0,e}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(22);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o=!1;function i(){if(n.e&&!n.s){if(!o){o=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}},,,,function(t,e,r){"use strict";r(66);var n=r(77),o=r(7);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=o.c`
  :host {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: auto;
    background: transparent;
    outline: none;
  }
`;Object(o.d)("vaadin-password-field-button",[n.a,i],{moduleId:"lumo-password-field-button"});r(18),r(13),r(12);var s=r(34);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=o.c`
  [part='reveal-button']::before {
    content: var(--lumo-icons-eye);
  }

  :host([password-visible]) [part='reveal-button']::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  [part='reveal-button'] {
    position: relative;
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  [part='reveal-button'][hidden] {
    display: none !important;
  }
`;Object(o.d)("vaadin-password-field",[s.a,a],{moduleId:"lumo-password-field"});r(181);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},,function(t,e,r){"use strict";r.d(e,"a",(function(){return X}));r(16);var n=r(24),o=r(15),i=r(62),s=r(93),a=r(111);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const l={"dom-if":!0,"dom-repeat":!0};let c=!1,d=!1;function u(t){(function(){if(!c){c=!0;const t=document.createElement("textarea");t.placeholder="a",d=t.placeholder===t.textContent}return d})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function h(t){let e=t.getAttribute("is");if(e&&l[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;)t.setAttribute(r.attributes[0].name,r.attributes[0].value),r.removeAttribute(r.attributes[0].name)}return t}function p(t,e){let r=e.parentInfo&&p(t,e.parentInfo);if(!r)return t;for(let t=r.firstChild,n=0;t;t=t.nextSibling)if(e.parentIndex===n++)return t}function m(t,e,r,n){n.id&&(e[n.id]=r)}function f(t,e,r){if(r.events&&r.events.length)for(let n,o=0,i=r.events;o<i.length&&(n=i[o]);o++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function _(t,e,r,n){r.templateInfo&&(e._templateInfo=r.templateInfo,e._parentTemplateInfo=n)}const g=Object(o.a)(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let r=t._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(e),r.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,r,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,r){return this._parseTemplateNode(t.content,e,r)}static _parseTemplateNode(t,e,r){let n=!1,o=t;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(o,e,r)||n,u(o),o.firstChild&&this._parseTemplateChildNodes(o,e,r),o.hasAttributes&&o.hasAttributes()&&(n=this._parseTemplateNodeAttributes(o,e,r)||n),n||r.noted}static _parseTemplateChildNodes(t,e,r){if("script"!==t.localName&&"style"!==t.localName)for(let n,o=t.firstChild,i=0;o;o=n){if("template"==o.localName&&(o=h(o)),n=o.nextSibling,o.nodeType===Node.TEXT_NODE){let r=n;for(;r&&r.nodeType===Node.TEXT_NODE;)o.textContent+=r.textContent,n=r.nextSibling,t.removeChild(r),r=n;if(e.stripWhiteSpace&&!o.textContent.trim()){t.removeChild(o);continue}}let s={parentIndex:i,parentInfo:r};this._parseTemplateNode(o,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),o.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,r){let n=t,o=this._parseTemplate(n,e);return(o.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),r.templateInfo=o,!0}static _parseTemplateNodeAttributes(t,e,r){let n=!1,o=Array.from(t.attributes);for(let i,s=o.length-1;i=o[s];s--)n=this._parseTemplateNodeAttribute(t,e,r,i.name,i.value)||n;return n}static _parseTemplateNodeAttribute(t,e,r,n,o){return"on-"===n.slice(0,3)?(t.removeAttribute(n),r.events=r.events||[],r.events.push({name:n.slice(3),value:o}),!0):"id"===n&&(r.id=o,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let r=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,n=e.content||t.content,o=document.importNode(n,!0);o.__noInsertionPoint=!e.hasInsertionPoint;let i=o.nodeList=new Array(r.length);o.$={};for(let t,n=0,s=r.length;n<s&&(t=r[n]);n++){let r=i[n]=p(o,t);m(0,o.$,r,t),_(0,r,t,e),f(this,r,t)}return o=o,o}_addMethodEventListenerToNode(t,e,r,n){let o=function(t,e,r){return t=t._methodHost||t,function(e){t[r]?t[r](e,e.detail):console.warn("listener method `"+r+"` not defined")}}(n=n||t,0,r);return this._addEventListenerToNode(t,e,o),o}_addEventListenerToNode(t,e,r){t.addEventListener(e,r)}_removeEventListenerFromNode(t,e,r){t.removeEventListener(e,r)}});var b=r(22);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let v=0;const y=[],x={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},w=/[A-Z]/;function C(t,e,r){let n=t[e];if(n){if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),r))for(let t in n){let e=n[t],r=n[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}else n=t[e]={};return n}function O(t,e,r,n,o,s){if(e){let a=!1;const l=v++;for(let c in r){let d=e[o?Object(i.g)(c):c];if(d)for(let e,i=0,u=d.length;i<u&&(e=d[i]);i++)e.info&&e.info.lastRun===l||o&&!P(c,e.trigger)||(e.info&&(e.info.lastRun=l),e.fn(t,c,r,n,e.info,o,s),a=!0)}return a}return!1}function A(t,e,r,n,o,s,a,l){let c=!1,d=e[a?Object(i.g)(n):n];if(d)for(let e,i=0,u=d.length;i<u&&(e=d[i]);i++)e.info&&e.info.lastRun===r||a&&!P(n,e.trigger)||(e.info&&(e.info.lastRun=r),e.fn(t,n,o,s,e.info,a,l),c=!0);return c}function P(t,e){if(e){let r=e.name;return r==t||!(!e.structured||!Object(i.b)(r,t))||!(!e.wildcard||!Object(i.c)(r,t))}return!0}function S(t,e,r,n,o){let i="string"==typeof o.method?t[o.method]:o.method,s=o.property;i?i.call(t,t.__data[s],n[s]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function E(t,e,r){let n=Object(i.g)(e);if(n!==e){return z(t,Object(s.a)(n)+"-changed",r[e],e),!0}return!1}function z(t,e,r,o){let i={value:r,queueProperty:!0};o&&(i.path=o),Object(n.a)(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function k(t,e,r,n,o,s){let a=(s?Object(i.g)(e):e)!=e?e:null,l=a?Object(i.a)(t,a):t.__data[e];a&&void 0===l&&(l=r[e]),z(t,o.eventName,l,a)}function T(t,e,r,n,o){let i=t.__data[e];b.l&&(i=Object(b.l)(i,o.attrName,"attribute",t)),t._propertyToAttribute(e,o.attrName,i)}function I(t,e,r,n){let o=t[x.COMPUTE];if(o)if(b.h){v++;const i=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const r=t[x.COMPUTE];let n,{counts:o,ready:i,total:s}=function(t){const e=t.__computeInfo,r={},n=t[x.COMPUTE],o=[];let i=0;for(let t in e){const n=e[t];i+=r[t]=n.args.filter(t=>!t.literal).length+(n.dynamicFn?1:0)}for(let t in n)e[t]||o.push(t);return{counts:r,ready:o,total:i}}(t);for(;n=i.shift();){e.set(n,e.size);const t=r[n];t&&t.forEach(t=>{const e=t.info.methodInfo;--s,0==--o[e]&&i.push(e)})}if(0!==s){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),s=[];for(let t in e)N(t,o,s,i,n);let a;for(;a=s.shift();)j(t,"",e,r,a)&&N(a.methodInfo,o,s,i,n);Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;O(t,o,i,r,n);)Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}const M=(t,e,r)=>{let n=0,o=e.length-1,i=-1;for(;n<=o;){const s=n+o>>1,a=r.get(e[s].methodInfo)-r.get(t.methodInfo);if(a<0)n=s+1;else{if(!(a>0)){i=s;break}o=s-1}}i<0&&(i=o+1),e.splice(i,0,t)},N=(t,e,r,n,o)=>{const s=e[o?Object(i.g)(t):t];if(s)for(let e=0;e<s.length;e++){const i=s[e];i.info.lastRun===v||o&&!P(t,i.trigger)||(i.info.lastRun=v,M(i.info,r,n))}};function j(t,e,r,n,o){let i=V(t,e,r,n,o);if(i===y)return!1;let s=o.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,i,!0):(t[s]=i,!1)}function L(t,e,r,n,o,i,a){r.bindings=r.bindings||[];let l={kind:n,target:o,parts:i,literal:a,isCompound:1!==i.length};if(r.bindings.push(l),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(l)){let{event:t,negate:e}=l.parts[0];l.listenerEvent=t||Object(s.a)(o)+"-changed",l.listenerNegate=e}let c=e.nodeInfoList.length;for(let r=0;r<l.parts.length;r++){let n=l.parts[r];n.compoundIndex=r,H(t,e,l,n,c)}}function H(t,e,r,n,o){if(!n.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let i=n.dependencies,s={index:o,binding:r,part:n,evaluator:t};for(let r=0;r<i.length;r++){let n=i[r];"string"==typeof n&&(n=$(n),n.wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:D,info:s,trigger:n})}}}function D(t,e,r,n,o,s,a){let l=a[o.index],c=o.binding,d=o.part;if(s&&d.source&&e.length>d.source.length&&"property"==c.kind&&!c.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[c.target]){let n=r[e];e=Object(i.i)(d.source,c.target,e),l._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(l)}else{let i=o.evaluator._evaluateBinding(t,d,e,r,n,s);i!==y&&function(t,e,r,n,o){o=function(t,e,r,n){if(r.isCompound){let o=t.__dataCompoundStorage[r.target];o[n.compoundIndex]=e,e=o.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,o,r,n),b.l&&(o=Object(b.l)(o,r.target,r.kind,e));if("attribute"==r.kind)t._valueToNodeAttribute(e,o,r.target);else{let n=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[x.READ_ONLY]&&e[x.READ_ONLY][n]||e._setPendingProperty(n,o)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,o)}}(t,l,c,d,i)}}function R(t,e){if(e.isCompound){let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),o=e.parts,i=new Array(o.length);for(let t=0;t<o.length;t++)i[t]=o[t].literal;let s=e.target;r[s]=i,e.literal&&"property"==e.kind&&("className"===s&&(t=Object(n.a)(t)),t[s]=e.literal)}}function F(t,e,r){if(r.listenerEvent){let n=r.parts[0];t.addEventListener(r.listenerEvent,(function(t){!function(t,e,r,n,o){let s,a=t.detail,l=a&&a.path;l?(n=Object(i.i)(r,n,l),s=a&&a.value):s=t.currentTarget[r],s=o?!s:s,e[x.READ_ONLY]&&e[x.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,s,!0,Boolean(l))||a&&a.queueProperty||e._invalidateProperties()}(t,e,r.target,n.source,n.negate)}))}}function B(t,e,r,n,o,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:i};for(let o,i=0;i<e.args.length&&(o=e.args[i]);i++)o.literal||t._addPropertyEffect(o.rootProperty,r,{fn:n,info:s,trigger:o});return i&&t._addPropertyEffect(e.methodName,r,{fn:n,info:s}),s}function V(t,e,r,n,o){let i=t._methodHost||t,s=i[o.methodName];if(s){let n=t._marshalArgs(o.args,e,r);return n===y?y:s.apply(i,n)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const q=[],U=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Y(t){let e="";for(let r=0;r<t.length;r++){e+=t[r].literal||""}return e}function G(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:q};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let r=$(t);return r.literal||(e.static=!1),r}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function $(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0}return r.literal||(r.rootProperty=Object(i.g)(e),r.structured=Object(i.d)(e),r.structured&&(r.wildcard=".*"==e.slice(-2),r.wildcard&&(r.name=e.slice(0,-2)))),r}function J(t,e,r){let n=Object(i.a)(t,r);return void 0===n&&(n=e[r]),n}function W(t,e,r,n){const o={indexSplices:n};b.f&&!t._overrideLegacyUndefined&&(e.splices=o),t.notifyPath(r+".splices",o),t.notifyPath(r+".length",e.length),b.f&&!t._overrideLegacyUndefined&&(o.indexSplices=[])}function K(t,e,r,n,o,i){W(t,e,r,[{index:n,addedCount:o,removed:i,object:e,type:"splice"}])}const X=Object(o.a)(t=>{const e=g(Object(a.a)(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return x}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Z.length){let t=Z[Z.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[x.READ_ONLY];for(let r in t)e&&e[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=t[r])}_addPropertyEffect(t,e,r){this._createPropertyAccessor(t,e==x.READ_ONLY);let n=C(this,e,!0)[t];n||(n=this[e][t]=[]),n.push(r)}_removePropertyEffect(t,e,r){let n=C(this,e,!0)[t],o=n.indexOf(r);o>=0&&n.splice(o,1)}_hasPropertyEffect(t,e){let r=this[e];return Boolean(r&&r[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,x.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,x.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,x.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,x.COMPUTE)}_setPendingPropertyOrPath(t,e,r,n){if(n||Object(i.g)(Array.isArray(t)?t[0]:t)!==t){if(!n){let r=Object(i.a)(this,t);if(!(t=Object(i.h)(this,t,e))||!super._shouldPropertyChange(t,e,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,r))return function(t,e,r){let n=t.__dataLinkedPaths;if(n){let o;for(let s in n){let a=n[s];Object(i.c)(s,e)?(o=Object(i.i)(s,a,e),t._setPendingPropertyOrPath(o,r,!0,!0)):Object(i.c)(a,e)&&(o=Object(i.i)(a,s,e),t._setPendingPropertyOrPath(o,r,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,r);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,r){r===t[e]&&"object"!=typeof r||("className"===e&&(t=Object(n.a)(t)),t[e]=r)}_setPendingProperty(t,e,r){let n=this.__dataHasPaths&&Object(i.d)(t),o=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,o[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[x.NOTIFY]&&this[x.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=r),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let r=t[e];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let r in t)!e&&this[x.READ_ONLY]&&this[x.READ_ONLY][r]||this._setPendingPropertyOrPath(r,t[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,r){let n,o=this.__dataHasPaths;this.__dataHasPaths=!1,I(this,e,r,o),n=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,r,o),this._flushClients(),O(this,this[x.REFLECT],e,r,o),O(this,this[x.OBSERVE],e,r,o),n&&function(t,e,r,n,o){let i,s,a=t[x.NOTIFY],l=v++;for(let s in e)e[s]&&(a&&A(t,a,l,s,r,n,o)||o&&E(t,s,r))&&(i=!0);i&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,n,e,r,o),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,r){this[x.PROPAGATE]&&O(this,this[x.PROPAGATE],t,e,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,r)}_runEffectsForTemplate(t,e,r,n){const o=(e,n)=>{O(this,t.propertyEffects,e,r,n,t.nodeList);for(let o=t.firstChild;o;o=o.nextSibling)this._runEffectsForTemplate(o,e,r,n)};t.runEffects?t.runEffects(o,e,n):o(e,n)}linkPaths(t,e){t=Object(i.f)(t),e=Object(i.f)(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Object(i.f)(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let r={path:""};W(this,Object(i.a)(this,t,r),r.path,e)}get(t,e){return Object(i.a)(e||this,t)}set(t,e,r){r?Object(i.h)(r,t,e):this[x.READ_ONLY]&&this[x.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let r={path:""},n=Object(i.a)(this,t,r),o=n.length,s=n.push(...e);return e.length&&K(this,n,r.path,o,e.length,[]),s}pop(t){let e={path:""},r=Object(i.a)(this,t,e),n=Boolean(r.length),o=r.pop();return n&&K(this,r,e.path,r.length,0,[o]),o}splice(t,e,r,...n){let o,s={path:""},a=Object(i.a)(this,t,s);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),o=2===arguments.length?a.splice(e):a.splice(e,r,...n),(n.length||o.length)&&K(this,a,s.path,e,n.length,o),o}shift(t){let e={path:""},r=Object(i.a)(this,t,e),n=Boolean(r.length),o=r.shift();return n&&K(this,r,e.path,0,0,[o]),o}unshift(t,...e){let r={path:""},n=Object(i.a)(this,t,r),o=n.unshift(...e);return e.length&&K(this,n,r.path,0,e.length,[]),o}notifyPath(t,e){let r;if(1==arguments.length){let n={path:""};e=Object(i.a)(this,t,n),r=n.path}else r=Array.isArray(t)?Object(i.f)(t):t;this._setPendingPropertyOrPath(r,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var r;this._addPropertyEffect(t,x.READ_ONLY),e&&(this["_set"+(r=t,r[0].toUpperCase()+r.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,r){let n={property:t,method:e,dynamicFn:Boolean(r)};this._addPropertyEffect(t,x.OBSERVE,{fn:S,info:n,trigger:{name:t}}),r&&this._addPropertyEffect(e,x.OBSERVE,{fn:S,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let r=G(t);if(!r)throw new Error("Malformed observer expression '"+t+"'");B(this,r,x.OBSERVE,V,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,x.NOTIFY,{fn:k,info:{eventName:Object(s.a)(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,x.REFLECT,{fn:T,info:{attrName:e}})}_createComputedProperty(t,e,r){let n=G(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");const o=B(this,n,x.COMPUTE,j,t,r);C(this,"__computeInfo")[t]=o}_marshalArgs(t,e,r){const n=this.__data,o=[];for(let s=0,a=t.length;s<a;s++){let{name:a,structured:l,wildcard:c,value:d,literal:u}=t[s];if(!u)if(c){const t=Object(i.c)(a,e),o=J(n,r,t?e:a);d={path:t?e:a,value:o,base:t?Object(i.a)(n,a):o}}else d=l?J(n,r,a):n[a];if(b.f&&!this._overrideLegacyUndefined&&void 0===d&&t.length>1)return y;o[s]=d}return o}static addPropertyEffect(t,e,r){this.prototype._addPropertyEffect(t,e,r)}static createPropertyObserver(t,e,r){this.prototype._createPropertyObserver(t,e,r)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,r){this.prototype._createComputedProperty(t,e,r)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let r=this.constructor._parseTemplate(t),n=this.__preBoundTemplateInfo==r;if(!n)for(let t in r.propertyEffects)this._createPropertyAccessor(t);if(e)if(r=Object.create(r),r.wasPreBound=n,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,n=e.lastChild;r.parent=e,e.lastChild=r,r.previousSibling=n,n?n.nextSibling=r:e.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(t,e,r){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(r)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),Z.push(this);let r=super._stampTemplate(t,e);if(Z.pop(),e.nodeList=r.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=r.firstChild;e;e=e.nextSibling)t.push(e)}return r.templateInfo=e,function(t,e){let{nodeList:r,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let o=n[e],i=r[e],s=o.bindings;if(s)for(let e=0;e<s.length;e++){let r=s[e];R(i,r),F(i,t,r)}i.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:r,nextSibling:o,parent:i}=e;r?r.nextSibling=o:i&&(i.firstChild=o),o?o.previousSibling=r:i&&(i.lastChild=r),e.nextSibling=e.previousSibling=null;let s=e.childNodes;for(let t=0;t<s.length;t++){let e=s[t];Object(n.a)(Object(n.a)(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,r,n){let o=e._parseTemplateNode.call(this,t,r,n);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,r);e&&(t.textContent=Y(e)||" ",L(this,r,n,"text","textContent",e),o=!0)}return o}static _parseTemplateNodeAttribute(t,r,n,o,i){let a=this._parseBindings(i,r);if(a){let e=o,i="property";w.test(o)?i="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),i="attribute");let l=Y(a);return l&&"attribute"==i&&("class"==o&&t.hasAttribute("class")&&(l+=" "+t.getAttribute(o)),t.setAttribute(o,l)),"attribute"==i&&"disable-upgrade$"==e&&t.setAttribute(o,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(o=Object(s.b)(o)),L(this,r,n,i,o,a,l),!0}return e._parseTemplateNodeAttribute.call(this,t,r,n,o,i)}static _parseTemplateNestedTemplate(t,r,n){let o=e._parseTemplateNestedTemplate.call(this,t,r,n);const i=t.parentNode,s=n.templateInfo,a="dom-if"===i.localName,l="dom-repeat"===i.localName;b.j&&(a||l)&&(i.removeChild(t),(n=n.parentInfo).templateInfo=s,n.noted=!0,o=!1);let c=s.hostProps;if(b.c&&a)c&&(r.hostProps=Object.assign(r.hostProps||{},c),b.j||(n.parentInfo.noted=!0));else{let t="{";for(let e in c){L(this,r,n,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return o}static _parseBindings(t,e){let r,n=[],o=0;for(;null!==(r=U.exec(t));){r.index>o&&n.push({literal:t.slice(o,r.index)});let i=r[1][0],s=Boolean(r[2]),a=r[3].trim(),l=!1,c="",d=-1;"{"==i&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let u=G(a),h=[];if(u){let{args:t,methodName:r}=u;for(let e=0;e<t.length;e++){let r=t[e];r.literal||h.push(r)}let n=e.dynamicFns;(n&&n[r]||u.static)&&(h.push(r),u.dynamicFn=!0)}else h.push(a);n.push({source:a,mode:i,negate:s,customEvent:l,signature:u,dependencies:h,event:c}),o=U.lastIndex}if(o&&o<t.length){let e=t.substring(o);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,r,n,o,s){let a;return a=e.signature?V(t,r,n,0,e.signature):r!=e.source?Object(i.a)(t,e.source):s&&Object(i.d)(r)?Object(i.a)(t,r):t.__data[r],e.negate&&(a=!a),a}}}),Z=[]},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(15),o=r(30),i=r(54);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class s extends i.a{constructor(t){super(t,"label",()=>document.createElement("label"),(t,e)=>{this.__updateLabelId(e),this.__updateDefaultLabel(this.label),this.__observeLabel(e)})}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e));const r=this.__hasLabel(e);this.__toggleHasLabel(r)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__observeLabel(t){this.__labelObserver=new MutationObserver(t=>{t.forEach(t=>{const e=t.target,r=e===this.node;if("attributes"===t.type)r&&e.id!==this.defaultId&&this.__updateLabelId(e);else if(r||e.parentElement===this.node){const t=this.__hasLabel(this.node);this.__toggleHasLabel(t)}})}),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const a=Object(n.a)(t=>class extends(Object(o.a)(t)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new s(this),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}})},function(t,e,r){"use strict";r(110),r(32);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=document.createElement("template");n.innerHTML='<vaadin-iconset name="lumo" size="1000">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</vaadin-iconset>',document.head.appendChild(n.content)},function(t,e,r){"use strict";r(70),r(59)},function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(16);var n=r(15),o=r(93),i=r(112);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s={};let a=HTMLElement.prototype;for(;a;){let t=Object.getOwnPropertyNames(a);for(let e=0;e<t.length;e++)s[t[e]]=!0;a=Object.getPrototypeOf(a)}const l=Object(n.a)(t=>{const e=Object(i.a)(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Object(o.b)(t[e]))}static attributeNameForProperty(t){return Object(o.a)(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const r=this;r.hasAttribute(t)||this._valueToNodeAttribute(r,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let r;switch(e){case Object:try{r=JSON.parse(t)}catch(e){r=t}break;case Array:try{r=JSON.parse(t)}catch(e){r=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:r=isNaN(t)?String(t):Number(t),r=new Date(r);break;default:r=super._deserializeValue(t,e)}return r}_definePropertyAccessor(t,e){!function(t,e){if(!s[e]){let r=t[e];void 0!==r&&(t.__data?t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r(16);var n=r(15),o=r(25),i=r(24);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=o.c,a=Object(n.a)(t=>class extends t{static createProperties(t){const e=this.prototype;for(let r in t)r in e||e._createPropertyAccessor(r)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,r){let n=this.__data[t],o=this._shouldPropertyChange(t,e,n);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),o}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(t,e,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,r)),this.__dataCounter--}_shouldPropertiesChange(t,e,r){return Boolean(e)}_propertiesChanged(t,e,r){}_shouldPropertyChange(t,e,r){return r!==e&&(r==r||e==e)}attributeChangedCallback(t,e,r,n){e!==r&&this._attributeToProperty(t,r),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,r,n)}_attributeToProperty(t,e,r){if(!this.__serializing){const n=this.__dataAttributes,o=n&&n[t]||t;this[o]=this._deserializeValue(e,r||this.constructor.typeForProperty(o))}}_propertyToAttribute(t,e,r){this.__serializing=!0,r=arguments.length<3?this[t]:r,this._valueToNodeAttribute(this,r,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,r){const n=this._serializeValue(e);"class"!==r&&"name"!==r&&"slot"!==r||(t=Object(i.a)(t)),void 0===n?t.removeAttribute(r):t.setAttribute(r,n)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}));function n(){0}const o=[];function i(t){o.push(t)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class n{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,r){const{scrollLeft:n}=r;if("rtl"!==e||!t)return n;switch(t){case"negative":return r.scrollWidth-r.clientWidth+n;case"reverse":return r.scrollWidth-r.clientWidth-n;default:return n}}static setNormalizedScrollLeft(t,e,r,n){if("rtl"===e&&t)switch(t){case"negative":r.scrollLeft=r.clientWidth-r.scrollWidth+n;break;case"reverse":r.scrollLeft=r.scrollWidth-r.clientWidth-n;break;default:r.scrollLeft=n}else r.scrollLeft=n}}},function(t,e,r){"use strict";
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function n(t){return t?new Set(t.split(" ")):new Set}function o(t){return[...t].join(" ")}function i(t,e,r){const i=n(t.getAttribute(e));i.add(r),t.setAttribute(e,o(i))}function s(t,e,r){const i=n(t.getAttribute(e));i.delete(r),0!==i.size?t.setAttribute(e,o(i)):t.removeAttribute(e)}r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(15);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(n.a)(t=>class extends t{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!this.required||!!this.value}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(15),o=r(118),i=r(75),s=r(116);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=Object(n.a)(t=>class extends(Object(o.a)(Object(s.a)(Object(i.a)(t)))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(t=>this.__isValidConstraint(t))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(${this.constructor.constraints.join(", ")})`)}_constraintsChanged(...t){this.invalid&&(this._hasValidConstraints(t)?this.validate():this.invalid=!1)}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||0===t}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(15);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=Object(n.a)(t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((e,r)=>{this._delegateAttribute(e,t[r])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((e,r)=>{this._delegateProperty(e,t[r])})}_delegateAttribute(t,e){this.stateTarget&&("invalid"===t&&this._delegateAttribute("aria-invalid",!!e&&"true"),"boolean"==typeof e?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r(3).c`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r(3).c`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(15);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o=new WeakMap;const i=Object(n.a)(t=>class extends t{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=function(t){return o.has(t)||o.set(t,new Set),o.get(t)}(t);this.slotStyles.forEach(r=>{e.has(r)||(!function(t,e){const r=document.createElement("style");r.textContent=t,e===document?document.head.appendChild(r):e.insertBefore(r,e.firstChild)}(r,t),e.add(r))})}})},function(t,e,r){"use strict";r(9);var n=r(10),o=r(14),i=r(7);const s=i.c`
  :host {
    max-width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='form'] {
    padding: var(--lumo-space-l);
  }

  [part='form-title'] {
    margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
  }

  #forgotPasswordButton {
    margin: var(--lumo-space-s) auto;
  }

  [part='error-message'] {
    background-color: var(--lumo-error-color-10pct);
    padding: var(--lumo-space-m);
    border-radius: var(--lumo-border-radius-m);
    margin-top: var(--lumo-space-m);
    margin-bottom: var(--lumo-space-s);
    color: var(--lumo-error-text-color);
  }

  :host(:not([dir='rtl'])) [part='error-message'] {
    padding-left: var(--lumo-size-m);
  }

  :host([dir='rtl']) [part='error-message'] {
    padding-right: var(--lumo-size-m);
  }

  [part='error-message']::before {
    content: var(--lumo-icons-error);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    position: absolute;
    width: var(--lumo-size-m);
    height: 1em;
    line-height: 1;
    text-align: center;
  }

  :host(:not([dir='rtl'])) [part='error-message']::before {
    /* Visual centering */
    margin-left: calc(var(--lumo-size-m) * -0.95);
  }

  :host([dir='rtl']) [part='error-message']::before {
    /* Visual centering */
    margin-right: calc(var(--lumo-size-m) * -0.95);
  }

  [part='error-message-title'] {
    margin: 0 0 0.25em;
    color: inherit;
  }

  [part='error-message-description'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
    margin: 0;
    opacity: 0.9;
  }

  [part='footer'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-secondary-text-color);
  }
`;Object(i.d)("vaadin-login-form-wrapper",[n.a,o.a,s],{moduleId:"lumo-login-form-wrapper"})},function(t,e,r){"use strict";r(35);var n=r(8),o=r(11),i=r(7),s=r(97);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class a extends(Object(s.a)(Object(o.a)(Object(i.a)(n.a)))){static get template(){return n.b`
      <style>
        :host {
          overflow: hidden;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='form'] {
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        [part='form-title'] {
          margin: 0;
        }

        [part='error-message'] {
          position: relative;
        }
      </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form"></slot>

        <vaadin-button
          id="forgotPasswordButton"
          theme="tertiary small forgot-password"
          on-click="_forgotPassword"
          hidden$="[[noForgotPassword]]"
          >[[i18n.form.forgotPassword]]</vaadin-button
        >

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
    `}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(a.is,a)},function(t,e,r){"use strict";r(73),r(181),r(123);var n=r(8),o=r(11),i=r(7),s=r(97);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class a extends(Object(s.a)(Object(o.a)(Object(i.a)(n.a)))){static get template(){return n.b`
      <style>
        [part='vaadin-login-native-form'] * {
          width: 100%;
        }
      </style>
      <vaadin-login-form-wrapper
        theme$="[[theme]]"
        part="vaadin-login-native-form-wrapper"
        action="{{action}}"
        disabled="{{disabled}}"
        error="{{error}}"
        no-forgot-password="{{noForgotPassword}}"
        i18n="{{i18n}}"
        on-login="_retargetEvent"
        on-forgot-password="_retargetEvent"
      >
        <form part="vaadin-login-native-form" method="POST" action$="[[action]]" slot="form">
          <input id="csrf" type="hidden" />
          <vaadin-text-field
            name="username"
            label="[[i18n.form.username]]"
            id="vaadinLoginUsername"
            required
            on-keydown="_handleInputKeydown"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
          >
            <input type="text" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-text-field>

          <vaadin-password-field
            name="password"
            label="[[i18n.form.password]]"
            id="vaadinLoginPassword"
            required
            on-keydown="_handleInputKeydown"
            spellcheck="false"
            autocomplete="current-password"
          >
            <input type="password" slot="input" on-keyup="_handleInputKeyup" />
          </vaadin-password-field>

          <vaadin-button part="vaadin-login-submit" theme="primary contained" on-click="submit" disabled$="[[disabled]]"
            >[[i18n.form.submit]]</vaadin-button
          >
        </form>
      </vaadin-login-form-wrapper>
    `}static get is(){return"vaadin-login-form"}connectedCallback(){super.connectedCallback(),this._handleInputKeydown=this._handleInputKeydown.bind(this),this.noAutofocus||this.$.vaadinLoginUsername.focus()}_attachDom(t){this.appendChild(t)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){if(this.disabled||!this.__isValid(this.$.vaadinLoginUsername)||!this.__isValid(this.$.vaadinLoginPassword))return;this.error=!1,this.disabled=!0;const t={bubbles:!0,cancelable:!0,detail:{username:this.$.vaadinLoginUsername.value,password:this.$.vaadinLoginPassword.value}},e=this.dispatchEvent(new CustomEvent("login",t));if(this.action&&e){const t=document.querySelector("meta[name=_csrf_parameter]"),e=document.querySelector("meta[name=_csrf]");t&&e&&(this.$.csrf.name=t.content,this.$.csrf.value=e.content),this.querySelector('[part="vaadin-login-native-form"]').submit()}}__isValid(t){return t.validate&&t.validate()||t.checkValidity&&t.checkValidity()}_isEnterKey(t){return"Enter"===t.key||13===t.keyCode}_handleInputKeydown(t){if(this._isEnterKey(t)){const{currentTarget:e}=t,r="vaadinLoginUsername"===e.id?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;this.__isValid(e)&&(this.__isValid(r)?this.submit():r.focus())}}_handleInputKeyup(t){const e="Tab"===t.key||9===t.keyCode,r=t.currentTarget;e&&r&&r.select&&(r.select(),setTimeout(()=>r.setSelectionRange(0,9999)))}}customElements.define(a.is,a)},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r(16);var n=r(15),o=r(126);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const i=Object(n.a)(t=>class extends t{_addEventListenerToNode(t,e,r){Object(o.a)(t,e,r)||super._addEventListenerToNode(t,e,r)}_removeEventListenerFromNode(t,e,r){Object(o.b)(t,e,r)||super._removeEventListenerFromNode(t,e,r)}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return I})),r.d(e,"b",(function(){return M})),r.d(e,"c",(function(){return j}));r(16);var n=r(25),o=r(26),i=r(22),s=r(24);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let a="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",c="__polymerGesturesTouchAction",d=["mousedown","mousemove","mouseup","click"],u=[0,1,4,2],h=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function p(t){return d.indexOf(t)>-1}let m=!1;function f(t){if(!p(t)&&"touchend"!==t)return a&&m&&i.i?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){m=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let _=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const g=[],b={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},v={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function y(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let r=t.getRootNode();if(t.id){let n=r.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let x=function(t){let e=t.sourceCapabilities;var r;if((!e||e.firesTouchEvents)&&(t[l]={skip:!0},"click"===t.type)){let e=!1,n=S(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)g.push(n[t]);else if(r=n[t],b[r.localName]){let r=y(n[t]);for(let t=0;t<r.length;t++)e=e||g.indexOf(r[t])>-1}if(n[t]===O.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function w(t){let e=_?["click"]:d;for(let r,n=0;n<e.length;n++)r=e[n],t?(g.length=0,document.addEventListener(r,x,!0)):document.removeEventListener(r,x,!0)}function C(t){let e=t.type;if(!p(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!h&&(e=u[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let O={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function A(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function P(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}i.b&&document.addEventListener("touchend",(function(t){if(!i.b)return;O.mouse.mouseIgnoreJob||w(!0),O.mouse.target=S(t)[0],O.mouse.mouseIgnoreJob=o.a.debounce(O.mouse.mouseIgnoreJob,n.d.after(2500),(function(){w(),O.mouse.target=null,O.mouse.mouseIgnoreJob=null}))}),!!m&&{passive:!0});const S=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],E={},z=[];function k(t){const e=S(t);return e.length>0?e[0]:t.target}function T(t){let e,r=t.type,n=t.currentTarget.__polymerGestures;if(!n)return;let o=n[r];if(o){if(!t[l]&&(t[l]={},"touch"===r.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===r&&1===t.touches.length&&(O.touch.id=e.identifier),O.touch.id!==e.identifier)return;a||"touchstart"!==r&&"touchmove"!==r||function(t){let e=t.changedTouches[0],r=t.type;if("touchstart"===r)O.touch.x=e.clientX,O.touch.y=e.clientY,O.touch.scrollDecided=!1;else if("touchmove"===r){if(O.touch.scrollDecided)return;O.touch.scrollDecided=!0;let r=function(t){let e="auto",r=S(t);for(let t,n=0;n<r.length;n++)if(t=r[n],t[c]){e=t[c];break}return e}(t),n=!1,o=Math.abs(O.touch.x-e.clientX),i=Math.abs(O.touch.y-e.clientY);t.cancelable&&("none"===r?n=!0:"pan-x"===r?n=i>o:"pan-y"===r&&(n=o>i)),n?t.preventDefault():H("track")}}(t)}if(e=t[l],!e.skip){for(let r,n=0;n<z.length;n++)r=z[n],o[r.name]&&!e[r.name]&&r.flow&&r.flow.start.indexOf(t.type)>-1&&r.reset&&r.reset();for(let n,i=0;i<z.length;i++)n=z[i],o[n.name]&&!e[n.name]&&(e[n.name]=!0,n[r](t))}}}function I(t,e,r){return!!E[e]&&(function(t,e,r){let n=E[e],o=n.deps,i=n.name,s=t.__polymerGestures;s||(t.__polymerGestures=s={});for(let e,r,n=0;n<o.length;n++)e=o[n],_&&p(e)&&"click"!==e||(r=s[e],r||(s[e]=r={_count:0}),0===r._count&&t.addEventListener(e,T,f(e)),r[i]=(r[i]||0)+1,r._count=(r._count||0)+1);t.addEventListener(e,r),n.touchAction&&j(t,n.touchAction)}(t,e,r),!0)}function M(t,e,r){return!!E[e]&&(function(t,e,r){let n=E[e],o=n.deps,i=n.name,s=t.__polymerGestures;if(s)for(let e,r,n=0;n<o.length;n++)e=o[n],r=s[e],r&&r[i]&&(r[i]=(r[i]||1)-1,r._count=(r._count||1)-1,0===r._count&&t.removeEventListener(e,T,f(e)));t.removeEventListener(e,r)}(t,e,r),!0)}function N(t){z.push(t);for(let e=0;e<t.emits.length;e++)E[t.emits[e]]=t}function j(t,e){a&&t instanceof HTMLElement&&n.c.run(()=>{t.style.touchAction=e}),t[c]=e}function L(t,e,r){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=r,Object(s.a)(t).dispatchEvent(n),n.defaultPrevented){let t=r.preventer||r.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function H(t){let e=function(t){for(let e,r=0;r<z.length;r++){e=z[r];for(let r,n=0;n<e.emits.length;n++)if(r=e.emits[n],r===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function D(t,e,r,n){e&&L(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:n,prevent:function(t){return H(t)}})}function R(t,e,r){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),o=Math.abs(t.y-r);return n>=5||o>=5}function F(t,e,r){if(!e)return;let n,o=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],s=i.x-t.x,a=i.y-t.y,l=0;o&&(n=i.x-o.x,l=i.y-o.y),L(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:s,dy:a,ddx:n,ddy:l,sourceEvent:r,hover:function(){return function(t,e){let r=document.elementFromPoint(t,e),n=r;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let o=n;if(n=n.shadowRoot.elementFromPoint(t,e),o===n)break;n&&(r=n)}return r}(r.clientX,r.clientY)}})}function B(t,e,r){let n=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),i=k(r||e);!i||v[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(o)||n<=25&&o<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=k(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let r=e.getBoundingClientRect(),n=t.pageX,o=t.pageY;return!(n>=r.left&&n<=r.right&&o>=r.top&&o<=r.bottom)}return!1}(e))&&(t.prevent||L(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}N({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){P(this.info)},mousedown:function(t){if(!C(t))return;let e=k(t),r=this;A(this.info,(function(t){C(t)||(D("up",e,t),P(r.info))}),(function(t){C(t)&&D("up",e,t),P(r.info)})),D("down",e,t)},touchstart:function(t){D("down",k(t),t.changedTouches[0],t)},touchend:function(t){D("up",k(t),t.changedTouches[0],t)}}),N({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,P(this.info)},mousedown:function(t){if(!C(t))return;let e=k(t),r=this,n=function(t){let n=t.clientX,o=t.clientY;R(r.info,n,o)&&(r.info.state=r.info.started?"mouseup"===t.type?"end":"track":"start","start"===r.info.state&&H("tap"),r.info.addMove({x:n,y:o}),C(t)||(r.info.state="end",P(r.info)),e&&F(r.info,e,t),r.info.started=!0)};A(this.info,n,(function(t){r.info.started&&n(t),P(r.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=k(t),r=t.changedTouches[0],n=r.clientX,o=r.clientY;R(this.info,n,o)&&("start"===this.info.state&&H("tap"),this.info.addMove({x:n,y:o}),F(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=k(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),F(this.info,e,r))}}),N({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){C(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){C(t)&&B(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){B(this.info,t.changedTouches[0],t)}})},function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return a}));var n=r(67),o=r(15),i=r(24);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const s=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]},a=Object(o.a)(t=>{const e=Object(n.a)(t);let r=s(e);return class extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}attributeChangedCallback(t,e,r,n){"disable-upgrade"==t?this.__isUpgradeDisabled&&null==r&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,Object(i.a)(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,r,n)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}})},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(50);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const o={templatize(t,e){this._templatizerTemplate=t,this.ctor=Object(n.c)(t,this,{mutableData:Boolean(e),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(t){return new this.ctor(t)},modelForElement(t){return Object(n.a)(this._templatizerTemplate,t)}}},function(t,e,r){"use strict";var n=r(8),o=r(26),i=r(49),s=r(25),a=r(62),l=r(24),c=r(101),d=r(22),u=r(50);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class h extends n.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,s.c,()=>this.__render()),Object(i.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Object(l.a)(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(l.a)(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Object(c.a)()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:Object(l.a)(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!Object(l.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=Object(l.a)(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length){if(Object(l.a)(this).previousSibling!==e[e.length-1])for(let r,n=0;n<e.length&&(r=e[n]);n++)Object(l.a)(t).insertBefore(r,this)}}else{if(!t)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Object(i.b)()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),d.p&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const p=d.c?class extends h{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(d.n&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const r=e._bindTemplate(this.__template,!0);r.runEffects=(t,e,r)=>{let n=this.__syncInfo;if(this.if)n&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(n.changedProps,e)),t(e,r);else if(this.__instance)if(n||(n=this.__syncInfo={runEffects:t,changedProps:{}}),r)for(const t in e){const e=Object(a.g)(t);n.changedProps[e]=this.__dataHost[e]}else Object.assign(n.changedProps,e)},this.__instance=e._stampTemplate(this.__template,r),Object(l.a)(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Object(u.b)(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class extends h{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Object(u.c)(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(a.g)(t)]=!0))}})),this.__instance=new this.__ctor,Object(l.a)(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Object(l.a)(t[0]).parentNode;if(e){e=Object(l.a)(e);for(let r,n=0;n<t.length&&(r=t[n]);n++)e.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(p.is,p)},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(79);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o;o=n.a._mutablePropertyChange;const i={properties:{mutableData:Boolean},_shouldPropertyChange(t,e,r){return o(this,t,e,r,this.mutableData)}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(45);var n=r(61);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class o{constructor(t){o[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return o.types[t]&&o.types[t][e]}set value(t){var e=this.type,r=this.key;e&&r&&(e=o.types[e]=o.types[e]||{},null==t?delete e[r]:e[r]=t)}get list(){if(this.type){var t=o.types[this.type];return t?Object.keys(t).map((function(t){return i[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}o[" "]=function(){},o.types={};var i=o.types;Object(n.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,r){var n=new o({type:t,key:e});return void 0!==r&&r!==n.value?n.value=r:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new o({type:this.type,key:t}).value}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return n.a})),r.d(e,"b",(function(){return o.a}));r(53),r(37),r(38),r(39),r(12);var n=r(10),o=r(14),i=r(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=i.c`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon,
  [theme~='badge'] iron-icon {
    margin: -0.25em 0;
    --iron-icon-width: 1.5em;
    --iron-icon-height: 1.5em;
  }

  [theme~='badge'] vaadin-icon:first-child,
  [theme~='badge'] iron-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child,
  [theme~='badge'] iron-icon:last-child {
    margin-right: -0.375em;
  }

  iron-icon[theme~='badge'][icon],
  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  iron-icon[theme~='badge'][icon][theme~='small'],
  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child,
  [dir='rtl'][theme~='badge'] iron-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child,
  [dir='rtl'][theme~='badge'] iron-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Object(i.d)("",s,{moduleId:"lumo-badge"});r(18),r(13),r(9),r(69);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=i.c`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`,l=i.c`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }
`,c=i.c`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`,d=i.c`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`,u=i.c`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`,h=i.c`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`,p=i.c`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`,m=i.c`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`,f=i.c`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`,_=i.c`
${a}
${l}
${c}
${h}
${d}
${u}
${p}
${m}
${f}
`;
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Object(i.d)("",_,{moduleId:"lumo-utility"});r(109);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},function(t,e,r){"use strict";r.d(e,"a",(function(){return gt}));var n=r(98);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class o{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function i(t){return function t(e,r){let n=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;n=r.substring(t,e.start-1),n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(n),n=n.replace(d.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let o=e.parsedSelector=e.selector=n.trim();e.atRule=0===o.indexOf(p),e.atRule?0===o.indexOf(h)?e.type=a.MEDIA_RULE:o.match(d.keyframesRule)&&(e.type=a.KEYFRAMES_RULE,e.keyframesName=e.selector.split(d.multipleSpaces).pop()):0===o.indexOf(u)?e.type=a.MIXIN_RULE:e.type=a.STYLE_RULE}let o=e.rules;if(o)for(let e,n=0,i=o.length;n<i&&(e=o[n]);n++)t(e,r);return e}(function(t){let e=new o;e.start=0,e.end=t.length;let r=e;for(let n=0,i=t.length;n<i;n++)if(t[n]===l){r.rules||(r.rules=[]);let t=r,e=t.rules[t.rules.length-1]||null;r=new o,r.start=n+1,r.parent=t,r.previous=e,t.rules.push(r)}else t[n]===c&&(r.end=n+1,r=r.parent||e);return e}(t=t.replace(d.comments,"").replace(d.port,"")),t)}function s(t,e,r=""){let n="";if(t.cssText||t.rules){let r=t.rules;if(r&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(u)}(r))for(let t,o=0,i=r.length;o<i&&(t=r[o]);o++)n=s(t,e,n);else n=e?t.cssText:function(t){return function(t){return t.replace(d.mixinApply,"").replace(d.varApply,"")}(t=function(t){return t.replace(d.customProp,"").replace(d.mixinProp,"")}(t))}(t.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(t.selector&&(r+=t.selector+" "+l+"\n"),r+=n,t.selector&&(r+=c+"\n\n")),r}const a={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",c="}",d={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},u="--",h="@media",p="@";var m=r(99);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const f=new Set;function _(t){const e=t.textContent;if(!f.has(e)){f.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function g(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function b(t,e){return t?("string"==typeof t&&(t=i(t)),e&&y(t,e),s(t,n.c)):""}function v(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=i(t.textContent)),t.__cssRules||null}function y(t,e,r,n){if(!t)return;let o=!1,i=t.type;if(n&&i===a.MEDIA_RULE){let e=t.selector.match(m.a);e&&(window.matchMedia(e[1]).matches||(o=!0))}i===a.STYLE_RULE?e(t):r&&i===a.KEYFRAMES_RULE?r(t):i===a.MIXIN_RULE&&(o=!0);let s=t.rules;if(s&&!o)for(let t,o=0,i=s.length;o<i&&(t=s[o]);o++)y(t,e,r,n)}function x(t,e){let r=0;for(let n=e,o=t.length;n<o;n++)if("("===t[n])r++;else if(")"===t[n]&&0==--r)return n;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function w(t){if(void 0!==n.a)return n.a;if(void 0===t.__cssBuild){const e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}(t),t.__cssBuild=e}}return t.__cssBuild||""}function C(t){return""!==w(t)}var O=r(100);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const A=/;\s*/m,P=/^\s*(initial)|(inherit)\s*$/,S=/\s*!important/;class E{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let z=null;class k{constructor(){this._currentElement=null,this._measureElement=null,this._map=new E}detectMixin(t){return Object(O.a)(t)}gatherStyles(t){const e=function(t){const e=[],r=t.querySelectorAll("style");for(let t=0;t<r.length;t++){const o=r[t];g(o)?n.d||(_(o),o.parentNode.removeChild(o)):(e.push(o.textContent),o.parentNode.removeChild(o))}return e.join("").trim()}(t.content);if(e){const r=document.createElement("style");return r.textContent=e,t.content.insertBefore(r,t.content.firstChild),r}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const r=t._gatheredStyle;return r?this.transformStyle(r,e):null}transformStyle(t,e=""){let r=v(t);return this.transformRules(r,e),t.textContent=b(r),r}transformCustomStyle(t){let e=v(t);return y(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=b(e),e}transformRules(t,e){this._currentElement=e,y(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(m.c,(t,r,n,o)=>this._produceCssProperties(t,r,n,o,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const r={};let n=!1;return y(e,e=>{n=n||e===t,n||e.selector===t.selector&&Object.assign(r,this._cssTextToMap(e.parsedCssText))}),r}_consumeCssProperties(t,e){let r=null;for(;r=m.b.exec(t);){let n=r[0],o=r[1],i=r.index,s=i+n.indexOf("@apply"),a=i+n.length,l=t.slice(0,s),c=t.slice(a),d=e?this._fallbacksFromPreviousRules(e):{};Object.assign(d,this._cssTextToMap(l));let u=this._atApplyToCssProperties(o,d);t=`${l}${u}${c}`,m.b.lastIndex=i+u.length}return t}_atApplyToCssProperties(t,e){t=t.replace(A,"");let r=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){let o,i,s;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(o in a)s=e&&e[o],i=[o,": var(",t,"_-_",o],s&&i.push(",",s.replace(S,"")),i.push(")"),S.test(a[o])&&i.push(" !important"),r.push(i.join(""))}return r.join("; ")}_replaceInitialOrInherit(t,e){let r=P.exec(e);return r&&(e=r[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let r,n,o=t.split(";"),i={};for(let t,s,a=0;a<o.length;a++)t=o[a],t&&(s=t.split(":"),s.length>1&&(r=s[0].trim(),n=s.slice(1).join(":"),e&&(n=this._replaceInitialOrInherit(r,n)),i[r]=n));return i}_invalidateMixinEntry(t){if(z)for(let e in t.dependants)e!==this._currentElement&&z(e)}_produceCssProperties(t,e,r,n,o){if(r&&function t(e,r){let n=e.indexOf("var(");if(-1===n)return r(e,"","","");let o=x(e,n+3),i=e.substring(n+4,o),s=e.substring(0,n),a=t(e.substring(o+1),r),l=i.indexOf(",");return-1===l?r(s,i.trim(),"",a):r(s,i.substring(0,l).trim(),i.substring(l+1).trim(),a)}(r,(t,e)=>{e&&this._map.get(e)&&(n=`@apply ${e};`)}),!n)return t;let i=this._consumeCssProperties(""+n,o),s=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(i,!0),l=a,c=this._map.get(e),d=c&&c.properties;d?l=Object.assign(Object.create(d),a):this._map.set(e,l);let u,h,p=[],m=!1;for(u in l)h=a[u],void 0===h&&(h="initial"),d&&!(u in d)&&(m=!0),p.push(`${e}_-_${u}: ${h}`);return m&&this._invalidateMixinEntry(c),c&&(c.properties=l),r&&(s=`${t};${s}`),`${s}${p.join("; ")};`}}k.prototype.detectMixin=k.prototype.detectMixin,k.prototype.transformStyle=k.prototype.transformStyle,k.prototype.transformCustomStyle=k.prototype.transformCustomStyle,k.prototype.transformRules=k.prototype.transformRules,k.prototype.transformRule=k.prototype.transformRule,k.prototype.transformTemplate=k.prototype.transformTemplate,k.prototype._separator="_-_",Object.defineProperty(k.prototype,"invalidCallback",{get:()=>z,set(t){z=t}});var T=k;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var I={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const M="_applyShimCurrentVersion",N="_applyShimNextVersion",j=Promise.resolve();function L(t){let e=I[t];e&&function(t){t[M]=t[M]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[N]=(t[N]||0)+1}(e)}function H(t){return t[M]===t[N]}function D(t){return!H(t)&&t._applyShimValidatingVersion===t[N]}function R(t){t._applyShimValidatingVersion=t[N],t._validating||(t._validating=!0,j.then((function(){t[M]=t[N],t._validating=!1})))}r(191);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const F=new T;class B{constructor(){this.customStyleInterface=null,F.invalidCallback=L}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{F.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),C(t))return;I[e]=t;let r=F.transformTemplate(t,e);t._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let r=t[e],n=this.customStyleInterface.getStyleForCustomStyle(r);n&&F.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Object(O.c)(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,r="",n="";return e?e.indexOf("-")>-1?r=e:(n=e,r=t.getAttribute&&t.getAttribute("is")||""):(r=t.is,n=t.extends),{is:r,typeExtension:n}}(t),r=I[e];if((!r||!C(r))&&r&&!H(r)){D(r)||(this.prepareTemplate(r,e),R(r));let n=t.shadowRoot;if(n){let t=n.querySelector("style");t&&(t.__cssRules=r._styleAst,t.textContent=b(r._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new B;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,r,n){t.flushCustomStyles(),t.prepareTemplate(e,r)},prepareTemplateStyles(t,e,r){window.ShadyCSS.prepareTemplate(t,e,r)},prepareTemplateDom(t,e){},styleSubtree(e,r){t.flushCustomStyles(),t.styleSubtree(e,r)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Object(O.b)(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:n.c,nativeShadow:n.d,cssBuild:n.a,disableRuntime:n.b},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=F;var V=r(67),q=r(125),U=r(111),Y=r(15);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const G=/:host\(:dir\((ltr|rtl)\)\)/g,$=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,J=/:dir\((?:ltr|rtl)\)/,W=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),K=[];let X=null,Z="";function Q(){Z=document.documentElement.getAttribute("dir")}function tt(t){if(!t.__autoDirOptOut){t.setAttribute("dir",Z)}}function et(){Q(),Z=document.documentElement.getAttribute("dir");for(let t=0;t<K.length;t++)tt(K[t])}const rt=Object(Y.a)(t=>{W||X||(Q(),X=new MutationObserver(et),X.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Object(U.a)(t);class r extends e{static _processStyleText(t,r){return t=e._processStyleText.call(this,t,r),!W&&J.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(G,':host([dir="$1"])'),e=e.replace($,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(X&&X.takeRecords().length&&et(),K.push(this),tt(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=K.indexOf(this);t>-1&&K.splice(t,1)}}}return r.__activateDir=!1,r});r(48);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function nt(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?nt():window.addEventListener("DOMContentLoaded",nt);var ot=r(57),it=r(126),st=r(26),at=r(25),lt=r(62),ct=r(24);r(16);
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const dt=window.ShadyDOM,ut=window.ShadyCSS;function ht(t,e){return Object(ct.a)(t).getRootNode()===e}var pt=r(22),mt=r(127),ft=r(113);let _t=window.ShadyCSS;const gt=Object(Y.a)(t=>{const e=Object(q.a)(Object(V.a)(t)),r=V.b?e:rt(e),n=Object(mt.b)(r),o={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends r{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(t,e,r){(this.__dataAttributes&&this.__dataAttributes[t]||"disable-upgrade"===t)&&this.attributeChangedCallback(t,e,r,null)}setAttribute(t,e){if(pt.d&&!this._legacyForceObservedAttributes){const r=this.getAttribute(t);super.setAttribute(t,e),this.__attributeReaction(t,r,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(pt.d&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return pt.d&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],Object(ft.b)(this.prototype)),this.__observedAttributes):n.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,r,n){e!==r&&("disable-upgrade"==t?this.__isUpgradeDisabled&&null==r&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,Object(ct.a)(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,r,n),this.attributeChanged(t,e,r)))}attributeChanged(t,e,r){}_initializeProperties(){if(pt.e&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),pt.d&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,r=t.length;e<r;e++){const r=t[e];this.__attributeReaction(r.name,null,r.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,r){this._propertyToAttribute(t,e,r)}serializeValueToAttribute(t,e,r){this._valueToNodeAttribute(r||this,t,e)}extend(t,e){if(!t||!e)return t||e;let r=Object.getOwnPropertyNames(e);for(let n,o=0;o<r.length&&(n=r[o]);o++){let r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(t,n,r)}return t}mixin(t,e){for(let r in e)t[r]=e[r];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,r){r=r||{},e=null==e?{}:e;let n=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});n.detail=e;let o=r.node||this;return Object(ct.a)(o).dispatchEvent(n),n}listen(t,e,r){t=t||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),o=n.get(t);o||(o={},n.set(t,o));let i=e+r;o[i]||(o[i]=this._addMethodEventListenerToNode(t,e,r,this))}unlisten(t,e,r){t=t||this;let n=this.__boundListeners&&this.__boundListeners.get(t),o=e+r,i=n&&n[o];i&&(this._removeEventListenerFromNode(t,e,i),n[o]=null)}setScrollDirection(t,e){Object(it.c)(e||this,o[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Object(ct.a)(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Object(ot.a)(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(ot.a)(this).getEffectiveChildNodes()}queryDistributedElements(t){return Object(ot.a)(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let r,n=0;r=t[n];n++)r.nodeType!==Node.COMMENT_NODE&&e.push(r.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Object(ot.a)(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Object(ct.a)(this).contains(t)&&Object(ct.a)(this).getRootNode()===Object(ct.a)(t).getRootNode()}isLocalDescendant(t){return this.root===Object(ct.a)(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!dt||!ut)return null;if(!dt.handlesDynamicScoping)return null;const r=ut.ScopingShim;if(!r)return null;const n=r.scopeForNode(t),o=Object(ct.a)(t).getRootNode(),i=t=>{if(!ht(t,o))return;const e=Array.from(dt.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const i=e[t];if(!ht(i,o))continue;const s=r.currentScopeForNode(i);s!==n&&(""!==s&&r.unscopeNode(i,s),r.scopeNode(i,n))}};if(i(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const r=t[e];for(let t=0;t<r.addedNodes.length;t++){const e=r.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&i(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return _t.getComputedStyleValue(this,t)}debounce(t,e,r){return this._debouncers=this._debouncers||{},this._debouncers[t]=st.a.debounce(this._debouncers[t],r>0?at.d.after(r):at.c,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?at.d.run(t.bind(this),e):~at.c.run(t.bind(this))}cancelAsync(t){t<0?at.c.cancel(~t):at.d.cancel(t)}create(t,e){let r=document.createElement(t);if(e)if(r.setProperties)r.setProperties(e);else for(let t in e)r[t]=e[t];return r}elementMatches(t,e){return Object(ot.b)(e||this,t)}toggleAttribute(t,e){let r=this;return 3===arguments.length&&(r=arguments[2]),1==arguments.length&&(e=!r.hasAttribute(t)),e?(Object(ct.a)(r).setAttribute(t,""),!0):(Object(ct.a)(r).removeAttribute(t),!1)}toggleClass(t,e,r){r=r||this,1==arguments.length&&(e=!r.classList.contains(t)),e?r.classList.add(t):r.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,r,n){n=n||this,this.transform("translate3d("+t+","+e+","+r+")",n)}arrayDelete(t,e){let r;if(Array.isArray(t)){if(r=t.indexOf(e),r>=0)return t.splice(r,1)}else{if(r=Object(lt.a)(this,t).indexOf(e),r>=0)return this.splice(t,r,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return i.prototype.is="",i})},,,,,,function(t,e,r){"use strict";r(66),r(105),r(47),r(122),r(123),r(9);var n=r(7);Object(n.d)("vaadin-login-form",n.c`
    vaadin-button[part='vaadin-login-submit'] {
      margin-top: var(--lumo-space-l);
      margin-bottom: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-login-form"});r(124)},function(t,e,r){"use strict";var n=r(45),o=r(29);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const i=o.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;i.setAttribute("style","display: none;"),document.head.appendChild(i.content);var s=document.createElement("style");s.textContent="[hidden] { display: none !important; }",document.head.appendChild(s);r(131);var a=r(61),l=r(57);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(a.a)({_template:o.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:n.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(l.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(l.a)(this.root).appendChild(this._img))}})},,,,,,,,function(t,e,r){"use strict";var n=r(8),o=r(35);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class i extends o.a{static get is(){return"vaadin-password-field-button"}static get template(){return n.b`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}customElements.define(i.is,i);var s=r(29),a=r(54),l=r(121),c=r(73);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const d=s.a`
  <div part="reveal-button" slot="suffix">
    <slot name="reveal"></slot>
  </div>
`;let u;class h extends(Object(l.a)(c.a)){static get is(){return"vaadin-password-field"}static get template(){if(!u){u=super.template.cloneNode(!0);const t=d.content.querySelector('[part="reveal-button"]');u.content.querySelector('[part="input-field"]').appendChild(t)}return u}static get properties(){return{revealButtonHidden:{type:Boolean,observer:"_revealButtonHiddenChanged",value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChanged",readOnly:!0},i18n:{type:Object,value:()=>({reveal:"Show password"})}}}static get observers(){return["__i18nChanged(i18n.*)"]}get slotStyles(){return[`\n        ${this.localName} [slot="input"]::-ms-reveal {\n          display: none;\n        }\n      `]}get _revealNode(){return this._revealButtonController&&this._revealButtonController.node}constructor(){super(),this._setType("password"),this.__boundRevealButtonClick=this._onRevealButtonClick.bind(this),this.__boundRevealButtonTouchend=this._onRevealButtonTouchend.bind(this)}ready(){super.ready(),this._revealPart=this.shadowRoot.querySelector('[part="reveal-button"]'),this._revealButtonController=new a.a(this,"reveal",()=>document.createElement("vaadin-password-field-button"),(t,e)=>{e.disabled=t.disabled,e.addEventListener("click",t.__boundRevealButtonClick),e.addEventListener("touchend",t.__boundRevealButtonTouchend)}),this.addController(this._revealButtonController),this.__updateAriaLabel(this.i18n),this._updateToggleState(!1),this._toggleRevealHidden(this.revealButtonHidden),this.inputElement&&(this.inputElement.autocapitalize="off")}_shouldSetFocus(t){return t.target===this.inputElement||t.target===this._revealNode}_shouldRemoveFocus(t){return!(t.relatedTarget===this._revealNode||t.relatedTarget===this.inputElement&&t.target===this._revealNode)}_setFocused(t){if(super._setFocused(t),t){const t=this.getRootNode().activeElement===this._revealNode;this.toggleAttribute("focus-ring",this._keyboardActive&&!t)}else this._setPasswordVisible(!1)}__updateAriaLabel(t){t.reveal&&this._revealNode&&this._revealNode.setAttribute("aria-label",t.reveal)}__i18nChanged(t){this.__updateAriaLabel(t.base)}_revealButtonHiddenChanged(t){this._toggleRevealHidden(t)}_togglePasswordVisibility(){this._setPasswordVisible(!this.passwordVisible)}_onRevealButtonClick(){this._togglePasswordVisibility()}_onRevealButtonTouchend(t){t.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_toggleRevealHidden(t){this._revealNode&&(t?(this._revealPart.setAttribute("hidden",""),this._revealNode.setAttribute("tabindex","-1"),this._revealNode.setAttribute("aria-hidden","true")):(this._revealPart.removeAttribute("hidden"),this._revealNode.setAttribute("tabindex","0"),this._revealNode.removeAttribute("aria-hidden")))}_updateToggleState(t){this._revealNode&&this._revealNode.setAttribute("aria-pressed",t?"true":"false")}_passwordVisibleChanged(t){this._setType(t?"text":"password"),this._updateToggleState(t)}_disabledChanged(t,e){super._disabledChanged(t,e),this._revealNode&&(this._revealNode.disabled=t)}}customElements.define(h.is,h)},function(t,e,r){"use strict";var n=r(191),o=r(100),i=r(98);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=new n.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,r){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,r){},styleSubtree(t,e){s.processStyles(),Object(o.c)(t,e)},styleElement(t){s.processStyles()},styleDocument(t){s.processStyles(),Object(o.c)(document.body,t)},getComputedStyleValue:(t,e)=>Object(o.b)(t,e),flushCustomStyles(){},nativeCss:i.c,nativeShadow:i.d,cssBuild:i.a,disableRuntime:i.b}),window.ShadyCSS.CustomStyleInterface=s;var a=r(92);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const l=window.ShadyCSS.CustomStyleInterface;class c extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=Object(a.a)(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",c)},,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s}));var n=r(0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:o}=n.a,i={HTML:1,SVG:2},s=(t,e)=>{var r,n;return void 0===e?void 0!==(null===(r=t)||void 0===r?void 0:r._$litType$):(null===(n=t)||void 0===n?void 0:n._$litType$)===e}},,,function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let n,o=null,i=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(t){requestAnimationFrame((function(){i?i(t):(o||(o=new Promise(t=>{n=t}),"complete"===document.readyState?n():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&n()})),o.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a="__shadyCSSCachedStyle";let l=null,c=null;class d{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&c&&(this.enqueued=!0,s(c))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[a])return t[a];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const r=t[e];if(r[a])continue;const n=this.getStyleForCustomStyle(r);if(n){const t=n.__appliedElement||n;l&&l(t),r[a]=t}}return t}}d.prototype.addCustomStyle=d.prototype.addCustomStyle,d.prototype.getStyleForCustomStyle=d.prototype.getStyleForCustomStyle,d.prototype.processStyles=d.prototype.processStyles,Object.defineProperties(d.prototype,{transformCallback:{get:()=>l,set(t){l=t}},validateCallback:{get:()=>c,set(t){let e=!1;c||(e=!0),c=t,e&&this.enqueueDocumentValidation()}}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r(173),r(32),r(45);var n=r(131),o=r(61),i=r(57);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(o.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new n.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var r=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(r){var n=Object(i.a)(t.root||t);return n.insertBefore(r,n.childNodes[0]),t._svgIcon=r}return null},removeIcon:function(t){t._svgIcon&&(Object(i.a)(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return Object(i.a)(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,r){if(t){var n=t.cloneNode(!0),o=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=n.getAttribute("viewBox")||"0 0 "+e+" "+e,s="pointer-events: none; display: block; width: 100%; height: 100%;";return r&&n.hasAttribute("mirror-in-rtl")&&(s+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),o.setAttribute("viewBox",i),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.setAttribute("focusable","false"),o.style.cssText=s,o.appendChild(n).removeAttribute("id"),o}return null}});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=document.createElement("template");s.innerHTML='<iron-iconset-svg size="1000" name="lumo">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>\n<g id="angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(s.content);r(109);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},function(t,e,r){"use strict";r(9);var n=r(7);const o=n.c`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;Object(n.d)("vaadin-vertical-layout",o,{moduleId:"lumo-vertical-layout"});var i=r(8),s=r(11);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class a extends(Object(s.a)(Object(n.a)(i.a))){static get template(){return i.b`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(a.is,a)},,,,,,,,,,,,,,,function(t,e,r){"use strict";var n=r(72),o=r(92),i=r(3),s=r(7);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
let a=0;function l(t,e=[],r={}){const n=r.moduleId||"custom-style-module-"+a;a+=1;const o=document.createElement("dom-module");t&&o.setAttribute("theme-for",t);const i=!(!e.length||!r.moduleId),s=[].concat(r.include||[]);0===s.length?o.__allStyles=e:i||(o.__partialStyles=e),o.innerHTML=`\n    <template>\n      ${s.map(t=>`<style include=${t}></style>`)}\n      ${i?`<style>${e.map(t=>t.cssText).join("\n")}</style>`:""}\n    </template>\n  `,o.register(n)}window.Vaadin=window.Vaadin||{},window.Vaadin.styleModules={getAllThemes:function(){const t=n.a.prototype.modules;return Object.keys(t).map(e=>{const r=t[e],n=r.getAttribute("theme-for");return r.__allStyles=r.__allStyles||function(t){return Object(o.c)(t.querySelector("template")).map(t=>Object(i.h)(t.textContent))}(r).concat(r.__partialStyles||[]),{themeFor:n,moduleId:e,styles:r.__allStyles}})},registerStyles:l},s.b&&s.b.length>0&&(s.b.forEach(t=>{l(t.themeFor,t.styles,{moduleId:t.moduleId,include:t.include})}),s.b.length=0)}]]);