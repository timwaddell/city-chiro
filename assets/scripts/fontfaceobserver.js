(function(){'use strict';var f=[];function g(a){f.push(a);1===f.length&&l()}function m(){for(;f.length;)f[0](),f.shift()}if(window.MutationObserver){var n=document.createElement("div");(new MutationObserver(m)).observe(n,{attributes:!0});var l=function(){n.setAttribute("x",0)}}else l=function(){setTimeout(m)};function p(a){this.a=q;this.b=void 0;this.f=[];var b=this;try{a(function(a){r(b,a)},function(a){t(b,a)})}catch(c){t(b,c)}}var q=2;function u(a){return new p(function(b,c){c(a)})}function v(a){return new p(function(b){b(a)})}
function r(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");var c=!1;try{var d=b&&b.then;if(null!==b&&"object"===typeof b&&"function"===typeof d){d.call(b,function(b){c||r(a,b);c=!0},function(b){c||t(a,b);c=!0});return}}catch(e){c||t(a,e);return}a.a=0;a.b=b;w(a)}}function t(a,b){if(a.a===q){if(b===a)throw new TypeError("Promise settled with itself.");a.a=1;a.b=b;w(a)}}
function w(a){g(function(){if(a.a!==q)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0===a.a?"function"===typeof c?e(c.call(void 0,a.b)):e(a.b):1===a.a&&("function"===typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}p.prototype.g=function(a){return this.c(void 0,a)};p.prototype.c=function(a,b){var c=this;return new p(function(d,e){c.f.push([a,b,d,e]);w(c)})};
function x(a){return new p(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e===a.length&&b(h)}}var e=0,h=[];0===a.length&&b(h);for(var k=0;k<a.length;k+=1)v(a[k]).c(d(k),c)})}function y(a){return new p(function(b,c){for(var d=0;d<a.length;d+=1)v(a[d]).c(b,c)})};window.Promise||(window.Promise=p,window.Promise.resolve=v,window.Promise.reject=u,window.Promise.race=y,window.Promise.all=x,window.Promise.prototype.then=p.prototype.c,window.Promise.prototype["catch"]=p.prototype.g);}());

(function(){'use strict';function k(a){document.body?a():document.addEventListener("DOMContentLoaded",a)};function v(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.g=document.createElement("span");this.f=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.g.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;";this.b.appendChild(this.h);this.c.appendChild(this.g);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function w(a,c,b){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+c+";"+b}function x(a){var c=a.a.offsetWidth,b=c+100;a.g.style.width=b+"px";a.c.scrollLeft=b;a.b.scrollLeft=a.b.scrollWidth+100;return a.f!==c?(a.f=c,!0):!1}
function y(a,c){a.b.addEventListener("scroll",function(){x(a)&&null!==a.a.parentNode&&c(a.f)},!1);a.c.addEventListener("scroll",function(){x(a)&&null!==a.a.parentNode&&c(a.f)},!1);x(a)};function z(a,c){var b=c||{};this.family=a;this.style=b.style||"normal";this.variant=b.variant||"normal";this.weight=b.weight||"normal";this.stretch=b.stretch||"normal";this.featureSettings=b.featureSettings||"normal";this.a=null}var A=null;
z.prototype.b=function(a,c){var b=a||"BESbswy",B=c||3E3,l="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",d=document.createElement("div"),m=new v(b),n=new v(b),p=new v(b),e=-1,f=-1,g=-1,q=-1,r=-1,t=-1,h=this;d.dir="ltr";return new Promise(function(a,b){function c(){null!==d.parentNode&&
d.parentNode.removeChild(d)}function u(){if(-1!==e&&-1!==f||-1!==e&&-1!==g||-1!==f&&-1!==g)if(e===f||e===g||f===g){if(null===A){var b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);A=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}A?e===q&&f===q&&g===q||e===r&&f===r&&g===r||e===t&&f===t&&g===t||(c(),clearTimeout(h.a),a(h)):(c(),clearTimeout(h.a),a(h))}}k(function(){function a(){if(Date.now()-C>=B)c(),b(h);else{var d=document.hidden;if(!0===d||void 0===
d)e=m.a.offsetWidth,f=n.a.offsetWidth,g=p.a.offsetWidth,u();h.a=setTimeout(a,50)}}var C=Date.now();w(m,"sans-serif",l);w(n,"serif",l);w(p,"monospace",l);d.appendChild(m.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);q=m.a.offsetWidth;r=n.a.offsetWidth;t=p.a.offsetWidth;a();y(m,function(a){e=a;u()});w(m,'"'+h.family+'",sans-serif',l);y(n,function(a){f=a;u()});w(n,'"'+h.family+'",serif',l);y(p,function(a){g=a;u()});w(p,'"'+h.family+'",monospace',l)})})};window.FontFaceObserver=z;window.FontFaceObserver.prototype.check=z.prototype.b;}());

(function(w){
    if (w.document.documentElement.className.indexOf(" has-fonts-loaded ") > -1) {
      return;
      console.log("class name appended");
    }
    var fontA = new w.FontFaceObserver("Merriweather Sans", {
      weight: 300
    });
    var fontB = new w.FontFaceObserver("Merriweather Sans", {
      weight: 300,
      style: "italic"
    });
    var fontC = new w.FontFaceObserver("Merriweather Sans", {
      weight: 600
    });
    var fontD = new w.FontFaceObserver("Merriweather Sans", {
      weight: 600,
      style: "italic"
    });
    var fontE = new w.FontFaceObserver("Merriweather Sans-serif", {
      weight: 400
    });
    w.Promise
      .all([fontA.check(), fontB.check(), fontC.check(), fontD.check(), fontE.check()])
      .then(function() {
        w.document.documentElement.className += " has-fonts-loaded";
    });
}(this));