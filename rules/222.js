
[rewrite_local]

^http[s]?:\/\/api.xgkjdytt.cn\/xly\/webcloud\/user\/login url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/222.js

[mitm] 

hostname = api.xgkjdytt.cn

*******************************/

var body = $response.body.replace(/"ischarge":"false"/g,'"ischarge":"true"')
.replace(/"free_minutes":"\d+"/g,'"free_minutes":"99999"')
$done({ body });
