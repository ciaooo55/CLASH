/*******************************

123

*******************************
[rewrite_local]
# 匹配规则
^https?://api-chat\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/456.js
^https?://api-pay\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/456.js
^https?://api-a\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/456.js

[mitm]
# 对应的主机名
hostname = api-chat.soulapp.cn, api-pay.soulapp.cn, api-a.soulapp.cn

*******************************/
if ($request.url.includes('/chat/limitInfo')) {
    $response.body = $response.body.replace(/"limit":true/g, '"limit":false');
}

// 替换 other_endpoint
if ($request.url.includes('/privilege/supervip/status') || 
    $request.url.includes('/show/superVIP/detail') || 
    $request.url.includes('/meet/invisible/saveByUserId') || 
    $request.url.includes('/special/concern/setting') || 
    $request.url.includes('/chat/history/setting') || 
    $request.url.includes('/privilege/bubble/buy') || 
    $request.url.includes('/soul-coin/total') || 
    $request.url.includes('/user/queryInvisibleSetting')) {
    $response.body = $response.body
        .replace(/"superVIP":false/g, '"superVIP":true')
        .replace(/"validTime":null/g, '"validTime":4567891456000')
        .replace(/"hasFlyPackage":false/g, '"hasFlyPackage":true');
}

// 替换 yet_another_endpoint
if ($request.url.includes('/chat/limitInfo')) {
    $response.body = $response.body
        .replace(/"currentSpeed":\d+/g, '"currentSpeed":0')
        .replace(/"speedupTime":\d+/g, '"speedupTime":0')
        .replace(/"speedupCount":1/g, '"speedupCount":0')
        .replace(/"speedup":false/g, '"speedup":true');
}

$done({});

