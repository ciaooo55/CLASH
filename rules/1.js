[rewrite_local]
# Soul 破解部分超星特权
^https?:\/\/api-chat\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js
^https?:\/\/api-pay\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js
^https?:\/\/api-a\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js

[mitm]
hostname = api-chat.soulapp.cn, api-pay.soulapp.cn, api-a.soulapp.cn

*******************************/
var objc = JSON.parse($response.body);
    objc = {
 "data": {
  "limit": false,
  "superVIP": true,
  "speedup": true,
  "validTime": 4567891456000,
  "hasFlyPackage": true,
 },
 "code": 0,
 "msg": "返回成功"
};
$done({body : JSON.stringify(objc)});


