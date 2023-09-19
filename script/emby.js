const { url } = $request
const { body } = $response
const OK_STATUS = 'HTTP/1.1 200 OK'
$notify('emby', 'emby', JSON.stringify({ url, body }))
if (url.includes('/admin/service/registration/validateDevice')) {
  $done({
    status: OK_STATUS,
    body: JSON.stringify({
      cacheExpirationDays: 365,
      message: 'Device Valid',
      resultCode: 'GOOD',
    }),
  })
}

$done({ body })
