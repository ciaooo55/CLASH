[rewrite_local]
^https?:\/\/.+(\/privilege\/supervip\/status|\/show\/superVIP\/detail|\/meet\/invisible\/saveByUserId|\/special\/concern\/setting|\/chat\/history\/setting|\/privilege\/bubble\/buy|\/soul-coin\/total|\/user\/queryInvisibleSetting|\/chat\/limitInfo) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/123.js

[mitm]
hostname = api-pay.soulapp.cn, api-user.soulapp.cn, api-chat.soulapp.cn, 8.210.3.170, 47.96.7.91, 47.96.11.46, 47.96.20.45, 47.98.54.106, 47.98.137.249, 114.215.255.94, 118.31.7.235, 118.31.112.221, 120.55.55.115, 120.55.62.124, 121.196.197.147, 121.196.203.183

*******************************/

var body = $response.body.replace(/"limit":true/g,'"limit":false')
.replace(/ "validTime":"\d+"/g,'"free_minutes":"4567891456000"').replace(/"superVIP":false/g,'"superVIP":true').replace(/"hasFlyPackage":false/g,'"hasFlyPackage":true')
.replace(/"speedup":false/g,'"speedup":true')
$done({ body });


