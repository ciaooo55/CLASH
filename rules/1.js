[rewrite_local]
# Soul 破解部分超星特权
^https?:\/\/api-chat\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js
^https?:\/\/api-pay\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js
^https?:\/\/api-a\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js

[mitm]
hostname = api-chat.soulapp.cn, api-pay.soulapp.cn, api-a.soulapp.cn

*******************************/
var body = $response.body;

// 将所有匹配到的 "limit":true 替换为 "limit":false
body = body.replace(/"limit":true/g, '"limit":false');

// 将所有匹配到的 "superVIP":false 替换为 "superVIP":true
body = body.replace(/"superVIP":false/g, '"superVIP":true');

// 将所有匹配到的 "validTime":null 替换为 "validTime":4567891456000
body = body.replace(/"validTime":null/g, '"validTime":4567891456000');

// 将所有匹配到的 "hasFlyPackage":false 替换为 "hasFlyPackage":true
body = body.replace(/"hasFlyPackage":false/g, '"hasFlyPackage":true');

// 将所有匹配到的 "speedup":false 替换为 "speedup":true
body = body.replace(/"speedup":false/g, '"speedup":true');

$done({ body });
