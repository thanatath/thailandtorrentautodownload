// ==UserScript==
// @name         TTAutoDownload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.tt-torrent.com/*
// @grant        none
// ==/UserScript==

var str = window.location.search;
var strid = str.substring(6,11);
if (strid =="sha1="){


try {
window.onload = function () {
document.querySelector("#main > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td > a").click();
}
document.title = 'Download Started';
}
catch(error) {
  document.title = 'Download Problem';
}


}
