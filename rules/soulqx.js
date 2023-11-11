/*******************************
3333

*******************************

[rewrite_local]

^http[s]?:\/\/(api-chat.soulapp.cn|.*)\/(chat/limitInfo|vip/meet/userInfo|loveBell/queryMatchSpeedupConf) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/soulqx.js

[mitm] 

hostname = (.*|api-chat.soulapp.cn)

*******************************/

var body = $response['...']; // 响应体
var url = $request['...'];   // 请求的 URL

// 根据 URL 进行条件判断和响应体的修改
if (url.includes('limit')) {
    body = body.replace(/"limit":true/g, '"limit":false');
}

if (url.includes('soul')) {
    // 进行一系列的字符串替换操作
    body = body.replace(/"superVIP":false/g, '"superVIP":true')
               .replace(/"validTime":null/g, '"validTime":4567891456000')
               .replace(/"hasFlyPackage":false/g, '"hasFlyPackage":true');
}

if (url.includes('soul')) {
    // 进行一系列的字符串替换操作
    body = body.replace(/"currentSpeed":\d+/g, '"currentSpeed":0')
               .replace(/"speedupTime":\d+/g, '"speedupTime":0')
               .replace(/"speedupCount":1/g, '"speedupCount":0')
               .replace(/"speedup":false/g, '"speedup":true');
}

// 返回修改后的响应体
$done({ 'body': body });
