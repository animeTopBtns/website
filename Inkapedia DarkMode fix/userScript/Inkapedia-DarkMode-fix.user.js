// ==UserScript==
// @name         Inkapedia DarkMode fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Userscript/Userstyle that aims to fix problems with the Inkapedia's darkmode (not fully complete)
// @author       You
// @match        *://splatoonwiki.org/*
// @match        *://syndication.twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=splatoonwiki.org
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://github.com/animeTopBtns/website/raw/main/Inkapedia%20DarkMode%20fix/userScript/Inkapedia-DarkMode-fix2.user.js
// @run-at       document-start
// ==/UserScript==

if (window.top !== window.self) {
    if (/.*:\/\/syndication\.twitter\.com\/.*/igm.test(window.location.href)) {
        if (/.*:\/\/syndication\.twitter\.com\/.*&theme=dark/i.test(window.location.href) == false) {
            window.location.replace(window.location.href.replace(/&transparent=false/igm, '&transparent=true') + "&theme=dark")
        }
    }
}

if (/https:\/\/splatoonwiki\.org\/wiki\/Special:.*/i.test(window.location.href) == false) {
    GM_addStyle(`html { color-scheme: dark !important; }nav#p-views .selected, nav#p-namespaces .selected, nav#p-namespaces li, nav#p-views li, nav#p-cactions {background-color: #27262c;}.vector-menu-dropdown .vector-menu-heading:after{-webkit-filter:invert(1)!important;filter:invert(1)!important} audio { border: solid #8c8c8c !important; -webkit-border-radius: 2000px !important; -moz-border-radius: 2000px !important; border-radius: 2000px !important; }.mw-parser-output .bigrun {background-image: url('https://files.catbox.moe/ly7j6l.svg')!important;}.mw-parser-output .splatfest {background-image: url('https://files.catbox.moe/0ui5mm.svg')!important;}`);
}