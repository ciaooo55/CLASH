/*******************************

123

*******************************
[rewrite_local]

^https?://(api-chat|api-pay|api-a)\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/456.js


[mitm]
# 对应的主机名
hostname = api-chat.soulapp.cn, api-pay.soulapp.cn, api-a.soulapp.cn

*******************************/


if (/soulapp/.test($request.url)) {
    let body = $response.body;

    body = body.replace(/"superVIP":false/g, '"superVIP":true')
               .replace(/"validTime":null/g, '"validTime":4567891456000')
               .replace(/"hasFlyPackage":false/g, '"hasFlyPackage":true')
               .replace(/"limit":true/g, '"limit":false')
               .replace(/"currentSpeed":\d+/g, '"currentSpeed":0')
               .replace(/"speedupTime":\d+/g, '"speedupTime":0')
               .replace(/"speedupCount":1/g, '"speedupCount":0')
               .replace(/"speedup":false/g, '"speedup":true');

    $done({ body });
}
