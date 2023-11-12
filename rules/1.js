[rewrite_local]
# Soul 破解部分超星特权
^https?:\/\/api-chat\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js
^https?:\/\/api-pay\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js
^https?:\/\/api-a\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js

[mitm]
hostname = api-chat.soulapp.cn, api-pay.soulapp.cn, api-a.soulapp.cn

*******************************/
var body = $response.body;
var url = $request.url;

// 修改 "limit":true 为 "limit":false
body = body.replace(/"limit":true/g, '"limit":false');

// 修改 "superVIP":false 为 "superVIP":true
body = body.replace(/"superVIP":false/g, '"superVIP":true');

// 修改 "validTime":null 为 "validTime":4567891456000
body = body.replace(/"validTime":null/g, '"validTime":4567891456000');

// 修改 "hasFlyPackage":false 为 "hasFlyPackage":true
body = body.replace(/"hasFlyPackage":false/g, '"hasFlyPackage":true');

// 修改 "speedup":false 为 "speedup":true
body = body.replace(/"speedup":false/g, '"speedup":true');

$done({ body });
