// ==UserScript==
// @name         Rewrite Rules
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Rewrite rules for Quantumult X
// @author       You
// @match        *://m.piaoxingqiu.com/*
// @grant        none
// ==/UserScript==

const rewriteRules = [
    {
        match: /"canBuyCount":0/g,
        replace: '"canBuyCount":999'
    },
    {
        match: /"allowAdvance":false/g,
        replace: '"allowAdvance":true'
    },
    {
        match: /"PENDING"/g,
        replace: '"PRE_SALE"'
    },
    {
        match: /("beginDateTime":\s*)\d{13}/g,
        replace: '$1204457600000'
    },
    {
        match: /"mode":2/g,
        replace: '"mode":0'
    },
    {
        match: /("statusCode":\s*)\d{8}/g,
        replace: '$200'
    }
];

const url = $request.url;
const body = $request.body;

rewriteRules.forEach(rule => {
    body = body.replace(rule.match, rule.replace);
});

$done({body});
