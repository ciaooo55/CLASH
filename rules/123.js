/*******************************

123

*******************************
[rewrite_local]

^https?://(api-chat|api-pay|api-a)\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/123.js


[mitm]
# 对应的主机名
hostname = api-chat.soulapp.cn, api-pay.soulapp.cn, api-a.soulapp.cn

*******************************/
var objc = JSON.parse($response.body);
    objc = {
 "data": {
 "limit":false,
  "superVIP":true,
  "validTime":4567891456000,
  "hasFlyPackage":true,
  "speedup":true,
  "shareToken": ""
 },
 "code": 0,
 "msg": "返回成功"
};
$done({body : JSON.stringify(objc)});

