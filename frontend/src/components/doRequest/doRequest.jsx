
import {HOST} from '../HOST/HOST'
const doRequest = (url, userToken, method = 'GET', obj = null) => {
    let headers = {}
    try {
        headers = {
            'Content-type': 'application/json; charset=UTF-8',
            Accept: 'application/json',

        }
        if (userToken) {
            headers.Authorization = `token ${userToken}`
        }
    } catch (err) {
        console.error('User date is undefined', err)
    }
    let data = {headers: headers}
    if (obj) {
        data.body = JSON.stringify(obj)
    }
    data.method = method
    try {
        return fetch(HOST+url, data)
    } catch {
        console.log('error_request')
    }








}




export default doRequest
