[rewrite_local]
# soul rules
^https://api-(chat|pay|a)\.soulapp\.cn/(chat/limitInfo|some_other_endpoint|yet_another_endpoint) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/123.js

[mitm]
hostname = api-pay.soulapp.cn, api-user.soulapp.cn, api-chat.soulapp.cn, 8.210.3.170, 47.96.7.91, 47.96.11.46, 47.96.20.45, 47.98.54.106, 47.98.137.249, 114.215.255.94, 118.31.7.235, 118.31.112.221, 120.55.55.115, 120.55.62.124, 121.196.197.147, 121.196.203.183

*******************************/
var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

if ($request.url.includes('/chat/limitInfo')) {
    body = body.replace(/"limit":true/g, '"limit":false');
}

if ($request.url.includes('some_other_endpoint')) {
    body = body
        .replace(/"superVIP":false/g, '"superVIP":true')
        .replace(/"validTime":null/g, '"validTime":4567891456000')
        .replace(/"hasFlyPackage":false/g, '"hasFlyPackage":true');
}

if ($request.url.includes('yet_another_endpoint')) {
    body = body
        .replace(/"currentSpeed":\d+/g, '"currentSpeed":0')
        .replace(/"speedupTime":\d+/g, '"speedupTime":0')
        .replace(/"speedupCount":1/g, '"speedupCount":0')
        .replace(/"speedup":false/g, '"speedup":true');
}



body = body.replace(/"limit":true/g, '"limit":false');
body = body.replace(/"superVIP":false/g, '"superVIP":true');
body = body.replace(/"validTime":null/g, '"validTime":4567891456000');
body = body.replace(/"hasFlyPackage":false/g, '"hasFlyPackage":true');
body = body.replace(/"speedup":false/g, '"speedup":true');

$done({ body });
