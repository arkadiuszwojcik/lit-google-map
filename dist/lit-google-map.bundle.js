(function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$3=Symbol(),n$5=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$5.get(this.cssText);return t$1&&void 0===e&&(n$5.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$3=t=>new s$3("string"==typeof t?t:t+"",e$3),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$3)},i$2=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$3(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$2;const e$2=window.trustedTypes,r$1=e$2?e$2.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$2={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$4=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$2,reflect:!1,hasChanged:n$4};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$2){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$2.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t;const i$1=globalThis.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e$1,n$3=`<${o$1}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$3:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$1+y):s+e$1+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$1),s=t.length-1;if(s>0){l.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$1,t+1));)c.push({type:7,index:r}),t+=e$1.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h()),this.A(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$1?i$1.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.2.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l,o;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const n$1=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

    class ScriptLoaderMap {
        constructor() {
            this.apiMap = {};
        }
        require(url, notifyCallback, jsonpCallbackName) {
            var name = this.nameFromUrl(url);
            if (!this.apiMap[name])
                this.apiMap[name] = new ScriptLoader(name, url, jsonpCallbackName);
            this.apiMap[name].requestNotify(notifyCallback);
        }
        static getInstance() {
            if (!ScriptLoaderMap.instance) {
                ScriptLoaderMap.instance = new ScriptLoaderMap();
            }
            return ScriptLoaderMap.instance;
        }
        nameFromUrl(url) {
            return url.replace(/[\:\/\%\?\&\.\=\-\,]/g, '_') + '_api';
        }
    }
    class ScriptLoader {
        constructor(name, url, callbackName) {
            this.callbackMacro = '%%callback%%';
            this.loaded = false;
            this.script = null;
            this.notifiers = [];
            if (!callbackName) {
                if (url.indexOf(this.callbackMacro) >= 0) {
                    callbackName = name + '_loaded';
                    url = url.replace(this.callbackMacro, callbackName);
                }
                else {
                    console.error('ScriptLoader class: a %%callback%% parameter is required in libraryUrl');
                    return;
                }
            }
            this.callbackName = callbackName;
            window[this.callbackName] = this.success.bind(this);
            this.addScript(url);
        }
        addScript(src) {
            var script = document.createElement('script');
            script.src = src;
            script.onerror = this.handleError.bind(this);
            var s = document.querySelector('script') || document.body;
            s.parentNode.insertBefore(script, s);
            this.script = script;
        }
        removeScript() {
            if (this.script.parentNode) {
                this.script.parentNode.removeChild(this.script);
            }
            this.script = null;
        }
        handleError(ev) {
            this.error = new Error('Library failed to load');
            this.notifyAll();
            this.cleanup();
        }
        success() {
            this.loaded = true;
            this.result = Array.prototype.slice.call(arguments);
            this.notifyAll();
            this.cleanup();
        }
        cleanup() {
            delete window[this.callbackName];
        }
        notifyAll() {
            this.notifiers.forEach(function (notifyCallback) {
                notifyCallback(this.error, this.result);
            }.bind(this));
            this.notifiers = [];
        }
        requestNotify(notifyCallback) {
            if (this.loaded || this.error) {
                notifyCallback(this.error, this.result);
            }
            else {
                this.notifiers.push(notifyCallback);
            }
        }
    }

    class JsonpLibraryElement extends s {
        constructor() {
            super(...arguments);
            this.libraryLoaded = false;
            this.libraryErrorMessage = null;
            this.isReady = false;
        }
        get callbackName() {
            return null;
        }
        libraryUrlChanged() {
            if (this.isReady && this.libraryUrl != null)
                this.loadLibrary();
        }
        libraryLoadCallback(error, detail) {
            if (error) {
                console.warn('Library load failed:', error.message);
                this.libraryErrorMessage = error.message;
            }
            else {
                this.libraryErrorMessage = null;
                this.libraryLoaded = true;
                if (this.notifyEvent != null) {
                    this.dispatchEvent(new CustomEvent(this.notifyEvent, { detail: detail, composed: true }));
                }
            }
        }
        loadLibrary() {
            ScriptLoaderMap.getInstance().require(this.libraryUrl, this.libraryLoadCallback.bind(this), this.callbackName);
        }
        connectedCallback() {
            super.connectedCallback();
            this.isReady = true;
            if (this.libraryUrl != null)
                this.loadLibrary();
        }
    }
    exports.LitGoogleMapsApi = class LitGoogleMapsApi extends JsonpLibraryElement {
        constructor() {
            super(...arguments);
            this.apiKey = '';
            this.clientId = '';
            this.mapsUrl = 'https://maps.googleapis.com/maps/api/js?callback=%%callback%%';
            this.version = '3.39';
            this.language = '';
            this.mapId = '';
        }
        get libraryUrl() {
            return this.computeUrl(this.mapsUrl, this.version, this.apiKey, this.clientId, this.language, this.mapId);
        }
        get notifyEvent() {
            return 'api-load';
        }
        computeUrl(mapsUrl, version, apiKey, clientId, language, mapId) {
            var url = mapsUrl + '&v=' + version;
            url += '&libraries=drawing,geometry,places,visualization';
            if (apiKey && !clientId) {
                url += '&key=' + apiKey;
            }
            if (clientId) {
                url += '&client=' + clientId;
            }
            if (!apiKey && !clientId) {
                var warning = 'No Google Maps API Key or Client ID specified. ' +
                    'See https://developers.google.com/maps/documentation/javascript/get-api-key ' +
                    'for instructions to get started with a key or client id.';
                console.warn(warning);
            }
            if (language) {
                url += '&language=' + language;
            }
            if (mapId) {
                url += '&map_ids=' + mapId;
            }
            return url;
        }
    };
    __decorate([
        e({ type: String, attribute: 'api-key' }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "apiKey", void 0);
    __decorate([
        e({ type: String, attribute: 'client-id' }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "clientId", void 0);
    __decorate([
        e({ type: String, attribute: 'maps-url' }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "mapsUrl", void 0);
    __decorate([
        e({ type: String }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "version", void 0);
    __decorate([
        e({ type: String }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "language", void 0);
    __decorate([
        e({ type: String, attribute: 'map-id' }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "mapId", void 0);
    exports.LitGoogleMapsApi = __decorate([
        n$1('lit-google-maps-api')
    ], exports.LitGoogleMapsApi);

    exports.LitGoogleMapMarker = class LitGoogleMapMarker extends s {
        constructor() {
            super(...arguments);
            this.latitude = 0;
            this.longitude = 0;
            this.label = null;
            this.zIndex = 0;
            this.open = false;
            this.icon = null;
            this.map = null;
            this.marker = null;
        }
        attributeChangedCallback(name, oldval, newval) {
            var _a, _b;
            super.attributeChangedCallback(name, oldval, newval);
            switch (name) {
                case 'open': {
                    this.openChanged();
                    break;
                }
                case 'latitude': {
                    this.updatePosition();
                    break;
                }
                case 'longitude': {
                    this.updatePosition();
                    break;
                }
                case 'label': {
                    (_a = this.marker) === null || _a === void 0 ? void 0 : _a.setLabel(this.label);
                    break;
                }
                case 'z-index': {
                    (_b = this.marker) === null || _b === void 0 ? void 0 : _b.setZIndex(this.zIndex);
                    break;
                }
            }
        }
        openChanged() {
            if (!this.info)
                return;
            if (this.open) {
                this.info.open(this.map, this.marker);
                this.dispatchEvent(new CustomEvent('google-map-marker-open', { bubbles: true }));
            }
            else {
                this.info.close();
                this.dispatchEvent(new CustomEvent('google-map-marker-close', { bubbles: true }));
            }
        }
        updatePosition() {
            var _a;
            (_a = this.marker) === null || _a === void 0 ? void 0 : _a.setPosition(new google.maps.LatLng(this.latitude, this.longitude));
        }
        changeMap(newMap) {
            this.map = newMap;
            this.mapChanged();
        }
        mapChanged() {
            if (this.marker) {
                this.marker.setMap(null);
                google.maps.event.clearInstanceListeners(this.marker);
            }
            if (this.map && this.map instanceof google.maps.Map) {
                this.mapReady();
            }
        }
        mapReady() {
            this.marker = new google.maps.Marker({
                map: this.map,
                icon: this.icon,
                position: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                label: this.label,
                zIndex: this.zIndex
            });
            this.contentChanged();
        }
        contentChanged() {
            if (this.contentObserver)
                this.contentObserver.disconnect();
            this.contentObserver = new MutationObserver(this.contentChanged.bind(this));
            this.contentObserver.observe(this, {
                childList: true,
                subtree: true
            });
            var content = this.innerHTML.trim();
            if (content) {
                if (!this.info) {
                    this.info = new google.maps.InfoWindow();
                    this.openInfoHandler = google.maps.event.addListener(this.marker, 'click', function () {
                        this.open = true;
                    }.bind(this));
                    this.closeInfoHandler = google.maps.event.addListener(this.info, 'closeclick', function () {
                        this.open = false;
                    }.bind(this));
                }
                this.info.setContent(content);
            }
            else {
                if (this.info) {
                    google.maps.event.removeListener(this.openInfoHandler);
                    google.maps.event.removeListener(this.closeInfoHandler);
                    this.info = null;
                }
            }
        }
    };
    __decorate([
        e({ type: Number, reflect: true }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapMarker.prototype, "latitude", void 0);
    __decorate([
        e({ type: Number, reflect: true }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapMarker.prototype, "longitude", void 0);
    __decorate([
        e({ type: String, reflect: true }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapMarker.prototype, "label", void 0);
    __decorate([
        e({ type: Number, reflect: true, attribute: 'z-index' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapMarker.prototype, "zIndex", void 0);
    __decorate([
        e({ type: Boolean, reflect: true }),
        __metadata("design:type", Boolean)
    ], exports.LitGoogleMapMarker.prototype, "open", void 0);
    __decorate([
        e({ type: String, reflect: true }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapMarker.prototype, "icon", void 0);
    exports.LitGoogleMapMarker = __decorate([
        n$1('lit-google-map-marker')
    ], exports.LitGoogleMapMarker);

    exports.LitGoogleMapCircle = class LitGoogleMapCircle extends s {
        constructor() {
            super(...arguments);
            this.centerLatitude = -34.397;
            this.centerLongitude = 150.644;
            this.radius = 100000;
            this.fillColor = '#FF0000';
            this.fillOpacity = 0.35;
            this.strokeColor = '#FF0000';
            this.strokeOpacity = 0.8;
            this.strokeWeight = 2;
            this.map = null;
            this.circle = null;
        }
        attributeChangedCallback(name, oldval, newval) {
            var _a;
            super.attributeChangedCallback(name, oldval, newval);
            switch (name) {
                case 'center-latitude': {
                    this.updateCenter();
                    break;
                }
                case 'center-longitude': {
                    this.updateCenter();
                    break;
                }
                case 'radius': {
                    (_a = this.circle) === null || _a === void 0 ? void 0 : _a.setRadius(this.radius);
                    break;
                }
            }
        }
        updateCenter() {
            var _a;
            (_a = this.circle) === null || _a === void 0 ? void 0 : _a.setCenter(new google.maps.LatLng(this.centerLatitude, this.centerLongitude));
        }
        attachToMap(map) {
            this.map = map;
            this.mapChanged();
        }
        mapChanged() {
            if (this.circle) {
                this.circle.setMap(null);
                google.maps.event.clearInstanceListeners(this.circle);
            }
            if (this.map && this.map instanceof google.maps.Map) {
                this.mapReady();
            }
        }
        mapReady() {
            this.circle = new google.maps.Circle({
                map: this.map,
                strokeColor: this.strokeColor,
                strokeOpacity: this.strokeOpacity,
                strokeWeight: this.strokeWeight,
                fillColor: this.fillColor,
                fillOpacity: this.fillOpacity,
                center: {
                    lat: this.centerLatitude,
                    lng: this.centerLongitude
                },
                radius: this.radius
            });
        }
    };
    __decorate([
        e({ type: Number, attribute: 'center-latitude' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "centerLatitude", void 0);
    __decorate([
        e({ type: Number, attribute: 'center-longitude' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "centerLongitude", void 0);
    __decorate([
        e({ type: Number }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "radius", void 0);
    __decorate([
        e({ type: String, attribute: 'fill-color' }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapCircle.prototype, "fillColor", void 0);
    __decorate([
        e({ type: Number, attribute: 'fill-opacity' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "fillOpacity", void 0);
    __decorate([
        e({ type: String, attribute: 'stroke-color' }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapCircle.prototype, "strokeColor", void 0);
    __decorate([
        e({ type: Number, attribute: 'stroke-opacity' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "strokeOpacity", void 0);
    __decorate([
        e({ type: Number, attribute: 'stroke-weight' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapCircle.prototype, "strokeWeight", void 0);
    exports.LitGoogleMapCircle = __decorate([
        n$1('lit-google-map-circle')
    ], exports.LitGoogleMapCircle);

    exports.LitGoogleMapPolygon = class LitGoogleMapPolygon extends s {
        constructor() {
            super(...arguments);
            this.paths = [];
            this.fillColor = '#FF0000';
            this.fillOpacity = 0.35;
            this.strokeColor = '#FF0000';
            this.strokeOpacity = 0.8;
            this.strokeWeight = 2;
            this.map = null;
            this.polygon = null;
        }
        attachToMap(map) {
            this.map = map;
            this.mapChanged();
        }
        mapChanged() {
            if (this.polygon) {
                this.polygon.setMap(null);
                google.maps.event.clearInstanceListeners(this.polygon);
            }
            if (this.map && this.map instanceof google.maps.Map) {
                this.mapReady();
            }
        }
        mapReady() {
            this.polygon = new google.maps.Polygon({
                map: this.map,
                strokeColor: this.strokeColor,
                strokeOpacity: this.strokeOpacity,
                strokeWeight: this.strokeWeight,
                fillColor: this.fillColor,
                fillOpacity: this.fillOpacity,
                paths: this.paths
            });
        }
    };
    __decorate([
        e({ type: Array }),
        __metadata("design:type", Array)
    ], exports.LitGoogleMapPolygon.prototype, "paths", void 0);
    __decorate([
        e({ type: String, attribute: 'fill-color' }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapPolygon.prototype, "fillColor", void 0);
    __decorate([
        e({ type: Number, attribute: 'fill-opacity' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapPolygon.prototype, "fillOpacity", void 0);
    __decorate([
        e({ type: String, attribute: 'stroke-color' }),
        __metadata("design:type", String)
    ], exports.LitGoogleMapPolygon.prototype, "strokeColor", void 0);
    __decorate([
        e({ type: Number, attribute: 'stroke-opacity' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapPolygon.prototype, "strokeOpacity", void 0);
    __decorate([
        e({ type: Number, attribute: 'stroke-weight' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMapPolygon.prototype, "strokeWeight", void 0);
    exports.LitGoogleMapPolygon = __decorate([
        n$1('lit-google-map-polygon')
    ], exports.LitGoogleMapPolygon);

    exports.LitGoogleMap = class LitGoogleMap extends s {
        constructor() {
            super(...arguments);
            this.apiKey = '';
            this.version = '3.48';
            this.styles = {};
            this.zoom = 8;
            this.fitToMarkers = false;
            this.mapType = 'roadmap';
            this.centerLatitude = -34.397;
            this.centerLongitude = 150.644;
            this.language = '';
            this.mapId = '';
            this.map = null;
        }
        initGMap() {
            if (this.map != null) {
                return;
            }
            var gMapApiElement = this.shadowRoot.getElementById('api');
            if (gMapApiElement == null || gMapApiElement.libraryLoaded != true) {
                return;
            }
            this.map = new google.maps.Map(this.shadowRoot.getElementById('map'), this.getMapOptions());
            this.updateMarkers();
            this.updateShapes();
        }
        getMapOptions() {
            return {
                zoom: this.zoom,
                center: { lat: this.centerLatitude, lng: this.centerLongitude },
                mapTypeId: this.mapType,
                styles: this.styles,
                mapId: this.mapId
            };
        }
        mapApiLoaded() {
            this.initGMap();
        }
        connectedCallback() {
            super.connectedCallback();
            this.initGMap();
        }
        attachChildrenToMap(children) {
            if (this.map) {
                for (let child of children) {
                    child.changeMap(this.map);
                }
            }
        }
        observeMarkers() {
            if (this.markerObserverSet)
                return;
            this.addEventListener("selector-items-changed", event => { this.updateMarkers(); });
            this.markerObserverSet = true;
        }
        updateMarkers() {
            this.observeMarkers();
            var markersSelector = this.shadowRoot.getElementById("markers-selector");
            if (!markersSelector)
                return;
            var newMarkers = markersSelector.items;
            if (this.markers && newMarkers.length === this.markers.length) {
                var added = newMarkers.filter(m => {
                    return this.markers && this.markers.indexOf(m) === -1;
                });
                if (added.length == 0)
                    return;
            }
            this.markers = newMarkers;
            this.attachChildrenToMap(this.markers);
            if (this.fitToMarkers) {
                this.fitToMarkersChanged();
            }
        }
        updateShapes() {
            var shapesSelector = this.shadowRoot.getElementById("shapes-selector");
            if (!shapesSelector)
                return;
            this.shapes = shapesSelector.items;
            for (let s of this.shapes) {
                s.attachToMap(this.map);
            }
        }
        fitToMarkersChanged() {
            if (this.map && this.fitToMarkers && this.markers.length > 0) {
                var latLngBounds = new google.maps.LatLngBounds();
                for (var marker of this.markers) {
                    latLngBounds.extend(new google.maps.LatLng(marker.latitude, marker.longitude));
                }
                if (this.markers.length > 1) {
                    this.map.fitBounds(latLngBounds);
                }
                this.map.setCenter(latLngBounds.getCenter());
            }
        }
        deselectMarker(event) {
        }
        deselectShape(event) {
        }
        render() {
            return $ `
            <lit-google-maps-api 
                id="api" 
                api-key="${this.apiKey}" 
                version="${this.version}"
                language="${this.language}"
                map-id="${this.mapId}"
                @api-load=${() => this.mapApiLoaded()}>
            </lit-google-maps-api>
            <lit-selector 
                id="markers-selector"
                selected-attribute="open"
                activate-event="google-map-marker-open"
                @google-map-marker-close=${(e) => this.deselectMarker(e)}>
                    <slot id="markers" name="markers"></slot>
            </lit-selector>
            <lit-selector 
                id="shapes-selector"
                selected-attribute="open"
                activate-event="google-map-shape-open"
                @google-map-shape-close=${(e) => this.deselectShape(e)}>
                    <slot id="shapes" name="shapes"></slot>
            </lit-selector>
            <div id="map">
            </div>
        `;
        }
    };
    exports.LitGoogleMap.styles = r$2 `
        #map {
            width: 100%;
            height: 100%;
        }
    `;
    __decorate([
        e({ type: String, attribute: 'api-key' }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "apiKey", void 0);
    __decorate([
        e({ type: String }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "version", void 0);
    __decorate([
        e({ type: Object }),
        __metadata("design:type", Object)
    ], exports.LitGoogleMap.prototype, "styles", void 0);
    __decorate([
        e({ type: Number }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMap.prototype, "zoom", void 0);
    __decorate([
        e({ type: Boolean, attribute: 'fit-to-markers' }),
        __metadata("design:type", Boolean)
    ], exports.LitGoogleMap.prototype, "fitToMarkers", void 0);
    __decorate([
        e({ type: String, attribute: 'map-type' }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "mapType", void 0);
    __decorate([
        e({ type: Number, attribute: 'center-latitude' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMap.prototype, "centerLatitude", void 0);
    __decorate([
        e({ type: Number, attribute: 'center-longitude' }),
        __metadata("design:type", Number)
    ], exports.LitGoogleMap.prototype, "centerLongitude", void 0);
    __decorate([
        e({ type: String }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "language", void 0);
    __decorate([
        e({ type: String, attribute: 'map-id' }),
        __metadata("design:type", String)
    ], exports.LitGoogleMap.prototype, "mapId", void 0);
    exports.LitGoogleMap = __decorate([
        n$1('lit-google-map')
    ], exports.LitGoogleMap);

    class XSelection {
        constructor(selectCallback) {
            this.multi = false;
            this.selection = [];
            this.selectCallback = selectCallback;
        }
        get() {
            return this.multi ? this.selection.slice() : this.selection[0];
        }
        clear(excludes) {
            this.selection.slice().forEach(item => {
                if (!excludes || excludes.indexOf(item) < 0)
                    this.setItemSelected(item, false);
            });
        }
        isSelected(item) {
            return this.selection.indexOf(item) >= 0;
        }
        setItemSelected(item, isSelected) {
            if (item == null || isSelected == this.isSelected(item))
                return;
            if (isSelected) {
                this.selection.push(item);
            }
            else {
                var i = this.selection.indexOf(item);
                if (i >= 0) {
                    this.selection.splice(i, 1);
                }
            }
            if (this.selectCallback) {
                this.selectCallback(item, isSelected);
            }
        }
        select(item) {
            if (this.multi) {
                this.toggle(item);
            }
            else if (this.get() !== item) {
                this.setItemSelected(this.get(), false);
                this.setItemSelected(item, true);
            }
        }
        toggle(item) {
            this.setItemSelected(item, !this.isSelected(item));
        }
    }

    exports.LitSelector = class LitSelector extends s {
        constructor() {
            super(...arguments);
            this.activateEvent = 'tap';
            this.selectedAttribute = null;
            this.selected = null;
            this._selection = new XSelection((item, isSelected) => this.applySelection(item, isSelected));
            this._items = [];
        }
        get items() {
            return this._items;
        }
        connectedCallback() {
            super.connectedCallback();
            this.addEventListener('slotchange', event => {
                event.stopPropagation();
                this.updateItems();
                this.dispatchEvent(new CustomEvent("selector-items-changed", { detail: {}, composed: true }));
            });
            this.addListener(this.activateEvent);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.removeListener(this.activateEvent);
        }
        attributeChangedCallback(name, oldval, newval) {
            super.attributeChangedCallback(name, oldval, newval);
            switch (name) {
                case 'selected': {
                    this.updateSelected();
                    break;
                }
            }
        }
        applySelection(item, isSelected) {
            if (this.selectedAttribute && item instanceof Element) {
                if (isSelected != item.hasAttribute(this.selectedAttribute))
                    item.toggleAttribute(this.selectedAttribute);
            }
        }
        updateItems() {
            var _a;
            var slotElement = this.querySelector("slot");
            this._items = (_a = slotElement === null || slotElement === void 0 ? void 0 : slotElement.assignedNodes()) !== null && _a !== void 0 ? _a : [];
        }
        addListener(eventName) {
            this.addEventListener(eventName, (event) => this.activateHandler(event));
        }
        removeListener(eventName) {
            this.removeEventListener(eventName, (event) => this.activateHandler(event));
        }
        activateHandler(event) {
            var t = event.target;
            var items = this.items;
            while (t && t != this) {
                var i = items.indexOf(t);
                if (i >= 0) {
                    var value = this.indexToValue(i);
                    this.itemActivate(value, t);
                    return;
                }
                t = t.parentNode;
            }
        }
        itemActivate(value, item) {
            if (this.dispatchEvent(new CustomEvent('selector-item-activate', { detail: { selected: value, item: item }, composed: true, cancelable: true })))
                this.select(value);
        }
        select(value) {
            this.selected = value;
        }
        updateSelected() {
            this.selectSelected(this.selected);
        }
        selectSelected(selected) {
            if (!this._items)
                return;
            var item = this.valueToItem(this.selected);
            if (item) {
                this._selection.select(item);
            }
            else {
                this._selection.clear();
            }
        }
        valueToItem(value) {
            return (value == null) ? null : this._items[this.valueToIndex(value)];
        }
        valueToIndex(value) {
            return Number(value);
        }
        indexToValue(index) {
            return index;
        }
        indexOf(item) {
            return this._items ? this._items.indexOf(item) : -1;
        }
    };
    __decorate([
        e({ type: String, attribute: 'activate-event' }),
        __metadata("design:type", String)
    ], exports.LitSelector.prototype, "activateEvent", void 0);
    __decorate([
        e({ type: String, attribute: 'selected-attribute' }),
        __metadata("design:type", String)
    ], exports.LitSelector.prototype, "selectedAttribute", void 0);
    __decorate([
        e({ type: Number, reflect: true }),
        __metadata("design:type", Object)
    ], exports.LitSelector.prototype, "selected", void 0);
    exports.LitSelector = __decorate([
        n$1('lit-selector')
    ], exports.LitSelector);

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
