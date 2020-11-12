
// ==UserScript==
// @name         Yandex bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==
//

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

let keywords = ["Гобой","Саксофон","Валторна","Фагот","Флейта","Как звучит флейта","Скрипка"];
let keyword = keywords[getRandom(0, keywords.length)];
let YaInput = document.getElementsByName("text")[0];
let btnK = document.getElementsByClassName('button mini-suggest__button button_theme_websearch button_size_ws-head i-bem button_js_inited')[0];
let links = document.links;


if (btnK != undefined){
    let i = 0;
    let timerId = setInterval(()=>{
        YaInput.value += keyword[i++];
        if(i == keyword.length){
            clearInterval(timerId);
            btnK.click();
        }
    },500);
}else if(location.hostname == "yandex.ru"){
    let flag = true;


    let PageN = document.getElementsByClassName('pager__item_kind_next')[0];
    for(let i=0; i<links.length; i++){

        let link = links[i];
        if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            flag = false;
            link.removeAttribute('target');
            setTimeout(()=>link.click(), 2000);
            break;
        }
    }
    let numPage = document.getElementsByClassName("pager__item pager__item_current_yes pager__item_kind_page")[0].textContent;
    if (numPage == "10") location.href = "https://yandex.ru/";

    if(flag) setTimeout(()=>PageN.click(),2000);
}else{
    if(getRandom(0,100)>=80) location.href = "https://yandex.ru/";
    else
        setInterval(()=>{
            let link = links[getRandom(0,links.length)];
            if(link.href.indexOf(location.hostname) != -1)
                link.click();
        },5000);
}
