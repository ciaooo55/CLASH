/*******************************

ccc

*******************************
[rewrite_local]

^https?://m.piaoxingqiu.com url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/ces/ccc.js




[MITM]
hostname = m.piaoxingqiu.com

*******************************/


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
}