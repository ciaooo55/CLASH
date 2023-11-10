*******************************

[rewrite_local]

^http[s]?:\/\/(api-chat.soulapp.cn|.*)\/(chat/limitInfo|vip/meet/userInfo|loveBell/queryMatchSpeedupConf) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/1.js

[mitm] 

hostname = (.*|api-chat.soulapp.cn)
$done({
  body: $response.body.replace(/{"code":10001,"message":"success","data":{.*},"success":true}/s, '{"code":10001,"message":"success","data":{"limit":false},"success":true}')
});
// 获得响应体
var body = $response.body;

// 修改 JSON 数据
var modifiedData = {
    "code": 10001,
    "message": "success",
    "data": {
        "limit": false
    },
    "success": true
};

// 将修改后的 JSON 转换为字符串
var modifiedBody = JSON.stringify(modifiedData);

// 替换原始响应体中的数据
body = body.replace(/{"code":10001,"message":"success","data":{.*},"success":true}/s, modifiedBody);

// 输出修改后的响应体
$done({ body });
