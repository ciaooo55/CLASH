/*******************************

123

*******************************
[rewrite_local]
^https?:\/\/.+(\/privilege\/supervip\/status|\/show\/superVIP\/detail|\/meet\/invisible\/saveByUserId|\/special\/concern\/setting|\/chat\/history\/setting|\/privilege\/bubble\/buy|\/soul-coin\/total|\/user\/queryInvisibleSetting|\/chat\/limitInfo) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/789.js

[mitm]
hostname = api-pay.soulapp.cn, api-user.soulapp.cn, api-chat.soulapp.cn, 8.210.3.170, 47.96.7.91, 47.96.11.46, 47.96.20.45, 47.98.54.106, 47.98.137.249, 114.215.255.94, 118.31.7.235, 118.31.112.221, 120.55.55.115, 120.55.62.124, 121.196.197.147, 121.196.203.183

*******************************/
const url = $request.url;
const body = $response.body;

// 匹配规则
const rule1 = /"limit":true/g;
const rule2 = /"superVIP":false/g;
const rule3 = /"validTime":null/g;
const rule4 = /"hasFlyPackage":false/g;
const rule5 = /"speedup":false/g;

// 替换规则
const replacement1 = '"limit":false';
const replacement2 = '"superVIP":true';
const replacement3 = '"validTime":4567891456000';
const replacement4 = '"hasFlyPackage":true';
const replacement5 = '"speedup":true';

// 替换匹配的规则
const newBody = body
  .replace(rule1, replacement1)
  .replace(rule2, replacement2)
  .replace(rule3, replacement3)
  .replace(rule4, replacement4)
  .replace(rule5, replacement5);

$done({ body: newBody });
