var body = $response.body;
var url = $request.url;

if (url.includes('/chat')) {
    body = body.replace(/"limit":true/g, '"limit":false');
}

$done({ body });
