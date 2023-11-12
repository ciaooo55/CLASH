[rewrite_local]
# soul Rewrite Rules

^http[s]?:\/\/(api-chat.soulapp.cn|.*)\/(chat/limitInfo|vip/meet/userInfo|loveBell/queryMatchSpeedupConf) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/soul456.js
^http[s]?:\/\/api-pay\.soulapp\.cn(\/.*)?$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/soul456.js
  
^https?:\/\/.+(\/privilege\/supervip\/status|\/show\/superVIP\/detail|\/meet\/invisible\/saveByUserId|\/special\/concern\/setting|\/chat\/history\/setting|\/privilege\/bubble\/buy|\/soul-coin\/total|\/user\/queryInvisibleSetting|\/chat\/limitInfo) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/soul456.js
^http[s]?:\/\/api-a\.soulapp\.cn(\/.*)?$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/soul456.js

[mitm]
hostname = api-pay.soulapp.cn, api-user.soulapp.cn, api-chat.soulapp.cn, 8.210.3.170, 47.96.7.91, 47.96.11.46, 47.96.20.45, 47.98.54.106, 47.98.137.249, 114.215.255.94, 118.31.7.235, 118.31.112.221, 120.55.55.115, 120.55.62.124, 121.196.197.147, 121.196.203.183

*******************************/
body = $response.body;

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
