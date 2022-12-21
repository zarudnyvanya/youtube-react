// export const apiRequest = async () => {
//   try {
//     const response = await fetch('/api/v1/video/')
//     console.log(response)
//     const data = await response.json()
//     console.log(data)
//     return data
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const doRequest = (url,userToken=null) => {
//     let headers = {}
//     try {
//       headers = {
//         Authorization: `token ${userToken}`,
//       }
//     } catch (err) {
//       console.error('User date is undefined', err)
//     }
//     try {
//       return fetch(url, { headers: headers }, body: JSON.stringify(user))
//     } catch {
//       console.log('error_request')
//     }
//   }
