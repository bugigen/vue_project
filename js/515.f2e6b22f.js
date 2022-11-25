(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[515],{1223:function(t,e,n){var s=n(5112),i=n(30),r=n(3070).f,o=s("unscopables"),a=Array.prototype;void 0==a[o]&&r(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},490:function(t,e,n){var s=n(5005);t.exports=s("document","documentElement")},30:function(t,e,n){var s,i=n(9670),r=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),h=n(6200),l=">",d="<",f="prototype",g="script",p=h("IE_PROTO"),m=function(){},y=function(t){return d+g+l+t+d+"/"+g+l},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+g+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},E=function(){try{s=new ActiveXObject("htmlfile")}catch(e){}E="undefined"!=typeof document?document.domain&&s?v(s):w():v(s);var t=o.length;while(t--)delete E[f][o[t]];return E()};a[p]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[p]=t):n=E(),void 0===e?n:r.f(n,e)}},6048:function(t,e,n){var s=n(9781),i=n(3353),r=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=s&&!i?Object.defineProperties:function(t,e){o(t);var n,s=a(e),i=c(e),u=i.length,h=0;while(u>h)r.f(t,n=i[h++],s[n]);return t}},1956:function(t,e,n){var s=n(6324),i=n(748);t.exports=Object.keys||function(t){return s(t,i)}},2262:function(t,e,n){"use strict";var s=n(2109),i=n(7908),r=n(6244),o=n(9303),a=n(1223);s({target:"Array",proto:!0},{at:function(t){var e=i(this),n=r(e),s=o(t),a=s>=0?s:n+s;return a<0||a>=n?void 0:e[a]}}),a("at")},4506:function(t,e,n){"use strict";var s=n(2109),i=n(1702),r=n(4488),o=n(9303),a=n(1340),c=n(7293),u=i("".charAt),h=c((function(){return"\ud842"!=="𠮷".at(-2)}));s({target:"String",proto:!0,forced:h},{at:function(t){var e=a(r(this)),n=e.length,s=o(t),i=s>=0?s:n+s;return i<0||i>=n?void 0:u(e,i)}})},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return w},L:function(){return a},LL:function(){return C},P0:function(){return y},Sg:function(){return E},ZR:function(){return T},aH:function(){return v},eu:function(){return h},hl:function(){return u},m9:function(){return D},vZ:function(){return _}});n(1703),n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&s+1<t.length&&56320===(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,s=0;while(n<t.length){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(1023&c))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const e=t[i],r=i+1<t.length,o=r?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],r=i<t.length,o=r?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,h=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==h)throw Error();const l=e<<2|o>>4;if(s.push(l),64!==c){const t=o<<4&240|c>>2;if(s.push(t),64!==h){const t=c<<6&192|h;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=s(t);return r.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return r.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"object"===typeof indexedDB}function h(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/vue_project/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},g=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},p=()=>{try{return d()||f()||g()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b="FirebaseError";class T extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=b,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?I(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`,a=new T(s,o,n);return a}}function I(t,e){return t.replace(S,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}const S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(A(n)&&A(r)){if(!_(n,r))return!1}else if(n!==r)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function A(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t){return t&&t._delegate?t._delegate:t}},6035:function(t,e,n){"use strict";n.d(e,{hJ:function(){return Iu},ad:function(){return Mu},cf:function(){return eh}});n(1703),n(8675),n(3408),n(4590),n(7658),n(2262),n(4506),n(2801);var s,i=n(7077),r=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},h=h||{},l=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function g(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,E.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function T(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function C(){this.s=this.s,this.o=this.o}var I=0,S={};C.prototype.s=!1,C.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=I)){var t=p(this);delete S[t]}},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function A(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function D(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let i=0;i<s;i++)t[n+i]=e[i]}else t.push(e)}}function k(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",d,e),l.removeEventListener("test",d,e)}catch(n){}return t}();function L(t){return/^[\s\xa0]*$/.test(t)}var R=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function O(t,e){return t<e?-1:t>e?1:0}function x(){var t=l.navigator;return t&&(t=t.userAgent)?t:""}function M(t){return-1!=x().indexOf(t)}function V(t){return V[" "](t),t}function P(t){var e=X;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}V[" "]=d;var F,U=M("Opera"),B=M("Trident")||M("MSIE"),j=M("Edge"),q=j||B,H=M("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),K=-1!=x().toLowerCase().indexOf("webkit")&&!M("Edge");function z(){var t=l.document;return t?t.documentMode:void 0}t:{var $="",G=function(){var t=x();return H?/rv:([^\);]+)(\)|;)/.exec(t):j?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(G&&($=G?G[1]:""),B){var Q=z();if(null!=Q&&Q>parseFloat($)){F=String(Q);break t}}F=$}var W,X={};function Y(){return P((function(){let t=0;const e=R(String(F)).split("."),n=R("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=O(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||O(0==i[2].length,0==r[2].length)||O(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(l.document&&B){var J=z();W=J||(parseInt(F,10)||void 0)}else W=void 0;var Z=W;function tt(t,e){if(k.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{V(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:et[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tt.X.h.call(this)}}T(tt,k);var et={2:"touch",3:"pen",4:"mouse"};tt.prototype.h=function(){tt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),st=0;function it(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++st,this.ba=this.ea=!1}function rt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function at(t){const e={};for(const n in t)e[n]=t[n];return e}const ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<ct.length;e++)n=ct[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=_(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}ht.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=dt(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new it(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),gt={};function pt(t,e,n,s,i){if(s&&s.once)return vt(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)pt(t,e[r],n,s,i);return null}return n=St(n),t&&t[nt]?t.N(e,n,g(s)?!!s.capture:!!s,i):mt(t,e,n,!1,s,i)}function mt(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=g(i)?!!i.capture:!!i,a=Ct(t);if(a||(t[ft]=a=new ht(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=yt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)N||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(bt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}const e=Tt;return t}function vt(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)vt(t,e[r],n,s,i);return null}return n=St(n),t&&t[nt]?t.O(e,n,g(s)?!!s.capture:!!s,i):mt(t,e,n,!0,s,i)}function wt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)wt(t,e[r],n,s,i);else s=g(s)?!!s.capture:!!s,n=St(n),t&&t[nt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=dt(r,n,s,i),-1<n&&(rt(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Ct(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,s,i)),(n=-1<t?e[t]:null)&&Et(n))}function Et(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nt])lt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(bt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ct(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):rt(t)}}}function bt(t){return t in gt?gt[t]:gt[t]="on"+t}function Tt(t,e){if(t.ba)t=!0;else{e=new tt(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Et(t),t=n.call(s,e)}return t}function Ct(t){return t=t[ft],t instanceof ht?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function _t(){C.call(this),this.i=new ht(this),this.P=this,this.I=null}function At(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new k(e,t);else if(e instanceof k)e.target=e.target||t;else{var i=e;e=new k(s,t),ut(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Dt(o,s,!0,e)&&i}if(o=e.g=t,i=Dt(o,s,!0,e)&&i,i=Dt(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Dt(o,s,!1,e)&&i}function Dt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&lt(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}T(_t,C),_t.prototype[nt]=!0,_t.prototype.removeEventListener=function(t,e,n,s){wt(this,t,e,n,s)},_t.prototype.M=function(){if(_t.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)rt(n[s]);delete e.g[t],e.h--}}this.I=null},_t.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},_t.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var kt=l.JSON.stringify;function Nt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Lt{constructor(){this.h=this.g=null}add(t,e){const n=Ot.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Rt,Ot=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new xt),(t=>t.reset()));class xt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mt(t){l.setTimeout((()=>{throw t}),0)}function Vt(t,e){Rt||Pt(),Ft||(Rt(),Ft=!0),Ut.add(t,e)}function Pt(){var t=l.Promise.resolve(void 0);Rt=function(){t.then(Bt)}}var Ft=!1,Ut=new Lt;function Bt(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Ot;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function jt(t,e){_t.call(this),this.h=t||1,this.g=e||l,this.j=E(this.lb,this),this.l=Date.now()}function qt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Ht(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function Kt(t){t.g=Ht((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}T(jt,_t),s=jt.prototype,s.ca=!1,s.R=null,s.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),At(this,"tick"),this.ca&&(qt(this),this.start()))}},s.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){jt.X.M.call(this),qt(this),delete this.g};class zt extends C{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){C.call(this),this.h=t,this.g={}}T($t,C);var Gt=[];function Qt(t,e,n,s){Array.isArray(n)||(n&&(Gt[0]=n.toString()),n=Gt);for(var i=0;i<n.length;i++){var r=pt(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Wt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Et(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function Zt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(s?" "+s:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return kt(n)}catch(a){return e}}$t.prototype.M=function(){$t.X.M.call(this),Wt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},se=null;function ie(){return se=se||new _t}function re(t){k.call(this,ne.Pa,t)}function oe(t){const e=ie();At(e,new re(e,t))}function ae(t,e){k.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();At(e,new ae(e,t))}function ue(t,e){k.call(this,ne.Qa,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}ne.Pa="serverreachability",T(re,k),ne.STAT_EVENT="statevent",T(ae,k),ne.Qa="timingevent",T(ue,k);var le={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},de={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function fe(){}function ge(t){return t.h||(t.h=t.i())}function pe(){}fe.prototype.h=null;var me,ye={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ve(){k.call(this,"d")}function we(){k.call(this,"c")}function Ee(){}function be(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new $t(this),this.O=Ce,t=q?125:void 0,this.T=new jt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}T(ve,k),T(we,k),T(Ee,fe),Ee.prototype.g=function(){return new XMLHttpRequest},Ee.prototype.i=function(){return{}},me=new Ee;var Ce=45e3,Ie={},Se={};function _e(t,e,n){t.K=1,t.v=Qe(He(e)),t.s=n,t.P=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),Le(t),t.A=He(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),cn(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Te,t.g=ds(t.l,n?e:null,!t.s),0<t.N&&(t.L=new zt(E(t.La,t,t.g),t.N)),Qt(t.S,t.g,"readystatechange",t.ib),e=t.H?at(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.U,t.s)}function De(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ke(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Ne(t,n),s==Se){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(s==Ie){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,s,null),Ve(t,s)}De(t)&&s!=Se&&s!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),is(e),e.K=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),xe(t))}function Ne(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Se:(n=Number(e.substring(n,s)),isNaN(n)?Ie:(s+=1,s+n>e.length?Se:(e=e.substr(s,n),t.C=s+n,e)))}function Le(t){t.V=Date.now()+t.O,Re(t,t.O)}function Re(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(E(t.gb,t),e)}function Oe(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function xe(t){0==t.l.G||t.I||as(t.l,t)}function Me(t){Oe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.T),Wt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ve(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||mn(n.h,t)))if(!t.J&&mn(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(u){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;os(n),Wn(n)}ss(n),ce(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=he(E(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else us(n,11)}else if((t.J||n.g==t)&&os(n),!L(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(yn(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,Ge(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ls(s,s.H?s.ka:null,s.V),o.J){vn(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Oe(a),Le(a)),s.g=o}else ns(s);0<n.i.length&&Yn(n)}else"stop"!=u[0]&&"close"!=u[0]||us(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?us(n,7):Qn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}oe(4)}catch(u){}}function Pe(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Fe(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Fe(t),s=Pe(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}s=be.prototype,s.setTimeout=function(t){this.O=t},s.ib=function(t){t=t.target;const e=this.L;e&&3==qn(t)?e.l():this.La(t)},s.La=function(t){try{if(t==this.g)t:{const h=qn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>h)&&(3!=h||q||this.g&&(this.h.h||this.g.fa()||Hn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),Oe(this);var n=this.g.aa();this.Y=n;e:if(De(this)){var s=Hn(this.g);t="";var i=s.length,r=4==qn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),xe(this);var o="";break e}this.h.i=new l.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Me(this),xe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ve(this,n)}this.P?(ke(this,h,o),q&&this.i&&3==h&&(Qt(this.S,this.T,"tick",this.hb),this.T.start())):(Zt(this.j,this.m,o,null),Ve(this,o)),4==h&&Me(this),this.i&&!this.I&&(4==h?as(this.l,this):(this.i=!1,Le(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Me(this),xe(this)}}}catch(h){}},s.hb=function(){if(this.g){var t=qn(this.g),e=this.g.fa();this.C<e.length&&(Oe(this),ke(this,t,e),this.i&&4!=t&&Le(this))}},s.cancel=function(){this.I=!0,Me(this)},s.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Me(this),this.o=2,xe(this)):Re(this,this.V-t)};var Be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function je(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof qe){this.h=void 0!==e?e:t.h,Ke(this,t.j),this.s=t.s,this.g=t.g,ze(this,t.m),this.l=t.l,e=t.i;var n=new sn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$e(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.h=!!e,Ke(this,n[1]||"",!0),this.s=We(n[2]||""),this.g=We(n[3]||"",!0),ze(this,n[4]),this.l=We(n[5]||"",!0),$e(this,n[6]||"",!0),this.o=We(n[7]||"")):(this.h=!!e,this.i=new sn(null,this.h))}function He(t){return new qe(t)}function Ke(t,e,n){t.j=n?We(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $e(t,e,n){e instanceof sn?(t.i=e,hn(t.i,t.h)):(n||(e=Xe(e,en)),t.i=new sn(e,t.h))}function Ge(t,e,n){t.i.set(e,n)}function Qe(t){return Ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function We(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ye),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ye(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xe(e,Je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Xe(e,Je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Xe(n,"/"==n.charAt(0)?tn:Ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xe(n,nn)),t.join("")};var Je=/[#\/\?@]/g,Ze=/[#\?:]/g,tn=/[#\?]/g,en=/[#\?@]/g,nn=/#/g;function sn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&je(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){rn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function an(t,e){return rn(t),e=un(t,e),t.g.has(e)}function cn(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),A(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function hn(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),cn(this,n,t))}),t)),t.j=e}s=sn.prototype,s.add=function(t,e){rn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){rn(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},s.oa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},s.W=function(t){rn(this);let e=[];if("string"===typeof t)an(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},s.set=function(t,e){return rn(this),this.i=null,t=un(this,t),an(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};var ln=class{constructor(t,e){this.h=t,this.g=e}};function dn(t){this.l=t||fn,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(l.g&&l.g.Ga&&l.g.Ga()&&l.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function gn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function mn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function yn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function wn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function En(){}function bn(){this.g=new En}function Tn(t,e,n){const s=n||"";try{Ue(t,(function(t,n){let i=t;g(t)&&(i=kt(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Cn(t,e){const n=new Xt;if(l.Image){const s=new Image;s.onload=b(In,n,s,"TestLoadImage: loaded",!0,e),s.onerror=b(In,n,s,"TestLoadImage: error",!1,e),s.onabort=b(In,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=b(In,n,s,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function In(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function Sn(t){this.l=t.ac||null,this.j=t.jb||!1}function _n(t,e){_t.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=An,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},En.prototype.stringify=function(t){return l.JSON.stringify(t,void 0)},En.prototype.parse=function(t){return l.JSON.parse(t,void 0)},T(Sn,fe),Sn.prototype.g=function(){return new _n(this.l,this.j)},Sn.prototype.i=function(t){return function(){return t}}({}),T(_n,_t);var An=0;function Dn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function kn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nn(t)}function Nn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=_n.prototype,s.open=function(t,e){if(this.readyState!=An)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||l).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=An},s.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},s.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?kn(this):Nn(this),3==this.readyState&&Dn(this)}},s.Va=function(t){this.g&&(this.response=this.responseText=t,kn(this))},s.Ua=function(t){this.g&&(this.response=t,kn(this))},s.ga=function(){this.g&&kn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(_n.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ln=l.JSON.parse;function Rn(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=On,this.K=this.L=!1}T(Rn,_t);var On="",xn=/^https?$/i,Mn=["POST","PUT"];function Vn(t){return B&&Y()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fn(t),Bn(t)}function Fn(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function Un(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=qn(t)||2!=t.aa()))if(t.v&&4==qn(t))Ht(t.Ha,0,t);else if(At(t,"readystatechange"),4==qn(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===c){var i=String(t.H).match(Be)[1]||null;if(!i&&l.self&&l.self.location){var r=l.self.location.protocol;i=r.substr(0,r.length-1)}s=!xn.test(i?i.toLowerCase():"")}n=s}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var o=2<qn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Fn(t)}}finally{Bn(t)}}}function Bn(t,e){if(t.g){jn(t);const s=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||At(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function jn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function qn(t){return t.g?t.g.readyState:0}function Hn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case On:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Ds){return null}}function Kn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Kn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ge(t,e,n))}function $n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gn(t){this.Ca=0,this.i=[],this.j=new Xt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=$n("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=$n("baseRetryDelayMs",5e3,t),this.bb=$n("retryDelaySeedMs",1e4,t),this.$a=$n("forwardChannelMaxRetries",2,t),this.ta=$n("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new dn(t&&t.concurrentRequestLimit),this.Fa=new bn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Qn(t){if(Xn(t),3==t.G){var e=t.U++,n=He(t.F);Ge(n,"SID",t.I),Ge(n,"RID",e),Ge(n,"TYPE","terminate"),ts(t,n),e=new be(t,t.j,e,void 0),e.K=2,e.v=Qe(He(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(e.v.toString(),"")),!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=ds(e.l,null),e.g.da(e.v)),e.F=Date.now(),Le(e)}hs(t)}function Wn(t){t.g&&(is(t),t.g.cancel(),t.g=null)}function Xn(t){Wn(t),t.u&&(l.clearTimeout(t.u),t.u=null),os(t),t.h.cancel(),t.m&&("number"===typeof t.m&&l.clearTimeout(t.m),t.m=null)}function Yn(t){gn(t.h)||t.m||(t.m=!0,Vt(t.Ja,t),t.C=0)}function Jn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=he(E(t.Ja,t,e),cs(t,t.C)),t.C++,!0))}function Zn(t,e){var n;n=e?e.m:t.U++;const s=He(t.F);Ge(s,"SID",t.I),Ge(s,"RID",n),Ge(s,"AID",t.T),ts(t,s),t.o&&t.s&&zn(s,t.o,t.s),n=new be(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=es(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),yn(t.h,n),_e(n,s,e)}function ts(t,e){t.ia&&ot(t.ia,(function(t,n){Ge(e,n,t)})),t.l&&Ue({},(function(t,n){Ge(e,n,t)}))}function es(t,e,n){n=Math.min(t.i.length,n);var s=t.l?E(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{Tn(c,t,"req"+n+"_")}catch(r){s&&s(c)}}if(o){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function ns(t){t.g||t.u||(t.Z=1,Vt(t.Ia,t),t.A=0)}function ss(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=he(E(t.Ia,t),cs(t,t.A)),t.A++,!0)}function is(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function rs(t){t.g=new be(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=He(t.sa);Ge(e,"RID","rpc"),Ge(e,"SID",t.I),Ge(e,"CI",t.L?"0":"1"),Ge(e,"AID",t.T),Ge(e,"TYPE","xmlhttp"),ts(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Qe(He(e)),n.s=null,n.P=!0,Ae(n,t)}function os(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function as(t,e){var n=null;if(t.g==e){os(t),is(t),t.g=null;var s=2}else{if(!mn(t.h,e))return;n=e.D,vn(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ie(),At(s,new ue(s,n,e,i)),Yn(t)}else ns(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==s&&Jn(t,e)||2==s&&ss(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:us(t,5);break;case 4:us(t,10);break;case 3:us(t,6);break;default:us(t,2)}}function cs(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function us(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=E(t.kb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Ke(n,"https"),Qe(n)),Cn(n.toString(),s)}else ce(2);t.G=0,t.l&&t.l.va(e),hs(t),Xn(t)}function hs(t){if(t.G=0,t.la=[],t.l){const e=wn(t.h);0==e.length&&0==t.i.length||(D(t.la,e),D(t.la,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ua()}}function ls(t,e,n){var s=n instanceof qe?He(n):new qe(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),ze(s,s.m);else{var i=l.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new qe(null,void 0);s&&Ke(r,s),e&&(r.g=e),i&&ze(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ge(s,n,e),Ge(s,"VER",t.ma),ts(t,s),s}function ds(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Rn(new Sn({jb:!0})):new Rn(t.ra),e.Ka(t.H),e}function fs(){}function gs(){if(B&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function ps(t,e){_t.call(this),this.g=new Gn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!L(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!L(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}function ms(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ys(){we.call(this),this.status=1}function vs(t){this.g=t}s=Rn.prototype,s.Ka=function(t){this.L=t},s.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?ge(this.u):ge(me),this.g.onreadystatechange=E(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void Pn(this,r)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=l.FormData&&t instanceof l.FormData,!(0<=_(Mn,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Vn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=E(this.qa,this)):this.A=Ht(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Pn(this,r)}},s.qa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Bn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),Rn.X.M.call(this)},s.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.fb())},s.fb=function(){Un(this)},s.aa=function(){try{return 2<qn(this)?this.g.status:-1}catch(t){return-1}},s.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ln(e)}},s.Ea=function(){return this.m},s.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},s=Gn.prototype,s.ma=8,s.G=1,s.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new be(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=at(r),ut(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=es(this,i,e),n=He(this.F),Ge(n,"RID",t),Ge(n,"CVER",22),this.D&&Ge(n,"X-HTTP-Session-Id",this.D),ts(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Kn(r)))+"&"+e:this.o&&zn(n,this.o,r)),yn(this.h,i),this.Ya&&Ge(n,"TYPE","init"),this.O?(Ge(n,"$req",e),Ge(n,"SID","null"),i.Z=!0,_e(i,n,null)):_e(i,n,e),this.G=2}}else 3==this.G&&(t?Zn(this,t):0==this.i.length||gn(this.h)||Zn(this))},s.Ia=function(){if(this.u=null,rs(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=he(E(this.eb,this),t)}},s.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ce(10),Wn(this),rs(this))},s.cb=function(){null!=this.v&&(this.v=null,Wn(this),ss(this),ce(19))},s.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ce(2)):(this.j.info("Failed to ping google.com"),ce(1))},s=fs.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Ra=function(){},gs.prototype.g=function(t,e){return new ps(t,e)},T(ps,_t),ps.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ce(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ls(t,null,t.V),Yn(t)},ps.prototype.close=function(){Qn(this.g)},ps.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kt(t),t=n);e.i.push(new ln(e.ab++,t)),3==e.G&&Yn(e)},ps.prototype.M=function(){this.g.l=null,delete this.j,Qn(this.g),delete this.g,ps.X.M.call(this)},T(ms,ve),T(ys,we),T(vs,fs),vs.prototype.xa=function(){At(this.g,"a")},vs.prototype.wa=function(t){At(this.g,new ms(t))},vs.prototype.va=function(t){At(this.g,new ys(t))},vs.prototype.ua=function(){At(this.g,"b")},gs.prototype.createWebChannel=gs.prototype.g,ps.prototype.send=ps.prototype.u,ps.prototype.open=ps.prototype.m,ps.prototype.close=ps.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",pe.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",_t.prototype.listen=_t.prototype.N,Rn.prototype.listenOnce=Rn.prototype.O,Rn.prototype.getLastError=Rn.prototype.Oa,Rn.prototype.getLastErrorCode=Rn.prototype.Ea,Rn.prototype.getStatus=Rn.prototype.aa,Rn.prototype.getResponseJson=Rn.prototype.Sa,Rn.prototype.getResponseText=Rn.prototype.fa,Rn.prototype.send=Rn.prototype.da,Rn.prototype.setWithCredentials=Rn.prototype.Ka;var ws=u.createWebChannelTransport=function(){return new gs},Es=u.getStatEventTarget=function(){return ie()},bs=u.ErrorCode=le,Ts=u.EventType=de,Cs=u.Event=ne,Is=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ss=u.FetchXmlHttpFactory=Sn,_s=u.WebChannel=pe,As=u.XhrIo=Rn;const Ds="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ks.UNAUTHENTICATED=new ks(null),ks.GOOGLE_CREDENTIALS=new ks("google-credentials-uid"),ks.FIRST_PARTY=new ks("first-party-uid"),ks.MOCK_USER=new ks("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ns="9.12.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new o.Yd("@firebase/firestore");function Rs(){return Ls.logLevel}function Os(t,...e){if(Ls.logLevel<=o["in"].DEBUG){const n=e.map(Vs);Ls.debug(`Firestore (${Ns}): ${t}`,...n)}}function xs(t,...e){if(Ls.logLevel<=o["in"].ERROR){const n=e.map(Vs);Ls.error(`Firestore (${Ns}): ${t}`,...n)}}function Ms(t,...e){if(Ls.logLevel<=o["in"].WARN){const n=e.map(Vs);Ls.warn(`Firestore (${Ns}): ${t}`,...n)}}function Vs(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw xs(e),new Error(e)}function Fs(t,e){t||Ps()}function Us(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class js extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ks{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ks.UNAUTHENTICATED)))}shutdown(){}}class zs{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class $s{constructor(t){this.t=t,this.currentUser=ks.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new qs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qs,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Os("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Os("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qs)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Os("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Fs("string"==typeof e.accessToken),new Hs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fs(null===t||"string"==typeof t),new ks(t)}}class Gs{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=ks.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fs(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Qs{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new Gs(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(ks.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ws{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xs{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Os("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Os("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Os("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):Os("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Fs("string"==typeof t.token),this.A=t.token,new Ws(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ys(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Ys(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function Zs(t,e){return t<e?-1:t>e?1:0}function ti(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new js(Bs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new js(Bs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new js(Bs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new js(Bs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ei.fromMillis(Date.now())}static fromDate(t){return ei.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ei(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Zs(this.nanoseconds,t.nanoseconds):Zs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ni(t)}static min(){return new ni(new ei(0,0))}static max(){return new ni(new ei(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ps(),void 0===n?n=t.length-e:n>t.length-e&&Ps(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===si.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof si?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ii extends si{construct(t,e,n){return new ii(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new js(Bs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ii(e)}static emptyPath(){return new ii([])}}const ri=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oi extends si{construct(t,e,n){return new oi(t,e,n)}static isValidIdentifier(t){return ri.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new oi(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new js(Bs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new js(Bs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new js(Bs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new js(Bs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new oi(e)}static emptyPath(){return new oi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t){this.path=t}static fromPath(t){return new ai(ii.fromString(t))}static fromName(t){return new ai(ii.fromString(t).popFirst(5))}static empty(){return new ai(ii.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ii.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ii.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ai(new ii(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}ci.UNKNOWN_ID=-1;function ui(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ni.fromTimestamp(1e9===s?new ei(n+1,0):new ei(n,s));return new li(i,ai.empty(),e)}function hi(t){return new li(t.readTime,t.key,-1)}class li{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new li(ni.min(),ai.empty(),-1)}static max(){return new li(ni.max(),ai.empty(),-1)}}function di(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ai.comparator(t.documentKey,e.documentKey),0!==n?n:Zs(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==Bs.FAILED_PRECONDITION||t.message!==fi)throw t;Os("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ps(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new mi(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof mi?e:mi.resolve(e)}catch(t){return mi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):mi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):mi.reject(e)}static resolve(t){return new mi(((e,n)=>{e(t)}))}static reject(t){return new mi(((e,n)=>{n(t)}))}static waitFor(t){return new mi(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=mi.resolve(!1);for(const n of t)e=e.next((t=>t?mi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new mi(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new mi(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.at=-1;class Ti{constructor(t,e){this.comparator=t,this.root=e||Ii.EMPTY}insert(t,e){return new Ti(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ii.BLACK,null,null))}remove(t){return new Ti(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ii.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ci(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ci(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ci(this.root,t,this.comparator,!0)}}class Ci{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ii{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Ii.RED,this.left=null!=s?s:Ii.EMPTY,this.right=null!=i?i:Ii.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Ii(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ii.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ii.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ii.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ii.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ps();if(this.right.isRed())throw Ps();const t=this.left.check();if(t!==this.right.check())throw Ps();return t+(this.isRed()?0:1)}}Ii.EMPTY=null,Ii.RED=!0,Ii.BLACK=!1,Ii.EMPTY=new class{constructor(){this.size=0}get key(){throw Ps()}get value(){throw Ps()}get color(){throw Ps()}get left(){throw Ps()}get right(){throw Ps()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ii(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(t){this.comparator=t,this.data=new Ti(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _i(this.data.getIterator())}getIteratorFrom(t){return new _i(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Si))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Si(this.comparator);return e.data=t,e}}class _i{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(t){this.fields=t,t.sort(oi.comparator)}static empty(){return new Ai([])}unionWith(t){let e=new Si(oi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ai(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ti(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Di(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Di(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Zs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Di.EMPTY_BYTE_STRING=new Di("");const ki=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(t){if(Fs(!!t),"string"==typeof t){let e=0;const n=ki.exec(t);if(Fs(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Li(t.seconds),nanos:Li(t.nanos)}}function Li(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ri(t){return"string"==typeof t?Di.fromBase64String(t):Di.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function xi(t){const e=t.mapValue.fields.__previous_value__;return Oi(e)?xi(e):e}function Mi(t){const e=Ni(t.mapValue.fields.__local_write_time__.timestampValue);return new ei(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Pi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Pi&&t.projectId===this.projectId&&t.database===this.database}}function Fi(t){return null==t}function Ui(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ji(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oi(t)?4:tr(t)?9007199254740991:10:Ps()}function qi(t,e){if(t===e)return!0;const n=ji(t);if(n!==ji(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mi(t).isEqual(Mi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ni(t.timestampValue),s=Ni(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ri(t.bytesValue).isEqual(Ri(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Li(t.geoPointValue.latitude)===Li(e.geoPointValue.latitude)&&Li(t.geoPointValue.longitude)===Li(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Li(t.integerValue)===Li(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Li(t.doubleValue),s=Li(e.doubleValue);return n===s?Ui(n)===Ui(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ti(t.arrayValue.values||[],e.arrayValue.values||[],qi);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(wi(n)!==wi(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!qi(n[i],s[i])))return!1;return!0}(t,e);default:return Ps()}}function Hi(t,e){return void 0!==(t.values||[]).find((t=>qi(t,e)))}function Ki(t,e){if(t===e)return 0;const n=ji(t),s=ji(e);if(n!==s)return Zs(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Zs(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Li(t.integerValue||t.doubleValue),s=Li(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return zi(t.timestampValue,e.timestampValue);case 4:return zi(Mi(t),Mi(e));case 5:return Zs(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ri(t),s=Ri(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=Zs(n[i],s[i]);if(0!==t)return t}return Zs(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Zs(Li(t.latitude),Li(e.latitude));return 0!==n?n:Zs(Li(t.longitude),Li(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=Ki(n[i],s[i]);if(t)return t}return Zs(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Bi.mapValue&&e===Bi.mapValue)return 0;if(t===Bi.mapValue)return 1;if(e===Bi.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=Zs(s[o],r[o]);if(0!==t)return t;const e=Ki(n[s[o]],i[r[o]]);if(0!==e)return e}return Zs(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Ps()}}function zi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Zs(t,e);const n=Ni(t),s=Ni(e),i=Zs(n.seconds,s.seconds);return 0!==i?i:Zs(n.nanos,s.nanos)}function $i(t){return Gi(t)}function Gi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ni(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ri(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ai.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Gi(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Gi(t.fields[i])}`;return n+"}"}(t.mapValue):Ps();var e,n}function Qi(t){return!!t&&"integerValue"in t}function Wi(t){return!!t&&"arrayValue"in t}function Xi(t){return!!t&&"nullValue"in t}function Yi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ji(t){return!!t&&"mapValue"in t}function Zi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ei(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Zi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(t){this.value=t}static empty(){return new er({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ji(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zi(e)}setAll(t){let e=oi.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Zi(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ji(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ji(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ei(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new er(Zi(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new nr(t,0,ni.min(),ni.min(),er.empty(),0)}static newFoundDocument(t,e,n){return new nr(t,1,e,ni.min(),n,0)}static newNoDocument(t,e){return new nr(t,2,e,ni.min(),er.empty(),0)}static newUnknownDocument(t,e){return new nr(t,3,e,ni.min(),er.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=er.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=er.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ni.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof nr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new nr(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ht=null}}function ir(t,e=null,n=[],s=[],i=null,r=null,o=null){return new sr(t,e,n,s,i,r,o)}function rr(t){const e=Us(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+$i(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Fi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>$i(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>$i(t))).join(",")),e.ht=t}return e.ht}function or(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${$i(e.value)}`;var e})).join(", ")}]`),Fi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>$i(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>$i(t))).join(",")),`Target(${e})`}function ar(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Er(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!qi(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tr(t.startAt,e.startAt)&&Tr(t.endAt,e.endAt)}function cr(t){return ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ur extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new hr(t,e,n):"array-contains"===e?new gr(t,n):"in"===e?new pr(t,n):"not-in"===e?new mr(t,n):"array-contains-any"===e?new yr(t,n):new ur(t,e,n)}static lt(t,e,n){return"in"===e?new lr(t,n):new dr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Ki(e,this.value)):null!==e&&ji(this.value)===ji(e)&&this.ft(Ki(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ps()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hr extends ur{constructor(t,e,n){super(t,e,n),this.key=ai.fromName(n.referenceValue)}matches(t){const e=ai.comparator(t.key,this.key);return this.ft(e)}}class lr extends ur{constructor(t,e){super(t,"in",e),this.keys=fr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class dr extends ur{constructor(t,e){super(t,"not-in",e),this.keys=fr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function fr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ai.fromName(t.referenceValue)))}class gr extends ur{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Wi(e)&&Hi(e.arrayValue,this.value)}}class pr extends ur{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Hi(this.value.arrayValue,e)}}class mr extends ur{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Hi(this.value.arrayValue,e)}}class yr extends ur{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Wi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Hi(this.value.arrayValue,t)))}}class vr{constructor(t,e){this.position=t,this.inclusive=e}}class wr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Er(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function br(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?ai.comparator(ai.fromName(o.referenceValue),n.key):Ki(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Tr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Ir(t,e,n,s,i,r,o,a){return new Cr(t,e,n,s,i,r,o,a)}function Sr(t){return new Cr(t)}function _r(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ar(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Dr(t){for(const e of t.filters)if(e.dt())return e.field;return null}function kr(t){return null!==t.collectionGroup}function Nr(t){const e=Us(t);if(null===e._t){e._t=[];const t=Dr(e),n=Ar(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new wr(t)),e._t.push(new wr(oi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new wr(oi.keyField(),t))}}}return e._t}function Lr(t){const e=Us(t);if(!e.wt)if("F"===e.limitType)e.wt=ir(e.path,e.collectionGroup,Nr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Nr(e)){const e="desc"===i.dir?"asc":"desc";t.push(new wr(i.field,e))}const n=e.endAt?new vr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new vr(e.startAt.position,e.startAt.inclusive):null;e.wt=ir(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function Rr(t,e,n){return new Cr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Or(t,e){return ar(Lr(t),Lr(e))&&t.limitType===e.limitType}function xr(t){return`${rr(Lr(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${or(Lr(t))}; limitType=${t.limitType})`}function Vr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ai.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=br(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Nr(t),e))&&!(t.endAt&&!function(t,e,n){const s=br(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Nr(t),e))}(t,e)}function Pr(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fr(t){return(e,n)=>{let s=!1;for(const i of Nr(t)){const t=Ur(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Ur(t,e,n){const s=t.field.isKeyField()?ai.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Ki(s,i):Ps()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ps()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(e)?"-0":e}}function jr(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this._=void 0}}function Hr(t,e,n){return t instanceof $r?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Gr?Qr(t,e):t instanceof Wr?Xr(t,e):function(t,e){const n=zr(t,e),s=Jr(n)+Jr(t.yt);return Qi(n)&&Qi(t.yt)?jr(s):Br(t.It,s)}(t,e)}function Kr(t,e,n){return t instanceof Gr?Qr(t,e):t instanceof Wr?Xr(t,e):n}function zr(t,e){return t instanceof Yr?Qi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class $r extends qr{}class Gr extends qr{constructor(t){super(),this.elements=t}}function Qr(t,e){const n=Zr(e);for(const s of t.elements)n.some((t=>qi(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Wr extends qr{constructor(t){super(),this.elements=t}}function Xr(t,e){let n=Zr(e);for(const s of t.elements)n=n.filter((t=>!qi(t,s)));return{arrayValue:{values:n}}}class Yr extends qr{constructor(t,e){super(),this.It=t,this.yt=e}}function Jr(t){return Li(t.integerValue||t.doubleValue)}function Zr(t){return Wi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Gr&&e instanceof Gr||t instanceof Wr&&e instanceof Wr?ti(t.elements,e.elements,qi):t instanceof Yr&&e instanceof Yr?qi(t.yt,e.yt):t instanceof $r&&e instanceof $r}(t.transform,e.transform)}class eo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new eo}static exists(t){return new eo(void 0,t)}static updateTime(t){return new eo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function no(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class so{}function io(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new go(t.key,eo.none()):new co(t.key,t.data,eo.none());{const n=t.data,s=er.empty();let i=new Si(oi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new uo(t.key,s,new Ai(i.toArray()),eo.none())}}function ro(t,e,n){t instanceof co?function(t,e,n){const s=t.value.clone(),i=lo(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof uo?function(t,e,n){if(!no(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=lo(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ho(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function oo(t,e,n,s){return t instanceof co?function(t,e,n,s){if(!no(t.precondition,e))return n;const i=t.value.clone(),r=fo(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof uo?function(t,e,n,s){if(!no(t.precondition,e))return n;const i=fo(t.fieldTransforms,s,e),r=e.data;return r.setAll(ho(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return no(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ao(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ti(t,e,((t,e)=>to(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class co extends so{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class uo extends so{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ho(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function lo(t,e,n){const s=new Map;Fs(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Kr(o,a,n[i]))}return s}function fo(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Hr(t,r,e))}return s}class go extends so{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mo,yo;function vo(t){if(void 0===t)return xs("GRPC error has no .code"),Bs.UNKNOWN;switch(t){case mo.OK:return Bs.OK;case mo.CANCELLED:return Bs.CANCELLED;case mo.UNKNOWN:return Bs.UNKNOWN;case mo.DEADLINE_EXCEEDED:return Bs.DEADLINE_EXCEEDED;case mo.RESOURCE_EXHAUSTED:return Bs.RESOURCE_EXHAUSTED;case mo.INTERNAL:return Bs.INTERNAL;case mo.UNAVAILABLE:return Bs.UNAVAILABLE;case mo.UNAUTHENTICATED:return Bs.UNAUTHENTICATED;case mo.INVALID_ARGUMENT:return Bs.INVALID_ARGUMENT;case mo.NOT_FOUND:return Bs.NOT_FOUND;case mo.ALREADY_EXISTS:return Bs.ALREADY_EXISTS;case mo.PERMISSION_DENIED:return Bs.PERMISSION_DENIED;case mo.FAILED_PRECONDITION:return Bs.FAILED_PRECONDITION;case mo.ABORTED:return Bs.ABORTED;case mo.OUT_OF_RANGE:return Bs.OUT_OF_RANGE;case mo.UNIMPLEMENTED:return Bs.UNIMPLEMENTED;case mo.DATA_LOSS:return Bs.DATA_LOSS;default:return Ps()}}(yo=mo||(mo={}))[yo.OK=0]="OK",yo[yo.CANCELLED=1]="CANCELLED",yo[yo.UNKNOWN=2]="UNKNOWN",yo[yo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yo[yo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yo[yo.NOT_FOUND=5]="NOT_FOUND",yo[yo.ALREADY_EXISTS=6]="ALREADY_EXISTS",yo[yo.PERMISSION_DENIED=7]="PERMISSION_DENIED",yo[yo.UNAUTHENTICATED=16]="UNAUTHENTICATED",yo[yo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yo[yo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yo[yo.ABORTED=10]="ABORTED",yo[yo.OUT_OF_RANGE=11]="OUT_OF_RANGE",yo[yo.UNIMPLEMENTED=12]="UNIMPLEMENTED",yo[yo.INTERNAL=13]="INTERNAL",yo[yo.UNAVAILABLE=14]="UNAVAILABLE",yo[yo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ei(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return bi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Ti(ai.comparator);function bo(){return Eo}const To=new Ti(ai.comparator);function Co(...t){let e=To;for(const n of t)e=e.insert(n.key,n);return e}function Io(t){let e=To;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function So(){return Ao()}function _o(){return Ao()}function Ao(){return new wo((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Ti(ai.comparator);const Do=new Si(ai.comparator);function ko(...t){let e=Do;for(const n of t)e=e.add(n);return e}const No=new Si(Zs);function Lo(){return No}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Oo.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ro(ni.min(),s,Lo(),bo(),ko())}}class Oo{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Oo(n,e,ko(),ko(),ko())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class Mo{constructor(t,e){this.targetId=t,this.At=e}}class Vo{constructor(t,e,n=Di.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Po{constructor(){this.Rt=0,this.bt=Bo(),this.Pt=Di.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=ko(),e=ko(),n=ko();return this.bt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Ps()}})),new Oo(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Bo()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Fo{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=bo(),this.qt=Uo(),this.Kt=new Si(Zs)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Ps()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){const t=s.target;if(cr(t))if(0===n){const n=new ai(t.path);this.jt(e,n,nr.newNoDocument(n,ni.min()))}else Fs(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,s)=>{const i=this.Xt(s);if(i){if(n.current&&cr(i.target)){const e=new ai(i.target.path);null!==this.Ut.get(e)||this.ee(s,e)||this.jt(s,e,nr.newNoDocument(e,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}}));let n=ko();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new Ro(t,e,this.Kt,this.Ut,n);return this.Ut=bo(),this.qt=Uo(),this.Kt=new Si(Zs),s}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new Po,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Si(Zs),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Os("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Po),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Uo(){return new Ti(ai.comparator)}function Bo(){return new Ti(ai.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),qo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Ho{constructor(t,e){this.databaseId=t,this.gt=e}}function Ko(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zo(t,e){return t.gt?e.toBase64():e.toUint8Array()}function $o(t){return Fs(!!t),ni.fromTimestamp(function(t){const e=Ni(t);return new ei(e.seconds,e.nanos)}(t))}function Go(t,e){return function(t){return new ii(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Qo(t){const e=ii.fromString(t);return Fs(da(e)),e}function Wo(t,e){const n=Qo(e);if(n.get(1)!==t.databaseId.projectId)throw new js(Bs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new js(Bs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ai(Zo(n))}function Xo(t,e){return Go(t.databaseId,e)}function Yo(t){const e=Qo(t);return 4===e.length?ii.emptyPath():Zo(e)}function Jo(t){return new ii(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zo(t){return Fs(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ta(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ps()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.gt?(Fs(void 0===e||"string"==typeof e),Di.fromBase64String(e||"")):(Fs(void 0===e||e instanceof Uint8Array),Di.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Bs.UNKNOWN:vo(t.code);return new js(e,t.message||"")}(o);n=new Vo(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Wo(t,s.document.name),r=$o(s.document.updateTime),o=new er({mapValue:{fields:s.document.fields}}),a=nr.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new xo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Wo(t,s.document),r=s.readTime?$o(s.readTime):ni.min(),o=nr.newNoDocument(i,r),a=s.removedTargetIds||[];n=new xo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Wo(t,s.document),r=s.removedTargetIds||[];n=new xo([],r,i,null)}else{if(!("filter"in e))return Ps();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new po(s),r=t.targetId;n=new Mo(r,i)}}return n}function ea(t,e){return{documents:[Xo(t,e.path)]}}function na(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Xo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Yi(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NAN"}};if(Xi(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Yi(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NOT_NAN"}};if(Xi(t.value))return{unaryFilter:{field:ca(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ca(t.field),op:aa(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ca(t.field),direction:oa(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.gt||Fi(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function sa(t){let e=Yo(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Fs(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=ra(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new wr(ua(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Fi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new vr(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new vr(n,e)}(n.endAt)),Ir(e,i,o,r,a,"F",c,u)}function ia(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ps()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ra(t){return t?void 0!==t.unaryFilter?[la(t)]:void 0!==t.fieldFilter?[ha(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ra(t))).reduce(((t,e)=>t.concat(e))):Ps():[]}function oa(t){return jo[t]}function aa(t){return qo[t]}function ca(t){return{fieldPath:t.canonicalString()}}function ua(t){return oi.fromServerFormat(t.fieldPath)}function ha(t){return ur.create(ua(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ps()}}(t.fieldFilter.op),t.fieldFilter.value)}function la(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ua(t.unaryFilter.field);return ur.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ua(t.unaryFilter.field);return ur.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ua(t.unaryFilter.field);return ur.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ua(t.unaryFilter.field);return ur.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ps()}}function da(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ga=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],pa=ga;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ma{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&ro(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=oo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=oo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=_o();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=io(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(ni.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ko())}isEqual(t){return this.batchId===t.batchId&&ti(this.mutations,t.mutations,((t,e)=>ao(t,e)))&&ti(this.baseMutations,t.baseMutations,((t,e)=>ao(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e,n,s,i=ni.min(),r=ni.min(),o=Di.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new va(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new va(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new va(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t){this.re=t}}function Ea(t){const e=sa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Rr(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Li(t.integerValue));else if("doubleValue"in t){const n=Li(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Ui(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Ri(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?tr(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Ps()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const s of Object.keys(n))this._e(s,e),this.ae(n[s],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const s of n)this.ae(s,e)}ge(t,e){this.le(e,37),ai.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}ba.Te=new ba;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(){this.Ye=new Ca}addToCollectionParentIndex(t,e){return this.Ye.add(e),mi.resolve()}getCollectionParents(t,e){return mi.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return mi.resolve()}deleteFieldIndex(t,e){return mi.resolve()}getDocumentsMatchingTarget(t,e){return mi.resolve(null)}getIndexType(t,e){return mi.resolve(0)}getFieldIndexes(t,e){return mi.resolve([])}getNextCollectionGroupToUpdate(t){return mi.resolve(null)}getMinOffset(t,e){return mi.resolve(li.min())}getMinOffsetFromCollectionGroup(t,e){return mi.resolve(li.min())}updateCollectionGroup(t,e,n){return mi.resolve()}updateIndexEntries(t,e){return mi.resolve()}}class Ca{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Si(ii.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Si(ii.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ia{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ia(t,Ia.DEFAULT_COLLECTION_PERCENTILE,Ia.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ia.DEFAULT_COLLECTION_PERCENTILE=10,Ia.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ia.DEFAULT=new Ia(41943040,Ia.DEFAULT_COLLECTION_PERCENTILE,Ia.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ia.DISABLED=new Ia(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sa{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Sa(0)}static vn(){return new Sa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a{constructor(){this.changes=new wo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,nr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?mi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&oo(n.mutation,t,Ai.empty(),ei.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ko()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ko()){const s=So();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Co();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=So();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ko())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=bo();const r=Ao(),o=Ao();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof uo)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),oo(o.mutation,e,o.mutation.getFieldMask(),ei.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Aa(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ao();let s=new Ti(((t,e)=>t-e)),i=ko();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Ai.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||ko()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=_o();c.forEach((t=>{if(!i.has(t)){const s=io(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return mi.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ai.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):kr(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):mi.resolve(So());let o=-1,a=i;return r.next((e=>mi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?mi.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ko()))).next((t=>({batchId:o,changes:Io(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ai(e)).next((t=>{let e=Co();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=Co();return this.indexManager.getCollectionParents(t,s).next((r=>mi.forEach(r,(r=>{const o=function(t,e){return new Cr(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,nr.newInvalidDocument(n)))}));let n=Co();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&oo(r.mutation,i,Ai.empty(),ei.now()),Vr(e,i)&&(n=n.insert(s,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):mi.resolve(nr.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return mi.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:$o(n.createTime)}),mi.resolve()}getNamedQuery(t,e){return mi.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Ea(t.bundledQuery),readTime:$o(t.readTime)}}(e)),mi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.overlays=new Ti(ai.comparator),this.es=new Map}getOverlay(t,e){return mi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=So();return mi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ue(t,e,s)})),mi.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),mi.resolve()}getOverlaysForCollection(t,e,n){const s=So(),i=e.length+1,r=new ai(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return mi.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Ti(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=So(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=So(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return mi.resolve(o)}ue(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ya(e,n));let i=this.es.get(e);void 0===i&&(i=ko(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.ns=new Si(Ra.ss),this.rs=new Si(Ra.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ra(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ra(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new ai(new ii([])),n=new Ra(e,t),s=new Ra(e,t+1),i=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new ai(new ii([])),n=new Ra(e,t),s=new Ra(e,t+1);let i=ko();return this.rs.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Ra(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ra{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return ai.comparator(t.key,e.key)||Zs(t._s,e._s)}static os(t,e){return Zs(t._s,e._s)||ai.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Si(Ra.ss)}checkEmpty(t){return mi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new ma(i,e,n,s);this.mutationQueue.push(r);for(const o of s)this.gs=this.gs.add(new Ra(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return mi.resolve(r)}lookupMutationBatch(t,e){return mi.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),i=s<0?0:s;return mi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return mi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return mi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ra(e,0),s=new Ra(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);i.push(e)})),mi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Si(Zs);return e.forEach((t=>{const e=new Ra(t,0),s=new Ra(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),mi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;ai.isDocumentKey(i)||(i=i.child(""));const r=new Ra(new ai(i),0);let o=new Si(Zs);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),r),mi.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Fs(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return mi.forEach(e.mutations,(s=>{const i=new Ra(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ra(e,0),s=this.gs.firstAfterOrEqual(n);return mi.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,mi.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t){this.Es=t,this.docs=new Ti(ai.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return mi.resolve(n?n.document.mutableCopy():nr.newInvalidDocument(e))}getEntries(t,e){let n=bo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():nr.newInvalidDocument(t))})),mi.resolve(n)}getAllFromCollection(t,e,n){let s=bo();const i=new ai(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||di(hi(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return mi.resolve(s)}getAllFromCollectionGroup(t,e,n,s){Ps()}As(t,e){return mi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ma(this)}getSize(t){return mi.resolve(this.size)}}class Ma extends _a{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),mi.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t){this.persistence=t,this.Rs=new wo((t=>rr(t)),ar),this.lastRemoteSnapshotVersion=ni.min(),this.highestTargetId=0,this.bs=0,this.Ps=new La,this.targetCount=0,this.vs=Sa.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),mi.resolve()}getLastRemoteSnapshotVersion(t){return mi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return mi.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),mi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),mi.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Sa(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,mi.resolve()}updateTargetData(t,e){return this.Dn(e),mi.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,mi.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),mi.waitFor(i).next((()=>s))}getTargetCount(t){return mi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return mi.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),mi.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),mi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),mi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return mi.resolve(n)}containsKey(t,e){return mi.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new vi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Va(this),this.indexManager=new Ta,this.remoteDocumentCache=function(t){return new xa(t)}((t=>this.referenceDelegate.xs(t))),this.It=new wa(e),this.Ns=new ka(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Na,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Oa(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Os("MemoryPersistence","Starting transaction:",t);const s=new Fa(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Os(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ms(t,e){return mi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Fa extends gi{constructor(t){super(),this.currentSequenceNumber=t}}class Ua{constructor(t){this.persistence=t,this.Fs=new La,this.$s=null}static Bs(t){return new Ua(t)}get Ls(){if(this.$s)return this.$s;throw Ps()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),mi.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),mi.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),mi.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mi.forEach(this.Ls,(n=>{const s=ai.fromPath(n);return this.Us(t,s).next((t=>{t||e.removeEntry(s,ni.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return mi.or([()=>mi.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=ko(),s=ko();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ba(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((i=>i||this.Oi(t,e,s,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(_r(e))return mi.resolve(null);let n=Lr(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Rr(e,null,"F"),n=Lr(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=ko(...s);return this.Ni.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,s);return this.$i(e,r,i,n.readTime)?this.ki(t,Rr(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Oi(t,e,n,s){return _r(e)||s.isEqual(ni.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const r=this.Fi(e,i);return this.$i(e,r,n,s)?this.Mi(t,e):(Rs()<=o["in"].DEBUG&&Os("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(e)),this.Bi(t,r,e,ui(s,-1)))}))}Fi(t,e){let n=new Si(Fr(t));return e.forEach(((e,s)=>{Vr(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(t,e){return Rs()<=o["in"].DEBUG&&Os("QueryEngine","Using full collection scan to execute query:",Mr(e)),this.Ni.getDocumentsMatchingQuery(t,e,li.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new Ti(Zs),this.qi=new wo((t=>rr(t)),ar),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Da(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function Ha(t,e,n,s){return new qa(t,e,n,s)}async function Ka(t,e){const n=Us(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=ko();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function za(t){const e=Us(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function $a(t,e){const n=Us(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Di.EMPTY_BYTE_STRING,ni.min()).withLastLimboFreeSnapshotVersion(ni.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Cs.updateTargetData(t,u))}));let a=bo(),c=ko();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Ga(t,r,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(ni.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return mi.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=i,t)))}function Ga(t,e,n){let s=ko(),i=ko();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=bo();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(ni.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):Os("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:s,zi:i}}))}function Qa(t,e){const n=Us(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((i=>i?(s=i,mi.resolve(s)):n.Cs.allocateTargetId(t).next((i=>(s=new va(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function Wa(t,e,n){const s=Us(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!yi(t))throw t;Os("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function Xa(t,e,n){const s=Us(t);let i=ni.min(),r=ko();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Us(t),i=s.qi.get(n);return void 0!==i?mi.resolve(s.Ui.get(i)):s.Cs.getTargetData(e,n)}(s,t,Lr(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?i:ni.min(),n?r:ko()))).next((t=>(Ya(s,Pr(e),t),{documents:t,Hi:r})))))}function Ya(t,e,n){let s=t.Ki.get(e)||ni.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}class Ja{constructor(){this.activeTargetIds=Lo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Za{constructor(){this.Lr=new Ja,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Ja,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Os("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Os("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,s,i){const r=this.ho(t,e);Os("RestConnection","Sending: ",r,n);const o={};return this.lo(o,s,i),this.fo(t,r,o,n).then((t=>(Os("RestConnection","Received: ",t),t)),(e=>{throw Ms("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,s,i,r){return this.ao(t,e,n,s,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ns,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=nc[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,s){return new Promise(((i,r)=>{const o=new As;o.setWithCredentials(!0),o.listenOnce(Ts.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case bs.NO_ERROR:const e=o.getResponseJson();Os("Connection","XHR received:",JSON.stringify(e)),i(e);break;case bs.TIMEOUT:Os("Connection",'RPC "'+t+'" timed out'),r(new js(Bs.DEADLINE_EXCEEDED,"Request time out"));break;case bs.HTTP_ERROR:const n=o.getStatus();if(Os("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Bs).indexOf(e)>=0?e:Bs.UNKNOWN}(t.status);r(new js(e,t.message))}else r(new js(Bs.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new js(Bs.UNAVAILABLE,"Connection failed."));break;default:Ps()}}finally{Os("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=ws(),r=Es(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ss({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");Os("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,h=!1;const l=new sc({Hr:t=>{h?Os("Connection","Not sending because WebChannel is closed:",t):(u||(Os("Connection","Opening WebChannel transport."),c.open(),u=!0),Os("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,_s.EventType.OPEN,(()=>{h||Os("Connection","WebChannel transport opened.")})),d(c,_s.EventType.CLOSE,(()=>{h||(h=!0,Os("Connection","WebChannel transport closed"),l.io())})),d(c,_s.EventType.ERROR,(t=>{h||(h=!0,Ms("Connection","WebChannel transport errored:",t),l.io(new js(Bs.UNAVAILABLE,"The operation could not be completed")))})),d(c,_s.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Fs(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Os("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=mo[t];if(void 0!==e)return vo(e)}(t),n=i.message;void 0===e&&(e=Bs.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,l.io(new js(e,n)),c.close()}else Os("Connection","WebChannel received:",n),l.ro(n)}})),d(r,Cs.STAT_EVENT,(t=>{t.stat===Is.PROXY?Os("Connection","Detected buffering proxy"):t.stat===Is.NOPROXY&&Os("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){return new Ho(t,!0)}class ac{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&Os("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,e,n,s,i,r,o,a){this.Hs=t,this.vo=n,this.Vo=s,this.So=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new ac(t,e)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===Bs.RESOURCE_EXHAUSTED?(xs(e.toString()),xs("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===Bs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new js(Bs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.Oo()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return Os("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Hs.enqueueAndForget((()=>this.Do===t?e():(Os("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uc extends cc{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.It=i}Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=ta(this.It,t),n=function(t){if(!("targetChange"in t))return ni.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ni.min():e.readTime?$o(e.readTime):ni.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=Jo(this.It),e.addTarget=function(t,e){let n;const s=e.target;return n=cr(s)?{documents:ea(t,s)}:{query:na(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=zo(t,e.resumeToken):e.snapshotVersion.compareTo(ni.min())>0&&(n.readTime=Ko(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=ia(this.It,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=Jo(this.It),e.removeTarget=t,this.Lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.It=s,this.su=!1}iu(){if(this.su)throw new js(Bs.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.So.ao(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new js(Bs.UNKNOWN,t.toString())}))}_o(t,e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.So._o(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new js(Bs.UNKNOWN,t.toString())}))}terminate(){this.su=!0}}class lc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.au("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.au(t)}au(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(xs(e),this.uu=!1):Os("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr((t=>{n.enqueueAndForget((async()=>{bc(this)&&(Os("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Us(t);e.wu.add(4),await gc(e),e.yu.set("Unknown"),e.wu.delete(4),await fc(e)}(this))}))})),this.yu=new lc(n,s)}}async function fc(t){if(bc(t))for(const e of t.mu)await e(!0)}async function gc(t){for(const e of t.mu)await e(!1)}function pc(t,e){const n=Us(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Ec(n)?wc(n):kc(n).Oo()&&yc(n,e))}function mc(t,e){const n=Us(t),s=kc(n);n._u.delete(e),s.Oo()&&vc(n,e),0===n._u.size&&(s.Oo()?s.$o():bc(n)&&n.yu.set("Unknown"))}function yc(t,e){t.pu.Mt(e.targetId),kc(t).Ho(e)}function vc(t,e){t.pu.Mt(e),kc(t).Jo(e)}function wc(t){t.pu=new Fo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),kc(t).start(),t.yu.cu()}function Ec(t){return bc(t)&&!kc(t).ko()&&t._u.size>0}function bc(t){return 0===Us(t).wu.size}function Tc(t){t.pu=void 0}async function Cc(t){t._u.forEach(((e,n)=>{yc(t,e)}))}async function Ic(t,e){Tc(t),Ec(t)?(t.yu.lu(e),wc(t)):t.yu.set("Unknown")}async function Sc(t,e,n){if(t.yu.set("Online"),e instanceof Vo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t._u.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t._u.delete(s),t.pu.removeTarget(s))}(t,e)}catch(n){Os("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await _c(t,n)}else if(e instanceof xo?t.pu.Gt(e):e instanceof Mo?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ni.min()))try{const e=await za(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.te(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t._u.get(s);i&&t._u.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(Di.EMPTY_BYTE_STRING,n.snapshotVersion)),vc(t,e);const s=new va(n.target,e,1,n.sequenceNumber);yc(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Os("RemoteStore","Failed to raise snapshot:",e),await _c(t,e)}}async function _c(t,e,n){if(!yi(e))throw e;t.wu.add(1),await gc(t),t.yu.set("Offline"),n||(n=()=>za(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Os("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await fc(t)}))}async function Ac(t,e){const n=Us(t);n.asyncQueue.verifyOperationInProgress(),Os("RemoteStore","RemoteStore received new credentials");const s=bc(n);n.wu.add(3),await gc(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await fc(n)}async function Dc(t,e){const n=Us(t);e?(n.wu.delete(2),await fc(n)):e||(n.wu.add(2),await gc(n),n.yu.set("Unknown"))}function kc(t){return t.Iu||(t.Iu=function(t,e,n){const s=Us(t);return s.iu(),new uc(e,s.So,s.authCredentials,s.appCheckCredentials,s.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Cc.bind(null,t),Zr:Ic.bind(null,t),zo:Sc.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),Ec(t)?wc(t):t.yu.set("Unknown")):(await t.Iu.stop(),Tc(t))}))),t.Iu}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new qs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Nc(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new js(Bs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lc(t,e){if(xs("AsyncQueue",`${e}: ${t}`),yi(t))return new js(Bs.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ai.comparator(e.key,n.key):(t,e)=>ai.comparator(t.key,e.key),this.keyedMap=Co(),this.sortedSet=new Ti(this.comparator)}static emptySet(t){return new Rc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Rc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Rc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.Eu=new Ti(ai.comparator)}track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):Ps():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class xc{constructor(t,e,n,s,i,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new xc(t,e,Rc.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Or(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.Ru=void 0,this.listeners=[]}}class Vc{constructor(){this.queries=new wo((t=>xr(t)),Or),this.onlineState="Unknown",this.bu=new Set}}async function Pc(t,e){const n=Us(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Mc),i)try{r.Ru=await n.onListen(s)}catch(t){const n=Lc(t,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&jc(n)}async function Fc(t,e){const n=Us(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Uc(t,e){const n=Us(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.vu(i)&&(s=!0);e.Ru=i}}s&&jc(n)}function Bc(t,e,n){const s=Us(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function jc(t){t.bu.forEach((t=>{t.next()}))}class qc{constructor(t,e,n){this.query=t,this.Vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new xc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Su?this.Cu(t)&&(this.Vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.Vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=xc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Su=!0,this.Vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hc{constructor(t){this.key=t}}class Kc{constructor(t){this.key=t}}class zc{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ko(),this.mutatedKeys=ko(),this.Gu=Fr(t),this.Qu=new Rc(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Oc,s=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=Vr(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,$i:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Au();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ps()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new xc(this.query,t.Qu,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Oc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=ko(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new Kc(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Hc(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=ko();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return xc.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class $c{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Gc{constructor(t){this.key=t,this.nc=!1}}class Qc{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new wo((t=>xr(t)),Or),this.rc=new Map,this.oc=new Set,this.uc=new Ti(ai.comparator),this.cc=new Map,this.ac=new La,this.hc={},this.lc=new Map,this.fc=Sa.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Wc(t,e){const n=uu(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const t=await Qa(n.localStore,Lr(e));n.isPrimaryClient&&pc(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Xc(n,e,s,"current"===r,t.resumeToken)}return i}async function Xc(t,e,n,s,i){t._c=(e,n,s)=>async function(t,e,n,s){let i=e.view.Wu(n);i.$i&&(i=await Xa(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return su(t,e.targetId,o.Xu),o.snapshot}(t,e,n,s);const r=await Xa(t.localStore,e,!0),o=new zc(e,r.Hi),a=o.Wu(r.documents),c=Oo.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);su(t,n,u.Xu);const h=new $c(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Yc(t,e){const n=Us(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter((t=>!Or(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Wa(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),mc(n.remoteStore,s.targetId),eu(n,s.targetId)})).catch(pi)):(eu(n,s.targetId),await Wa(n.localStore,s.targetId,!0))}async function Jc(t,e){const n=Us(t);try{const t=await $a(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.cc.get(e);s&&(Fs(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.nc=!0:t.modifiedDocuments.size>0?Fs(s.nc):t.removedDocuments.size>0&&(Fs(s.nc),s.nc=!1))})),await ou(n,t,e)}catch(t){await pi(t)}}function Zc(t,e,n){const s=Us(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ic.forEach(((n,s)=>{const i=s.view.Pu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Us(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Pu(e)&&(s=!0)})),s&&jc(n)}(s.eventManager,e),t.length&&s.sc.zo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tu(t,e,n){const s=Us(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let t=new Ti(ai.comparator);t=t.insert(r,nr.newNoDocument(r,ni.min()));const n=ko().add(r),i=new Ro(ni.min(),new Map,new Si(Zs),t,n);await Jc(s,i),s.uc=s.uc.remove(r),s.cc.delete(e),ru(s)}else await Wa(s.localStore,e,!1).then((()=>eu(s,e,n))).catch(pi)}function eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||nu(t,e)}))}function nu(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(mc(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ru(t))}function su(t,e,n){for(const s of n)s instanceof Hc?(t.ac.addReference(s.key,e),iu(t,s)):s instanceof Kc?(Os("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||nu(t,s.key)):Ps()}function iu(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(Os("SyncEngine","New document in limbo: "+n),t.oc.add(s),ru(t))}function ru(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ai(ii.fromString(e)),s=t.fc.next();t.cc.set(s,new Gc(n)),t.uc=t.uc.insert(n,s),pc(t.remoteStore,new va(Lr(Sr(n.path)),s,2,vi.at))}}async function ou(t,e,n){const s=Us(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach(((t,a)=>{o.push(s._c(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Ba.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.sc.zo(i),await async function(t,e){const n=Us(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>mi.forEach(e,(e=>mi.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>mi.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!yi(t))throw t;Os("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Ui.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(t,i)}}}(s.localStore,r))}async function au(t,e){const n=Us(t);if(!n.currentUser.isEqual(e)){Os("SyncEngine","User change. New user:",e.toKey());const t=await Ka(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new js(Bs.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ou(n,t.ji)}}function cu(t,e){const n=Us(t),s=n.cc.get(e);if(s&&s.nc)return ko().add(s.key);{let t=ko();const s=n.rc.get(e);if(!s)return t;for(const e of s){const s=n.ic.get(e);t=t.unionWith(s.view.ju)}return t}}function uu(t){const e=Us(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tu.bind(null,e),e.sc.zo=Uc.bind(null,e.eventManager),e.sc.wc=Bc.bind(null,e.eventManager),e}class hu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=oc(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Ha(this.persistence,new ja,t.initialUser,this.It)}yc(t){return new Pa(Ua.Bs,this.It)}gc(t){return new Za}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Zc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=au.bind(null,this.syncEngine),await Dc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Vc}createDatastore(t){const e=oc(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new ic(s));var s;return function(t,e,n,s){return new hc(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Zc(this.syncEngine,t,0),r=ec.C()?new ec:new tc,new dc(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Qc(t,e,n,s,i,r);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Us(t);Os("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await gc(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t,e,n){if(!n)throw new js(Bs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fu(t,e,n,s){if(!0===e&&!0===s)throw new js(Bs.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gu(t){if(ai.isDocumentKey(t))throw new js(Bs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ps()}function mu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new js(Bs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pu(t);throw new js(Bs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yu=new Map;class vu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new js(Bs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new js(Bs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,fu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new js(Bs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new js(Bs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ks;switch(t.type){case"gapi":const e=t.client;return new Qs(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new js(Bs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=yu.get(t);e&&(Os("ComponentProvider","Removing Datastore"),yu.delete(t),e.terminate())}(this),Promise.resolve()}}function Eu(t,e,n,s={}){var i;const r=(t=mu(t,wu))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&Ms("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=ks.MOCK_USER;else{e=(0,a.Sg)(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new js(Bs.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ks(r)}t._authCredentials=new zs(new Hs(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bu(this.firestore,t,this._key)}}class Tu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Tu(this.firestore,t,this._query)}}class Cu extends Tu{constructor(t,e,n){super(t,e,Sr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bu(this.firestore,null,new ai(t))}withConverter(t){return new Cu(this.firestore,t,this._path)}}function Iu(t,e,...n){if(t=(0,a.m9)(t),du("collection","path",e),t instanceof wu){const s=ii.fromString(e,...n);return gu(s),new Cu(t,null,s)}{if(!(t instanceof bu||t instanceof Cu))throw new js(Bs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ii.fromString(e,...n));return gu(s),new Cu(t.firestore,null,s)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Su{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):xs("Uncaught Error in snapshot listener:",t)}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _u{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=ks.UNAUTHENTICATED,this.clientId=Js.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Os("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Os("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new js(Bs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Lc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Au(t,e){t.asyncQueue.verifyOperationInProgress(),Os("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Ka(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Du(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ku(t);Os("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Ac(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ac(e.remoteStore,n))),t.onlineComponents=e}async function ku(t){return t.offlineComponents||(Os("FirestoreClient","Using default OfflineComponentProvider"),await Au(t,new hu)),t.offlineComponents}async function Nu(t){return t.onlineComponents||(Os("FirestoreClient","Using default OnlineComponentProvider"),await Du(t,new lu)),t.onlineComponents}async function Lu(t){const e=await Nu(t),n=e.eventManager;return n.onListen=Wc.bind(null,e.syncEngine),n.onUnlisten=Yc.bind(null,e.syncEngine),n}class Ru{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new ac(this,"async_queue_retry"),this.Wc=()=>{const t=rc();t&&Os("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=rc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=rc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new qs;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(T){if(!yi(T))throw T;Os("AsyncQueue","Operation failed with retryable error: "+T)}this.Lc.length>0&&this.No.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw xs("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const s=Nc.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(s),s}zc(){this.Kc&&Ps()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}function Ou(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const s of e)if(s in n&&"function"==typeof n[s])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class xu extends wu{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ru,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pu(this),this._firestoreClient.terminate()}}function Mu(t,e){const n="object"==typeof t?t:(0,i.Mq)(),s="string"==typeof t?t:e||"(default)",r=(0,i.qX)(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=(0,a.P0)("firestore");t&&Eu(r,...t)}return r}function Vu(t){return t._firestoreClient||Pu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Pu(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Vi(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _u(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fu(Di.fromBase64String(t))}catch(t){throw new js(Bs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Fu(Di.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new js(Bs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new js(Bs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new js(Bs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Zs(this._lat,t._lat)||Zs(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new RegExp("[~\\*/\\[\\]]");function qu(t,e,n){if(e.search(ju)>=0)throw Hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Uu(...e.split("."))._internalPath}catch(s){throw Hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hu(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new js(Bs.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ku{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new zu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($u("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class zu extends Ku{data(){return super.data()}}function $u(t,e){return"string"==typeof e?qu(t,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new js(Bs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qu{convertValue(t,e="none"){switch(ji(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Li(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ri(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ps()}}convertObject(t,e){const n={};return Ei(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Bu(Li(t.latitude),Li(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=xi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Mi(t));default:return null}}convertTimestamp(t){const e=Ni(t);return new ei(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ii.fromString(t);Fs(da(n));const s=new Pi(n.get(1),n.get(3)),i=new ai(n.popFirst(5));return s.isEqual(e)||xs(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xu extends Ku{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field($u("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Yu extends Xu{data(t={}){return super.data(t)}}class Ju{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Wu(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Yu(this._firestore,this._userDataWriter,n.key,n,new Wu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new js(Bs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Yu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Wu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Yu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Wu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Zu(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Zu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ps()}}class th extends Qu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bu(this.firestore,null,e)}}function eh(t,...e){var n,s,i;t=(0,a.m9)(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Ou(e[o])||(r=e[o],o++);const c={includeMetadataChanges:r.includeMetadataChanges};if(Ou(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,h,l;if(t instanceof bu)h=mu(t.firestore,xu),l=Sr(t._key.path),u={next:n=>{e[o]&&e[o](nh(h,t,n))},error:e[o+1],complete:e[o+2]};else{const n=mu(t,Tu);h=mu(n.firestore,xu),l=n._query;const s=new th(h);u={next:t=>{e[o]&&e[o](new Ju(h,s,n,t))},error:e[o+1],complete:e[o+2]},Gu(t._query)}return function(t,e,n,s){const i=new Su(s),r=new qc(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>Pc(await Lu(t),r))),()=>{i.bc(),t.asyncQueue.enqueueAndForget((async()=>Fc(await Lu(t),r)))}}(Vu(h),l,c,u)}function nh(t,e,n){const s=n.docs.get(e._key),i=new th(t);return new Xu(t,i,e._key,s,new Wu(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Ns=t}(i.Jn),(0,i.Xd)(new r.wA("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new xu(new $s(t.getProvider("auth-internal")),new Xs(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new js(Bs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Ds,"3.7.1",t),(0,i.KN)(Ds,"3.7.1","esm2017")}()},7085:function(t,e,n){"use strict";n.r(e),n.d(e,{db:function(){return u},firebaseConfig:function(){return a}});var s=n(7077),i="firebase",r="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.KN)(i,r,"app");var o=n(6035);const a={apiKey:"AIzaSyA4mbUma7djO4NWyEOb6ktXRTJOgNX2chM",authDomain:"vue-poject.firebaseapp.com",projectId:"vue-poject",storageBucket:"vue-poject.appspot.com",messagingSenderId:"262380822458",appId:"1:262380822458:web:26259b7fb1958cf6cd8783"},c=(0,s.ZF)(a),u=(0,o.ad)(c)},3093:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var s=n(3396),i=n(9242);const r=t=>((0,s.dD)("data-v-559014a8"),t=t(),(0,s.Cn)(),t),o={class:"modal-backdrop"},a={class:"modal-window"},c={class:"modal-header"},u=r((()=>(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},[(0,s._)("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})],-1))),h=[u],l={class:"modal-body"},d=(0,s.Uk)(" Да, правильно! Эти аксессуары принадлежат Shelby Cobra. "),f={class:"modal-footer"};function g(t,e,n,r,u,g){return(0,s.wg)(),(0,s.j4)(i.uT,{name:"modal-fade"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s._)("div",a,[(0,s._)("header",c,[(0,s.WI)(t.$slots,"header",{},void 0,!0),(0,s._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...t)=>g.close&&g.close(...t))},h)]),(0,s._)("section",l,[(0,s.WI)(t.$slots,"body",{},(()=>[d]),!0)]),(0,s._)("footer",f,[(0,s.WI)(t.$slots,"footer",{},void 0,!0),(0,s._)("button",{type:"button",class:"btn-green",onClick:e[1]||(e[1]=(...t)=>g.close&&g.close(...t))}," Close modal ")])])])])),_:3})}var p={name:"ModalWindow",data(){return{show:!1}},methods:{close(){this.$emit("close")}}},m=n(89);const y=(0,m.Z)(p,[["render",g],["__scopeId","data-v-559014a8"]]);var v=y},2515:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var s=n(3396),i=n(9242),r=n(7139);const o=t=>((0,s.dD)("data-v-2fbe9c64"),t=t(),(0,s.Cn)(),t),a={class:"drag"},c=o((()=>(0,s._)("div",{class:"task"},[(0,s._)("div",null,"Выбери"),(0,s._)("div",null,"все"),(0,s._)("div",null,"аксессуары"),(0,s._)("div",null,"для"),(0,s._)("div",null,"Shelby"),(0,s._)("div",null,"Cobra")],-1))),u={class:"column"},h=["onDrop"],l={id:"top"},d=["onDragstart"],f=(0,s.Uk)(" Help in "),g=o((()=>(0,s._)("br",null,null,-1))),p=(0,s.Uk)(" console "),m=[f,g,p],y=(0,s.Uk)("Нет, неправильно!");function v(t,e,n,o,f,g){const p=(0,s.up)("modal-window");return(0,s.wg)(),(0,s.iD)("div",a,[c,(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.categories,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,onDrop:e=>o.onDrop(e,t.id),class:"column-item",onDragenter:e[0]||(e[0]=(0,i.iM)((()=>{}),["prevent"])),onDragover:e[1]||(e[1]=(0,i.iM)((()=>{}),["prevent"]))},[(0,s._)("h3",l,(0,r.zw)(t.name),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.items.filter((e=>e.categoryId===t.id)),(t=>((0,s.wg)(),(0,s.iD)("div",{onDragstart:e=>o.onDragStart(e,t),class:"item",key:t.id,draggable:"true"},(0,r.zw)(t.name),41,d)))),128))],40,h)))),128))]),(0,s._)("button",{class:"btn btn-success check",onClick:e[2]||(e[2]=t=>{g.checkCar(),g.showModal()})},"Проверить"),(0,s._)("button",{class:"btn btn-info help",onClick:e[3]||(e[3]=(...t)=>g.showHelp&&g.showHelp(...t)),title:"Click and look to console"},m),(0,s._)("button",{class:"btn btn-dark up",onClick:e[4]||(e[4]=(...t)=>g.toTop&&g.toTop(...t))},"Up"),(0,s.wy)((0,s.Wm)(p,{onClose:g.closeModal},null,8,["onClose"]),[[i.F8,f.isModalVisible&&f.isCorrectAccessory]]),(0,s.wy)((0,s.Wm)(p,{onClose:g.closeModal},{body:(0,s.w5)((()=>[y])),_:1},8,["onClose"]),[[i.F8,f.isModalVisible&&!f.isCorrectAccessory]])])}n(7658);var w=n(4870),E=n(6035),b=n(7085),T=n(3093);const C=(0,E.hJ)(b.db,"shelby_accessories");var I={name:"DragCarPage",data(){return{isModalVisible:!1,isCorrectAccessory:!1}},components:{ModalWindow:T["default"]},methods:{checkCar(){let t=[],e=[];this.items.forEach((n=>{2===n.categoryId&&!0===n.isCorrect&&t.push(n),2===n.categoryId&&e.push(n)})),6===t.length&&6===e.length?this.isCorrectAccessory=!0:this.isCorrectAccessory=!1},showModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1},showHelp(){this.items.forEach((t=>{!0===t.isCorrect&&console.log(t.name)}))},toTop(){document.querySelector("#top").scrollIntoView({behavior:"smooth"})}},setup(){(0,s.bv)((()=>{(0,E.cf)(C,(e=>{const n=[];e.forEach((t=>{const e={id:t.id,name:t.data().name,isCorrect:t.data().isCorrect,categoryId:t.data().categoryId};n.push(e)})),t.value=n.sort((()=>Math.random()-.5))}))}));const t=(0,w.iH)([]),e=(0,w.iH)([{name:"Все аксессуары",id:1},{name:"Все совместимые аксессуары",id:2}]);function n(t,e){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("itemID",e.id)}function i(e,n){const s=e.dataTransfer.getData("itemID");t.value=t.value.map((t=>(t.id===s&&(t.categoryId=n),t)))}return{items:t,categories:e,onDragStart:n,onDrop:i}}},S=n(89);const _=(0,S.Z)(I,[["render",v],["__scopeId","data-v-2fbe9c64"]]);var A=_},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return pt},qX:function(){return lt},Xd:function(){return ht},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});n(7658);var s=n(7142),i=n(5168),r=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,d=new WeakMap,f=new WeakMap,g=new WeakMap,p=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(T(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&l.set(e,t)})).catch((()=>{})),p.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function E(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(C(this),e),T(l.get(this))}:function(...e){return T(t.apply(C(this),e))}:function(e,...n){const s=t.call(C(this),e,...n);return f.set(s,e.sort?e.sort():[e]),T(s)}}function b(t){return"function"===typeof t?E(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function T(t){if(t instanceof IDBRequest)return m(t);if(g.has(t))return g.get(t);const e=b(t);return e!==t&&(g.set(t,e),p.set(e,t)),e}const C=t=>p.get(t);function I(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=T(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(T(o.result),t.oldVersion,t.newVersion,T(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],A=new Map;function D(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return A.set(e,r),r}w((t=>({...t,get:(e,n,s)=>D(e,n)||t.get(e,n,s),has:(e,n)=>!!D(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const L="@firebase/app",R="0.8.2",O=new i.Yd("@firebase/app"),x="@firebase/app-compat",M="@firebase/analytics-compat",V="@firebase/analytics",P="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",H="@firebase/functions",K="@firebase/functions-compat",z="@firebase/installations",$="@firebase/installations-compat",G="@firebase/messaging",Q="@firebase/messaging-compat",W="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",st="firebase",it="9.12.1",rt="[DEFAULT]",ot={[L]:"fire-core",[x]:"fire-core-compat",[V]:"fire-analytics",[M]:"fire-analytics-compat",[F]:"fire-app-check",[P]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[H]:"fire-fn",[K]:"fire-fn-compat",[z]:"fire-iid",[$]:"fire-iid-compat",[G]:"fire-fcm",[Q]:"fire-fcm-compat",[W]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[st]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ht(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function lt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new r.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new s.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:rt,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,r.aH)()),!n)throw ft.create("no-options");const a=at.get(o);if(a){if((0,r.vZ)(n,a.options)&&(0,r.vZ)(i,a.config))return a;throw ft.create("duplicate-app",{appName:o})}const c=new s.H0(o);for(const s of ct.values())c.addComponent(s);const u=new gt(n,i,c);return at.set(o,u),u}function yt(t=rt){const e=at.get(t);if(!e&&t===rt)return mt();if(!e)throw ft.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let r=null!==(i=ot[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${r}" with version "${e}":`];return o&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ht(new s.wA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",Et=1,bt="firebase-heartbeat-store";let Tt=null;function Ct(){return Tt||(Tt=I(wt,Et,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),Tt}async function It(t){var e;try{const e=await Ct();return e.transaction(bt).objectStore(bt).get(_t(t))}catch(n){if(n instanceof r.ZR)O.warn(n.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});O.warn(t.message)}}}async function St(t,e){var n;try{const n=await Ct(),s=n.transaction(bt,"readwrite"),i=s.objectStore(bt);return await i.put(e,_t(t)),s.done}catch(s){if(s instanceof r.ZR)O.warn(s.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===(n=s)||void 0===n?void 0:n.message});O.warn(t.message)}}}function _t(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,Dt=2592e6;class kt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Dt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Nt(),{heartbeatsToSend:e,unsentEntries:n}=Lt(this._heartbeatsCache.heartbeats),s=(0,r.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=At){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ot(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.hl)()&&(0,r.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ot(t){return(0,r.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){ht(new s.wA("platform-logger",(t=>new k(t)),"PRIVATE")),ht(new s.wA("heartbeat",(t=>new kt(t)),"PRIVATE")),vt(L,R,t),vt(L,R,"esm2017"),vt("fire-js","")}xt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});n(1703);var s=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new s.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),s=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t=r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=r){return this.instances.has(t)}getOptions(t=r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&r.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(s){}return n||null}normalizeInstanceIdentifier(t=r){return this.component?this.component.multipleInstances?t:r:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===r?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(1703),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const r={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}}}]);
//# sourceMappingURL=515.f2e6b22f.js.map