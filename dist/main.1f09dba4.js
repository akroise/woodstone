parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{"./..\\assests\\home1.jpeg":[["home1.3aa4b700.jpeg","I7QI"],"I7QI"],"./..\\assests\\home2.jpeg":[["home2.1325565c.jpeg","gQ1g"],"gQ1g"]}],"kvYs":[function(require,module,exports) {
console.log("hover");
},{}],"d6sW":[function(require,module,exports) {
"use strict";require("../scss/main.scss"),require("./hover"),console.log("main.js running");var e=document.getElementById("test");console.log(e),e&&e.addEventListener("click",t());var n=0;function t(){console.log("working card"),document.getElementById("visit").innerHTML('<img src="./assests/home1.jpeg"/>')}var r=document.getElementById("comment"),s=function(e){var n=e.target.value,t=o(e.target.maxLength,n.length);e.target.classList.remove("good","warning","danger"),e.target.classList.add(t)},o=function(e,n){var t=e/3;return a(n,0,t)?"good":a(n,t,2*t)?"warning":"danger"},a=function(e,n,t){return e>=n&&e<=t};r.addEventListener("input",s);
},{"../scss/main.scss":"fx60","./hover":"kvYs"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.1f09dba4.js.map