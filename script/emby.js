const { url } = $request
const { body } = $response
const OK_STATUS = 'HTTP/1.1 200 OK'

const doneRes = {
  body,
}
if (url.includes('/admin/service/registration/validateDevice')) {
  Object.assign(doneRes, {
    status: OK_STATUS,
    body: JSON.stringify({
      cacheExpirationDays: 365,
      message: 'Device Valid',
      resultCode: 'GOOD',
    }),
  })
}
$notify('emby', 'emby', JSON.stringify(doneRes))

$done(doneRes)
