[rewrite_local]
# soul Rewrite Rules
^https?:\/\/.+(\/privilege\/supervip\/status|\/show\/superVIP\/detail|\/meet\/invisible\/saveByUserId|\/special\/concern\/setting|\/chat\/history\/setting|\/privilege\/bubble\/buy|\/soul-coin\/total|\/user\/queryInvisibleSetting|\/chat\/limitInfo) url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/rules/soul456.js

[mitm]
hostname = api-pay.soulapp.cn, api-user.soulapp.cn, api-chat.soulapp.cn, 8.210.3.170, 47.96.7.91, 47.96.11.46, 47.96.20.45, 47.98.54.106, 47.98.137.249, 114.215.255.94, 118.31.7.235, 118.31.112.221, 120.55.55.115, 120.55.62.124, 121.196.197.147, 121.196.203.183

*******************************/
var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

const hausd0rff = {"code": 10001, "message": "弹窗，请支持我们的工作", "jiajia": true};

if (urlq.indexOf("/profile/settings") != -1) {
    objc["userVIP"]["superVIP"] = true;
    objc["userVIP"]["hasMyMeet"] = true;
    objc["userVIP"]["isCanSendVideo"] = true;
    objc["userVIP"]["isCanSendVoice"] = true;
    objc["userVIP"]["limit"] = false;
    objc["userVIP"]["hasFlyPackage"] = false;
    objc["userVIP"]["validTime"] = 999999;
    objc["userVIP"]["superVIPDays"] = 999999;
}

if (urlq.indexOf("/private/buy") != -1) {
    objc["userVIP"]["superVIP"] = true;
    objc["userVIP"]["hasMyMeet"] = true;
    objc["userVIP"]["showSuperVIP"] = true;
    objc["userVIP"]["limit"] = false;
    objc["userVIP"]["validTime"] = 999999;
    objc["userVIP"]["superVIPDays"] = 4092599349000;
}

if (urlq.indexOf("/chat/history/setting") != -1) {
    objc["userVIP"] = 999999;
}

if (urlq.indexOf("/settings/contact") != -1) {
    objc = hausd0rff;
}

if (urlq.indexOf("/chat/limit") != -1) {
    objc = {"code": 10001, "message": "弹窗，请支持我们的工作", "data": {"success": true, "code": 10001}, "success": true};
}

if (urlq.indexOf("/user/query") != -1) {
    objc = hausd0rff;
}

$done({body: JSON.stringify(objc)});

