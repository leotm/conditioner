!function(e,t){"use strict";var n=e.document,o=n.documentElement||n.body.parentNode||n.body,r=function(){return e.pageXOffset!==t?e.pageXOffset:o.scrollLeft},i=function(){return e.pageYOffset!==t?e.pageYOffset:o.scrollTop},a=function(e,t){if(t){var n,o,a=e.getBoundingClientRect(),u=t.pageX-r(),v=t.pageY-i();return n=u<a.left?a.left:u>a.right?a.right:u,o=v<a.top?a.top:v>a.bottom?a.bottom:v,n===u&&o===v?0:Math.pow(u-n,2)+Math.pow(v-o,2)}},u=e.PointerEvent||e.MSPointerEvent,v=e.PointerEvent?"pointermove":"MSPointerMove",d={available:!1,moves:0,movesRequired:2},f={trigger:function(e){var t=function o(t){if(u){if(d.available=4===t.pointerType||3===t.pointerType,!d.available)return;return n.removeEventListener(v,o,!1),void e()}return"mousemove"!==t.type?void(d.moves=0):void(++d.moves>=d.movesRequired&&(n.removeEventListener("mousemove",o,!1),n.removeEventListener("mousedown",o,!1),d.available=!0,e()))};u?n.addEventListener(v,t,!1):(n.addEventListener("mousemove",t,!1),n.addEventListener("mousedown",t,!1)),n.addEventListener("mousemove",function(t){e(t)},!1)},test:{near:function(e,t){if(!d.available)return!1;var n=e.expected===!0?50:parseInt(e.expected,10);return n*n>=a(e.element,t)},fine:function(e){return d.available===e.expected}}};"undefined"!=typeof module&&module.exports?module.exports=f:"function"==typeof define&&define.amd&&define(function(){return f})}(window);