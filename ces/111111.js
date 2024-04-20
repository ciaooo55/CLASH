// Quantumult X Rewrite 规则

// 1. 修改 canBuyCount 为 999
$rewriteRule /canBuyCount\" ?: ?\d+/gm "canBuyCount\":999" header

// 2. 修改 allowAdvance 为 true
$rewriteRule /allowAdvance\" ?: ?false/gm "allowAdvance\":true" header

// 3. 将 PENDING 替换为 PRE_SALE
$rewriteRule /PENDING/gm "PRE_SALE" header

// 4. 将 beginDateTime 后的数字替换为指定值
$rewriteRule /("beginDateTime\":\s*)\d{13}/gm "$1204457600000" header

// 5. 修改 mode 为 0
$rewriteRule /"mode\":2/gm "\"mode\":0" header

// 6. 将 statusCode 后的数字替换为 200
$rewriteRule /("statusCode\":\s*)\d{8}/gm "$200" header
