




const doRequest = (url, userData=null) => {
    // userData нет при первом запросе. пофикси из-за этого не берется токен
    let headers = {}
    try{
        headers = {
            Authorization: `token ${userData.userToken}`,
        }
    }catch (err){
        console.error('User date is undefined',err)
    }
    try {
        return fetch(url, {headers: headers})
    } catch {
        console.log('error_request')
    }
}


export default doRequest