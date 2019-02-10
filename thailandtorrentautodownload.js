// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

var str = window.location.search;
var strid = str.substring(6,11);
if (strid =="sha1="){
document.querySelector("i.fa.fa-download").click();
}

