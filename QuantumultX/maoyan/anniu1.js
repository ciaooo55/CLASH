/*******************************

按钮1

*******************************

[rewrite_local]

# 重写规则 - 猫眼按钮1/3
^https?:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/v2\/show\/.*$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/anniu1.js


^https?:\/\/yanchu\.maoyan\.com\/myshow\/ajax\/v2\/show\/.*$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/anniu1.js

[mitm]
hostname = wx.maoyan.com, yanchu.maoyan.com

*******************************/

var body = $response.body;

// ticketStatus:2 -> ticketStatus:1
body = body.replace(/"ticketStatus":2/g, '"ticketStatus":1');

// currentAmount:0 -> currentAmount:6
body = body.replace(/"currentAmount":0/g, '"currentAmount":6');

// hasInventory:false -> hasInventory:true
body = body.replace(/"hasInventory":false/g, '"hasInventory":true');

// soldOut:true -> soldOut:false
body = body.replace(/"soldOut":true/g, '"soldOut":false');

// showStatus:2 -> showStatus:0
body = body.replace(/"showStatus":2/g, '"showStatus":0');

// sellStatus:\d -> sellStatus:3
body = body.replace(/"sellStatus":\d/g, '"sellStatus":3');

// code:1005 -> code:200
body = body.replace(/"code":1005/g, '"code":200');

// remainingStock:0 -> remainingStock:6
body = body.replace(/"remainingStock":0/g, '"remainingStock":6');

$done({body});
