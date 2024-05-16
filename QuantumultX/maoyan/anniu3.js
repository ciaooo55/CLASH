/*******************************

按钮3

*******************************

[rewrite_local]

# 重写规则 - 猫眼按钮3/3
^https?:\/\/yanchu\.maoyan\.com\/myshow\/ajax\/v2\/showTickets\/validateStock$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/anniu3.js
^https?:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/v2\/showTickets\/valida.*$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/anniu3.js

[mitm]
hostname = yanchu.maoyan.com, wx.maoyan.com

*******************************/

var body = $response.body;

// 如果你想替换整个响应内容，可以使用下面这行代码
// body = '{"code":200,"msg":"库存不足，您最多可再购买0份","data":0,"paging":null,"attrMaps":{"serverTime":1711179077551},"success":true}';

// code:1500 -> code:200
body = body.replace(/"code":1500/g, '"code":200');

$done({body});
