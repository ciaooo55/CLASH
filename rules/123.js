/*******************************

123

*******************************
[rewrite_local]

^https?://(api-chat|api-pay|api-a)\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/123.js


[mitm]
# 对应的主机名
hostname = api-chat.soulapp.cn, api-pay.soulapp.cn, api-a.soulapp.cn

*******************************/
// 获取主机名
var host = $request.headers.Host;

// 判断主机名
if (host.includes('api-chat') || host.includes('api-pay') || host.includes('api-a')) {
    $response.body = $response.body
        .replace(/"superVIP":false/g, '"superVIP":true')
        .replace(/"validTime":null/g, '"validTime":4567891456000')
        .replace(/"hasFlyPackage":false/g, '"hasFlyPackage":true')
        .replace(/"limit":true/g, '"limit":false')
        .replace(/"currentSpeed":\d+/g, '"currentSpeed":0')
        .replace(/"speedupTime":\d+/g, '"speedupTime":0')
        .replace(/"speedupCount":1/g, '"speedupCount":0')
        .replace(/"speedup":false/g, '"speedup":true');
}

$done({});

