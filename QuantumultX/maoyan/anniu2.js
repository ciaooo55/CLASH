/*******************************

按钮2

*******************************

[rewrite_local]

^https?:\/\/yanchu\.maoyan\.com\/myshow\/ajax\/v2\/performance\/.*$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/anniu2.js
^https?:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/v2\/performance\/.*$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/anniu2.js

[mitm]
hostname = yanchu.maoyan.com, wx.maoyan.com
*******************************/

var body = $response.body;

// onSaleStatus:\d -> onSaleStatus:2
body = body.replace(/"onSaleStatus":\d/g, '"onSaleStatus":2');

// onSaleTime:\d+ -> onSaleTime:1700000000000
body = body.replace(/"onSaleTime":\d+/g, '"onSaleTime":1700000000000');

// onSaleTime:null -> onSaleTime:1700000000000
body = body.replace(/"onSaleTime":null/g, '"onSaleTime":1700000000000');

// (规则未启用) "code":1005 -> "code":200
// 如果需要启用此规则，请取消注释以下两行代码
// body = body.replace(/"code":1005/g, '"code":200');

$done({body});
