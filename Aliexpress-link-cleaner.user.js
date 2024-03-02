// ==UserScript==
// @name Aliexpress link cleaner SRB
// @namespace none
// @description Aliexpress link cleaner, mobile redirect & localized redirect to global
// @include https://*.aliexpress.com/item/*
// @include /.*s\.click\.aliexpress\.com.*/
// @include https://www.aliexpress.com/item/*/*.html
// @exclude /https://www.aliexpress\.com/item/[0-9]*\.html(?!.)/
// @exclude https://message*.aliexpress.com/*
// @exclude http*://login.aliexpress.com/*
// @icon https://ae01.alicdn.com/images/eng/wholesale/icon/aliexpress.ico
// @grant none
// @run-at document-start
// ==/UserScript==

// adapted from: https://gist.github.com/Tomhet/2d8c892ac9625c3f21aaeeea01ec4db0/raw/Aliexpress_link_cleaner.user.js

console.log('Aliexpress link cleaner');
var cleanLink = window.location.toString();
console.log('dirty=', cleanLink);

//rewriting everything in one line now that '/item/[0-9].html' links work fine lmao
cleanLink = "https://www.aliexpress.com/item" + /\/[0-9]*\.html/.exec(cleanLink);

// Postavljanje kolačića na global (neophodno za preusmeravanje lokalizacije)
document.cookie = "aep_usuc_f= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
// Briše prethodnu vrednost kolačića 'aep_usuc_f'.
document.cookie = 'aep_usuc_f=site=glo&c_tp=USD&region=SRB&b_locale=en_US&ae_u_p_s=0; expires=Mon, 6 Nov 2028 20:47:11 UTC; domain=.aliexpress.com; path=/'
// Postavlja novu vrednost kolačića 'aep_usuc_f' za globalnu verziju sajta, valutu USD, region Srbija i jezik engleski.

console.log('clean=', cleanLink);

window.location = cleanLink;
