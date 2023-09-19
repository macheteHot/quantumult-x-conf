const { url } = $request
const { body } = $response
const OK_STATUS = 'HTTP/1.1 200 OK'

let modifyBody = JSON.parse(body)

if (url.includes('/admin/service/registration/validateDevice')) {
  modifyBody = {
    cacheExpirationDays: 365,
    message: 'Device Valid',
    resultCode: 'GOOD',
  }
  /* cspell:disable-next-line */
} else if (url.includes('/admin/service/appstore/register')) {
  modifyBody = {
    featId: '',
    registered: true,
    expDate: '2099-01-01',
    key: '',
  }
} else if (url.includes('/admin/service/registration/validate')) {
  modifyBody = {
    featId: '',
    registered: true,
    expDate: '2099-01-01',
    key: '',
  }
} else if (url.includes('/admin/service/registration/getStatus')) {
  modifyBody = {
    planType: 'Cracked',
    deviceStatus: '',
    subscriptions: [],
  }
  /* cspell:disable-next-line */
} else if (url.includes('/admin/service/supporter/retrievekey')) {
  modifyBody = {
    Success: false,
    ErrorMessage: 'Supporter not found',
  }
}

$notify('emby', 'emby', JSON.stringify(modifyBody))

$done({
  status: OK_STATUS,
  body: JSON.stringify(modifyBody),
})
