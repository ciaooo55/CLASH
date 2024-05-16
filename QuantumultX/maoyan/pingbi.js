/*******************************

屏蔽未售

*******************************

[rewrite_local]

^https?:\/\/yanchu\.maoyan\.com\/myshow\/ajax\/performance\/show\/.*$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/pingbi.js
^https?:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/performance\/show\/.*$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/pingbi.js

[mitm]
hostname = yanchu.maoyan.com, wx.maoyan.com

*******************************/

var body = $response.body;

// 修改 code 值
body = body.replace(/"code":1005/g, '"code":200');

// 修改 serverTime 值
body = body.replace(/"serverTime":\d+/g, '"serverTime":170000000000');

// 修改 success 值
body = body.replace(/"success":false/g, '"success":true');

// 修改 data 值
body = body.replace(/"data":null/g, '"data":0');

// 如果需要替换整个响应体，可以使用下面的代码
// body = '{"code":200,"msg":"库存不足，您最多可再购买0份","data":0,"paging":null,"attrMaps":{"serverTime":1711179077551},"success":true}';

$done({body});
