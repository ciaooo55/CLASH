[rewrite_local]
^https?:\/\/.+(\/privilege\/supervip\/status|\/show\/superVIP\/detail|\/meet\/invisible\/saveByUserId|\/special\/concern\/setting|\/chat\/history\/setting|\/privilege\/bubble\/buy|\/soul-coin\/total|\/user\/queryInvisibleSetting|\/chat\/limitInfo) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/123.js

[mitm]
hostname = api-pay.soulapp.cn, api-user.soulapp.cn, api-chat.soulapp.cn, 8.210.3.170, 47.96.7.91, 47.96.11.46, 47.96.20.45, 47.98.54.106, 47.98.137.249, 114.215.255.94, 118.31.7.235, 118.31.112.221, 120.55.55.115, 120.55.62.124, 121.196.197.147, 121.196.203.183

*******************************/
var body = $response.body;

if ($request.url.includes('/chat/limitInfo')) {
    body = body.replace(/"limit":true/g, '"limit":false');
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
    body = body
        .replace(/"superVIP":false/g, '"superVIP":true')
        .replace(/"validTime":null/g, '"validTime":4567891456000')
        .replace(/"hasFlyPackage":false/g, '"hasFlyPackage":true');
}

// 替换 yet_another_endpoint
if ($request.url.includes('/chat/limitInfo')) {
    body = body
        .replace(/"currentSpeed":\d+/g, '"currentSpeed":0')
        .replace(/"speedupTime":\d+/g, '"speedupTime":0')
        .replace(/"speedupCount":1/g, '"speedupCount":0')
        .replace(/"speedup":false/g, '"speedup":true');
}

$done({ body });
