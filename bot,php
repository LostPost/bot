// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

document.getElementsByName("text")[0].value = "Гобой";
let btnK = document.getElementsByClassName('button mini-suggest__button button_theme_websearch button_size_ws-head i-bem button_js_inited')[0];
if (btnK != undefined){
    btnK.click();
}else{
    let links = document.links;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            link.removeAttribute('target');
            link.click();
            break;
        }
    }
}
