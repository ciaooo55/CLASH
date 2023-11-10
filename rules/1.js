*******************************

[rewrite_local]

^http[s]?:\/\/(api-chat.soulapp.cn|.*)\/(chat/limit|vip/meet/userInfo|loveBell/queryMatchSpeedupConf) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js

[mitm] 

hostname = (.*|api-chat.soulapp.cn)
var body = $response.body;
var url = $request.url;

if (url.includes('/chat')) {
    body = body.replace(/"limit":true/g, '"limit":false');
}

$done({ body });
