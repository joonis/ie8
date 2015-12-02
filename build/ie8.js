/*! (C) WebReflection Mit Style License */
(function(e){function b(e,t,n,r){for(var i,s=n.slice(),o=S(t,e),u=0,a=s.length;u<a;u++){handler=s[u],typeof handler=="object"&&typeof handler.handleEvent=="function"?handler.handleEvent(o):handler.call(e,o);if(o.stoppedImmediatePropagation)break}return i=!o.stoppedPropagation,r&&i&&e.parentNode?e.parentNode.dispatchEvent(o):!o.defaultPrevented}function w(e,t){return{configurable:!0,get:e,set:t}}function E(e,t,n){var r=a(t||e,n);o(e,"textContent",w(function(){return r.get.call(this)},function(e){r.set.call(this,e)}))}function S(e,t){return e.currentTarget=t,e.eventPhase=e.target===e.currentTarget?2:3,e}function x(e,t){var n=e.length;while(n--&&e[n]!==t);return n}function T(){if(this.tagName==="BR")return"\n";var e=this.firstChild,t=[];while(e)e.nodeType!==8&&e.nodeType!==7&&t.push(e.textContent),e=e.nextSibling;return t.join("")}function N(e){return e.nodeType!==9&&m.contains(e)}function C(e){var t=document.createEvent("Event");t.initEvent("input",!0,!0),(e.srcElement||e.fromElement||document).dispatchEvent(t)}function k(e){!n&&p.test(document.readyState)&&(n=!n,document.detachEvent(r,k),e=document.createEvent("Event"),e.initEvent(i,!0,!0),document.dispatchEvent(e))}function L(e){var t;while(t=this.lastChild)this.removeChild(t);e!=null&&this.appendChild(document.createTextNode(e))}function A(t,n){return n||(n=e.event),n.target||(n.target=n.srcElement||n.fromElement||document),n.timeStamp||(n.timeStamp=(new Date).getTime()),n}if(document.createEvent)return;var t=!0,n=!1,r="onreadystatechange",i="DOMContentLoaded",s="__IE8__"+Math.random(),o=Object.defineProperty||function(e,t,n){e[t]=n.value},u=Object.defineProperties||function(t,n){for(var r in n)if(f.call(n,r))try{o(t,r,n[r])}catch(i){e.console&&console.log(r+" failed on object:",t,i.message)}},a=Object.getOwnPropertyDescriptor,f=Object.prototype.hasOwnProperty,l=e.Element.prototype,c=e.Text.prototype,h=/^[a-z]+$/,p=/loaded|complete/,d={},v=document.createElement("div"),m=document.documentElement,g=m.removeAttribute,y=m.setAttribute;E(e.HTMLCommentElement.prototype,l,"nodeValue"),E(e.HTMLScriptElement.prototype,null,"text"),E(c,null,"nodeValue"),E(e.HTMLTitleElement.prototype,null,"text"),o(e.HTMLStyleElement.prototype,"textContent",function(e){return w(function(){return e.get.call(this.styleSheet)},function(t){e.set.call(this.styleSheet,t)})}(a(e.CSSStyleSheet.prototype,"cssText"))),u(l,{textContent:{get:T,set:L},firstElementChild:{get:function(){for(var e=this.childNodes||[],t=0,n=e.length;t<n;t++)if(e[t].nodeType==1)return e[t]}},lastElementChild:{get:function(){for(var e=this.childNodes||[],t=e.length;t--;)if(e[t].nodeType==1)return e[t]}},oninput:{get:function(){return this._oninput||null},set:function(e){this._oninput&&(this.removeEventListener("input",this._oninput),this._oninput=e,e&&this.addEventListener("input",e))}},previousElementSibling:{get:function(){var e=this.previousSibling;while(e&&e.nodeType!=1)e=e.previousSibling;return e}},nextElementSibling:{get:function(){var e=this.nextSibling;while(e&&e.nodeType!=1)e=e.nextSibling;return e}},childElementCount:{get:function(){for(var e=0,t=this.childNodes||[],n=t.length;n--;e+=t[n].nodeType==1);return e}},addEventListener:{value:function(e,t,n){var r=this,i="on"+e,u=r[s]||o(r,s,{value:{}})[s],a=u[i]||(u[i]={}),l=a.h||(a.h=[]),c,p;if(!f.call(a,"w")){a.w=function(e){return e[s]||b(r,A(r,e),l,!1)};if(!f.call(d,i))if(h.test(e)){try{c=document.createEventObject(),c[s]=!0,r.nodeType!=9&&r.parentNode==null&&v.appendChild(r),(p=r.getAttribute(i))&&g.call(r,i),r.fireEvent(i,c),d[i]=!0}catch(c){d[i]=!1;while(v.hasChildNodes())v.removeChild(v.firstChild)}p!=null&&y.call(r,i,p)}else d[i]=!1;(a.n=d[i])&&r.attachEvent(i,a.w)}x(l,t)<0&&l[n?"unshift":"push"](t),e==="input"&&r.attachEvent("onkeyup",C)}},dispatchEvent:{value:function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i,u;return e.target||(e.target=t),o?i.n?t.fireEvent(n,e):b(t,e,i.h,!0):(u=t.parentNode)?u.dispatchEvent(e):!0,!e.defaultPrevented}},removeEventListener:{value:function(e,t,n){var r=this,i="on"+e,o=r[s],u=o&&o[i],a=u&&u.h,f=a?x(a,t):-1;-1<f&&a.splice(f,1)}}}),u(c,{addEventListener:{value:l.addEventListener},dispatchEvent:{value:l.dispatchEvent},removeEventListener:{value:l.removeEventListener}}),u(e.XMLHttpRequest.prototype,{addEventListener:{value:function(e,t,n){var r=this,i="on"+e,u=r[s]||o(r,s,{value:{}})[s],a=u[i]||(u[i]={}),f=a.h||(a.h=[]);x(f,t)<0&&(r[i]||(r[i]=function(){var t=document.createEvent("Event");t.initEvent(e,!0,!0),r.dispatchEvent(t)}),f[n?"unshift":"push"](t))}},dispatchEvent:{value:function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i;return o&&(i.n?t.fireEvent(n,e):b(t,e,i.h,!0))}},removeEventListener:{value:l.removeEventListener}}),u(e.Event.prototype,{bubbles:{value:!0,writable:!0},cancelable:{value:!0,writable:!0},preventDefault:{value:function(){this.cancelable&&(this.defaultPrevented=!0,this.returnValue=!1)}},stopPropagation:{value:function(){this.stoppedPropagation=!0,this.cancelBubble=!0}},stopImmediatePropagation:{value:function(){this.stoppedImmediatePropagation=!0,this.stopPropagation()}},initEvent:{value:function(e,t,n){this.type=e,this.bubbles=!!t,this.cancelable=!!n,this.bubbles||this.stopPropagation()}}}),u(e.HTMLDocument.prototype,{defaultView:{get:function(){return this.parentWindow}},textContent:{get:function(){return this.nodeType===11?T.call(this):null},set:function(e){this.nodeType===11&&L.call(this,e)}},addEventListener:{value:function(n,s,o){var u=this;l.addEventListener.call(u,n,s,o),t&&n===i&&!p.test(u.readyState)&&(t=!1,u.attachEvent(r,k),e==top&&function a(e){try{u.documentElement.doScroll("left"),k()}catch(t){setTimeout(a,50)}}())}},dispatchEvent:{value:l.dispatchEvent},removeEventListener:{value:l.removeEventListener},createEvent:{value:function(e){var t;if(e!=="Event")throw new Error("unsupported "+e);return t=document.createEventObject(),t.timeStamp=(new Date).getTime(),t}}}),u(e.Window.prototype,{getComputedStyle:{value:function(){function i(e){this._=e}function s(){}var e=/^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,t=/^(top|right|bottom|left)$/,n=/\-([a-z])/g,r=function(e,t){return t.toUpperCase()};return i.prototype.getPropertyValue=function(i){var s=this._,o=s.style,u=s.currentStyle,a=s.runtimeStyle,f,l,c;return i=(i==="float"?"style-float":i).replace(n,r),f=u?u[i]:o[i],e.test(f)&&!t.test(i)&&(l=o.left,c=a&&a.left,c&&(a.left=u.left),o.left=i==="fontSize"?"1em":f,f=o.pixelLeft+"px",o.left=l,c&&(a.left=c)),f==null?f:f+""||"auto"},s.prototype.getPropertyValue=function(){return null},function(e,t){return t?new s(e):new i(e)}}()},addEventListener:{value:function(t,n,r){var i=e,o="on"+t,u;i[o]||(i[o]=function(e){return b(i,A(i,e),u,!1)}),u=i[o][s]||(i[o][s]=[]),x(u,n)<0&&u[r?"unshift":"push"](n)}},dispatchEvent:{value:function(t){var n=e["on"+t.type];return n?n.call(e,t)!==!1&&!t.defaultPrevented:!0}},removeEventListener:{value:function(t,n,r){var i="on"+t,o=(e[i]||Object)[s],u=o?x(o,n):-1;-1<u&&o.splice(u,1)}}}),function(e,t,n){for(n=0;n<t.length;n++)document.createElement(t[n]);e.length||document.createStyleSheet(""),e[0].addRule(t.join(","),"display:block;")}(document.styleSheets,["header","nav","section","article","aside","footer"])})(this.window||global);