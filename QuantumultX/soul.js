/*******************************

全局修改

*******************************
[rewrite_local]

^https?://(api-chat|api-pay|api-a)\.soulapp\.cn url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/soul.js


[mitm]
# 对应的主机名
hostname = api-chat.soulapp.cn, api-pay.soulapp.cn, api-a.soulapp.cn

*******************************/

const _0x114600=_0x1394;(function(_0x381ca8,_0x3fc8c7){const _0x318528=_0x1394,_0x4fd7bb=_0x381ca8();while(!![]){try{const _0x457a9e=parseInt(_0x318528(0x1de))/0x1+-parseInt(_0x318528(0x1e3))/0x2+-parseInt(_0x318528(0x1db))/0x3+parseInt(_0x318528(0x1dd))/0x4*(parseInt(_0x318528(0x1e6))/0x5)+parseInt(_0x318528(0x1d8))/0x6*(parseInt(_0x318528(0x1e7))/0x7)+parseInt(_0x318528(0x1e2))/0x8+-parseInt(_0x318528(0x1e0))/0x9;if(_0x457a9e===_0x3fc8c7)break;else _0x4fd7bb['push'](_0x4fd7bb['shift']());}catch(_0x261234){_0x4fd7bb['push'](_0x4fd7bb['shift']());}}}(_0x490c,0xbc2c2));if(/soulapp/[_0x114600(0x1e4)]($request['url'])){let body=$response[_0x114600(0x1da)];body=body['replace'](/"superVIP":false/g,_0x114600(0x1d9))[_0x114600(0x1df)](/"validTime":null/g,'\x22validTime\x22:4567891456000')[_0x114600(0x1df)](/"hasFlyPackage":false/g,_0x114600(0x1e5))['replace'](/"limit":true/g,'\x22limit\x22:false')['replace'](/"currentSpeed":\d+/g,_0x114600(0x1e1))[_0x114600(0x1df)](/"speedupTime":\d+/g,'\x22speedupTime\x22:0')[_0x114600(0x1df)](/"speedupCount":1/g,_0x114600(0x1dc))[_0x114600(0x1df)](/"speedup":false/g,'\x22speedup\x22:true'),$done({'body':body});}function _0x1394(_0x15e8bb,_0x58d7b1){const _0x490c93=_0x490c();return _0x1394=function(_0x139448,_0x439cee){_0x139448=_0x139448-0x1d8;let _0x48878c=_0x490c93[_0x139448];return _0x48878c;},_0x1394(_0x15e8bb,_0x58d7b1);}function _0x490c(){const _0x1ba1c3=['22852uBeeMb','1088780XYnSmA','replace','21013713iNHkSw','\x22currentSpeed\x22:0','10863664oxKKrs','2806244tMRzDl','test','\x22hasFlyPackage\x22:true','1145AfbarM','2009091YqDbwp','18ukVBoz','\x22superVIP\x22:true','body','321963BwBmuw','\x22speedupCount\x22:0'];_0x490c=function(){return _0x1ba1c3;};return _0x490c();}
