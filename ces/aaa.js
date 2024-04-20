/*******************************

aaa

*******************************
[rewrite_local]

^https?://m.piaoxingqiu.com url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/ces/aaa.js




[MITM]
hostname = m.piaoxingqiu.com

*******************************/
const url = $request.url;
const body = $response.body;

// 匹配规则
const rule1 = /canBuyCount":0/g;
const rule2 = /PENDING/g;
const rule3 = /("beginDateTime":\s*)\d{13}/g;
const rule4 = /"mode":2/g;
const rule5 = /("statusCode":\s*)\d{8}/g;

// 替换规则
const replacement1 = 'canBuyCount":999';
const replacement2 = 'PRE_SALE';
const replacement3 = '$1204457600000';
const replacement4 = '"mode":0';
const replacement5 = '$200';

// 替换匹配的规则
const newBody = body
  .replace(rule1, replacement1)
  .replace(rule2, replacement2)
  .replace(rule3, replacement3)
  .replace(rule4, replacement4)
  .replace(rule5, replacement5);

$done({ body: newBody });