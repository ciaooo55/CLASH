/*******************************

123

*******************************
[rewrite_local]
^https?:\/\/.+(\/privilege\/supervip\/status|\/show\/superVIP\/detail|\/meet\/invisible\/saveByUserId|\/special\/concern\/setting|\/chat\/history\/setting|\/privilege\/bubble\/buy|\/soul-coin\/total|\/user\/queryInvisibleSetting|\/chat\/limitInfo) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/456.js

[mitm]
hostname = api-pay.soulapp.cn, api-user.soulapp.cn, api-chat.soulapp.cn, 8.210.3.170, 47.96.7.91, 47.96.11.46, 47.96.20.45, 47.98.54.106, 47.98.137.249, 114.215.255.94, 118.31.7.235, 118.31.112.221, 120.55.55.115, 120.55.62.124, 121.196.197.147, 121.196.203.183

*******************************/
    
var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

// 从 XML 中提取的 Rewrite 规则
const rewriteRules = [
    {"matchValue": "\"limit\":true", "newValue": "\"limit\":false"},
    {"matchValue": "\"superVIP\":false", "newValue": "\"superVIP\":true"},
    {"matchValue": "\"validTime\":null", "newValue": "\"validTime\":4567891456000"},
    {"matchValue": "\"hasFlyPackage\":false", "newValue": "\"hasFlyPackage\":true"},
    {"matchValue": "\"speedup\":false", "newValue": "\"speedup\":true"}
];

// 应用 Rewrite 规则
rewriteRules.forEach(rule => {
    if (rule.matchRequest && urlq.indexOf(rule.matchValue) !== -1) {
        body = body.replace(new RegExp(rule.matchValue, "g"), rule.newValue);
    } else if (rule.matchResponse) {
        body = body.replace(new RegExp(rule.matchValue, "g"), rule.newValue);
    }
});

$done({body: body});











