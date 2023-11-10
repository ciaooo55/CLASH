*******************************

[rewrite_local]

^http[s]?:\/\/(api-chat.soulapp.cn|.*)\/(chat/limitInfo|vip/meet/userInfo|loveBell/queryMatchSpeedupConf) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js

[mitm] 

hostname = (.*|api-chat.soulapp.cn)
// ==Quantumult X==
// @Name         Modify Response Script
// @Version      1.0
// @Description  Modify the response body
// @Author       OpenAI with modifications by User
// @Match        *://api-chat.soulapp.cn/chat/limitInfo
// @Match        *://api-chat.soulapp.cn/vip/meet/userInfo
// @Match        *://api-chat.soulapp.cn/loveBell/queryMatchSpeedupConf
// ==/Quantumult X==

$done({
  body: $response.body.replace(/"limit":true/g, '"limit":false')
});

