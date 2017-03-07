webpackJsonp([2],{0:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(505),i=r(o);Object.defineProperty(window,"NeosCKEditorApi",{value:i.default,enumerable:!1,writable:!1,configurable:!0})},135:function(t,n){(function(n){function e(t,n,e){function o(n){var e=p,r=y;return p=y=void 0,x=n,g=t.apply(r,e)}function i(t){return x=t,h=setTimeout(l,n),C?o(t):g}function c(t){var e=t-E,r=t-x,o=n-e;return F?j(o,b-r):o}function f(t){var e=t-E,r=t-x;return void 0===E||e>=n||e<0||F&&r>=b}function l(){var t=O();return f(t)?d(t):void(h=setTimeout(l,c(t)))}function d(t){return h=void 0,T&&p?o(t):(p=y=void 0,g)}function s(){void 0!==h&&clearTimeout(h),x=0,p=E=y=h=void 0}function v(){return void 0===h?g:d(O())}function m(){var t=O(),e=f(t);if(p=arguments,y=this,E=t,e){if(void 0===h)return i(E);if(F)return h=setTimeout(l,n),o(E)}return void 0===h&&(h=setTimeout(l,n)),g}var p,y,b,g,h,E,x=0,C=!1,F=!1,T=!0;if("function"!=typeof t)throw new TypeError(a);return n=u(n)||0,r(e)&&(C=!!e.leading,F="maxWait"in e,b=F?w(u(e.maxWait)||0,n):b,T="trailing"in e?!!e.trailing:T),m.cancel=s,m.flush=v,m}function r(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function o(t){return!!t&&"object"==typeof t}function i(t){return"symbol"==typeof t||o(t)&&h.call(t)==f}function u(t){if("number"==typeof t)return t;if(i(t))return c;if(r(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=r(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var e=s.test(t);return e||v.test(t)?m(t.slice(2),e?2:8):d.test(t)?c:+t}var a="Expected a function",c=NaN,f="[object Symbol]",l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,v=/^0o[0-7]+$/i,m=parseInt,p="object"==typeof n&&n&&n.Object===Object&&n,y="object"==typeof self&&self&&self.Object===Object&&self,b=p||y||Function("return this")(),g=Object.prototype,h=g.toString,w=Math.max,j=Math.min,O=function(){return b.Date.now()};t.exports=e}).call(n,function(){return this}())},505:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(956),i=r(o),u=e(135),a=r(u),c={initialize:function(){},toggleFormat:function(){},createEditor:function(){}},f="",l=function(t){if(!t)return console.error("CKEditor not found!"),c;var n=null,e=null,r=function(e){return function(){var r={};Object.keys(n.formattingRules).forEach(function(o){var i=n.formattingRules[o];if(void 0!==i.command)return e.getCommand(i.command)?void(r[o]=e.getCommand(i.command).state):void(r[o]=!1);if(void 0!==i.style){if(!e.elementPath())return void(r[o]=!1);var u=new t.style(i.style);return void(r[o]=u.checkActive(e.elementPath(),e))}if(i.extractCurrentFormatFn)return void(r[o]=i.extractCurrentFormatFn(e,t));throw new Error('\n                An error occured while checking a format in CK Editor.\n                The description parameter needs to either have a key "command",\n                a key "style", or a style "extractCurrentFormatFn" - none of which could be found.\n            ')});var o=JSON.stringify(r);o!==f&&(n.setFormattingUnderCursor(r),f=o)}};return t.disableAutoInline=!0,Object.assign(t.dtd.$editable,{b:!0,big:!0,i:!0,small:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,code:!0,dfn:!0,em:!0,kbd:!0,strong:!0,samp:!0,var:!0,a:!0,bdo:!0,img:!0,q:!0,span:!0,sub:!0,sup:!0,button:!0,label:!0}),{initialize:function(t){n=t},toggleFormat:function(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=n.formattingRules[o];if(!u)return void console.warn("Formatting instruction "+o+" not found.");if(!e)return void console.warn("Current editor not found!");if(void 0!==u.command)return e.getCommand(u.command)?(e.execCommand(u.command),e.fire("change"),void r(e)()):void console.warn("Command "+e+" not found.");if(void 0!==u.style){if(!e.elementPath())return;var a=new t.style(u.style),c=a.checkActive(e.elementPath(),e)?"removeStyle":"applyStyle";return e[c](a),e.fire("change"),void r(e)()}if(u.applyStyleFn)return u.applyStyleFn(i,e,t),e.fire("change"),void r(e)();throw new Error('\n                An error occured while applying a format in CK Editor.\n                The description parameter needs to either have a key "command",\n                "style", or "applyFn" - none of which could be found.\n            ')},createEditor:function(o,u,c,f){o.contentEditable="true";var l=t.inline(o,u);l.on("loaded",function(){l.config.buttons&&l.config.buttons.forEach(function(t){var n=l.ui.create(t);l.addFeature(n)})});var d=r(l);l.once("contentDom",function(){l.on("focus",function(){e=l,n.setCurrentlyEditedPropertyName(c),d()}),l.on("selectionChange",function(){d()}),l.on("change",(0,a.default)((0,i.default)(function(){return f(l.getData())},1500),150))})}}};n.default=l(window.CKEDITOR)},956:function(t,n){(function(n){function e(t,n,e){function r(n){var e=p,r=y;return p=y=void 0,x=n,g=t.apply(r,e)}function i(t){return x=t,h=setTimeout(l,n),C?r(t):g}function u(t){var e=t-w,r=t-x,o=n-e;return F?O(o,b-r):o}function f(t){var e=t-w,r=t-x;return void 0===w||e>=n||e<0||F&&r>=b}function l(){var t=E();return f(t)?d(t):void(h=setTimeout(l,u(t)))}function d(t){return h=void 0,T&&p?r(t):(p=y=void 0,g)}function s(){void 0!==h&&clearTimeout(h),x=0,p=w=y=h=void 0}function v(){return void 0===h?g:d(E())}function m(){var t=E(),e=f(t);if(p=arguments,y=this,w=t,e){if(void 0===h)return i(w);if(F)return h=setTimeout(l,n),r(w)}return void 0===h&&(h=setTimeout(l,n)),g}var p,y,b,g,h,w,x=0,C=!1,F=!1,T=!0;if("function"!=typeof t)throw new TypeError(c);return n=a(n)||0,o(e)&&(C=!!e.leading,F="maxWait"in e,b=F?j(a(e.maxWait)||0,n):b,T="trailing"in e?!!e.trailing:T),m.cancel=s,m.flush=v,m}function r(t,n,r){var i=!0,u=!0;if("function"!=typeof t)throw new TypeError(c);return o(r)&&(i="leading"in r?!!r.leading:i,u="trailing"in r?!!r.trailing:u),e(t,n,{leading:i,maxWait:n,trailing:u})}function o(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function i(t){return!!t&&"object"==typeof t}function u(t){return"symbol"==typeof t||i(t)&&w.call(t)==l}function a(t){if("number"==typeof t)return t;if(u(t))return f;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var e=v.test(t);return e||m.test(t)?p(t.slice(2),e?2:8):s.test(t)?f:+t}var c="Expected a function",f=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,y="object"==typeof n&&n&&n.Object===Object&&n,b="object"==typeof self&&self&&self.Object===Object&&self,g=y||b||Function("return this")(),h=Object.prototype,w=h.toString,j=Math.max,O=Math.min,E=function(){return g.Date.now()};t.exports=r}).call(n,function(){return this}())}});
//# sourceMappingURL=Guest.js.map