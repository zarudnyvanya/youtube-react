
const doRequest = (url,userToken=null) => {

  let headers = {}
  try {
    headers = {
      Authorization: `token ${userToken}`,
    }
  } catch (err) {
    console.error('User date is undefined', err)
  }
  try {
    return fetch(url, { headers: headers })
  } catch {
    console.log('error_request')
  }
}

export default doRequest
