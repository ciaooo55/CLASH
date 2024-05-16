/*******************************

王心凌5.17场次

*******************************

[rewrite_local]

^https?:\/\/yanchu\.maoyan\.com\/myshow\/ajax\/v2\/performance\/323101\/shows\/0$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/changci.js
^https?:\/\/wx\.maoyan\.com\/maoyansh\/myshow\/ajax\/v2\/performance\/324734\/shows\/.*$ url script-response-body https://raw.githubusercontent.com/ciaooo55/CLASH/main/QuantumultX/maoyan/changci.js

[mitm]
hostname = yanchu.maoyan.com, wx.maoyan.com

*******************************/

var body = $response.body;

// 替换响应体为新的JSON数据
body = JSON.stringify({
    code: 200,
    msg: "",
    data: [
        {
            showId: 1882472,
            name: "2025555六19:00",
            performanceId: 323101,
            startTimeDateFormatted: "2024-06-15",
            startTimeWeekFormatted: "周六",
            startTimeTimeFormatted: "19:00",
            startTime: 1700000000000,
            endTime: 1718456400000,
            onSaleTime: 0,
            offSaleTime: 0,
            hasInventory: true,
            showStatus: 0,
            showType: 1,
            showNote: "",
            areaUrl: null,
            areaSvg: null,
            areaSvgUrl: null,
            showSeatType: 0,
            setExplain: "",
            showOrderLimitVO: {
                maxBuyLimitPerOrder: 4,
                maxBuyLimitPerUser: 4,
                userAlreadyBuyNum: 0,
                userRemainBuyNum: 4
            },
            unusualStatus: 0,
            needFaceCheck: false,
            seatMode: 0,
            hasDiscount: false,
            minSellPrice: null,
            preSelectVO: null,
            soldOut: false,
            normal: true,
            default: false
        }
    ],
    paging: null,
    attrMaps: {
        serverTime: 1715588112318
    },
    success: true
});

$done({body});
