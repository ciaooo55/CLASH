{
  "mitm": 1,
  "updated_at": 1713726626795,
  "locked": 0,
  "created_at": 1708441417586,
  "paths": [
    {
      "regrexPath": "",
      "method": "ALL",
      "schema": "https",
      "host": "wx.maoyan.com",
      "pathMode": 0,
      "rules": [
        {
          "redirectCode": "code302",
          "headerAction": "add",
          "serverFile": "",
          "mockType": "local",
          "regularAction": "modifyBody",
          "modifyValue": "$1713873600000",
          "type": "response",
          "mode": "regular",
          "matchKey": "(\"onSaleTime\":\\s*)\\d{13}",
          "regularExpression": 1,
          "mockFileType": 0,
          "tempFile": "",
          "localFile": ""
        },
        {
          "localFile": "",
          "mockType": "local",
          "mode": "regular",
          "regularExpression": 0,
          "regularAction": "modifyBody",
          "tempFile": "",
          "mockFileType": 0,
          "redirectCode": "code302",
          "matchKey": "\"onSaleTime\":null",
          "headerAction": "add",
          "serverFile": "",
          "type": "response",
          "modifyValue": "\"onSaleTime\":1712550180000"
        },
        {
          "regularExpression": 0,
          "tempFile": "",
          "mode": "regular",
          "headerAction": "add",
          "regularAction": "modifyBody",
          "modifyValue": "\"onSaleStatus\":1",
          "serverFile": "",
          "type": "response",
          "mockFileType": 0,
          "matchKey": "\"onSaleStatus\":2",
          "redirectCode": "code302",
          "mockType": "local",
          "localFile": ""
        },
        {
          "matchKey": "\"saleLabel\":11",
          "type": "response",
          "mockType": "local",
          "serverFile": "",
          "localFile": "",
          "modifyValue": "\"saleLabel\":3",
          "tempFile": "",
          "mockFileType": 0,
          "regularAction": "modifyBody",
          "mode": "regular",
          "headerAction": "add",
          "redirectCode": "code302",
          "regularExpression": 0
        },
        {
          "regularAction": "modifyBody",
          "mockType": "local",
          "mockFileType": 0,
          "serverFile": "",
          "localFile": "",
          "regularExpression": 0,
          "tempFile": "",
          "type": "response",
          "modifyValue": "\"ticketStatus\":3",
          "headerAction": "add",
          "mode": "regular",
          "redirectCode": "code302",
          "matchKey": "\"ticketStatus\":1"
        },
        {
          "regularAction": "modifyBody",
          "type": "response",
          "redirectCode": "code302",
          "mockType": "local",
          "modifyValue": "$200",
          "mockFileType": 0,
          "localFile": "",
          "regularExpression": 1,
          "serverFile": "",
          "tempFile": "",
          "mode": "regular",
          "headerAction": "add",
          "matchKey": "(\"code\":\\s*)\\d{4}"
        },
        {
          "type": "response",
          "modifyValue": "success\":true",
          "mode": "regular",
          "matchKey": "success\":false",
          "redirectCode": "code302",
          "regularAction": "modifyBody",
          "regularExpression": 0,
          "serverFile": "",
          "mockFileType": 0,
          "headerAction": "add",
          "mockType": "local",
          "tempFile": "",
          "localFile": ""
        },
        {
          "type": "response",
          "localFile": "",
          "tempFile": "",
          "regularAction": "modifyBody",
          "mode": "regular",
          "modifyValue": "soldOut\":false",
          "regularExpression": 0,
          "mockFileType": 0,
          "serverFile": "",
          "matchKey": "soldOut\":true",
          "redirectCode": "code302",
          "mockType": "local",
          "headerAction": "add"
        },
        {
          "headerAction": "add",
          "redirectCode": "code302",
          "tempFile": "",
          "mode": "regular",
          "type": "response",
          "matchKey": "showStatus\":2",
          "regularExpression": 0,
          "serverFile": "",
          "localFile": "",
          "mockFileType": 0,
          "regularAction": "modifyBody",
          "mockType": "local",
          "modifyValue": "showStatus\":0"
        },
        {
          "mockFileType": 0,
          "serverFile": "",
          "redirectCode": "code302",
          "type": "response",
          "localFile": "",
          "modifyValue": "maxBuyLimit\":4",
          "headerAction": "add",
          "regularExpression": 0,
          "mockType": "local",
          "mode": "regular",
          "matchKey": "maxBuyLimit\":0",
          "regularAction": "modifyBody",
          "tempFile": ""
        },
        {
          "modifyValue": "remainingStock\":4",
          "mode": "regular",
          "mockFileType": 0,
          "localFile": "",
          "serverFile": "",
          "tempFile": "",
          "mockType": "local",
          "type": "response",
          "headerAction": "add",
          "redirectCode": "code302",
          "regularAction": "modifyBody",
          "matchKey": "remainingStock\":0",
          "regularExpression": 0
        }
      ],
      "port": "",
      "query": "",
      "path": ""
    }
  ],
  "name": "猫眼小程序bp➕提前",
  "enabled": 1 
}