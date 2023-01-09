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

export const showViews = (view, arrSklon=['просмотр', 'просмотра', 'просмотров']) => {

    const viewNew = view
    const declensions = [`тыс.${arrSklon[2]}`, `млн.${arrSklon[2]}`]
    let str = null
    let num = null

    if (view >= 1000 && view < 1000000) {
        num = 100
        str = declensions[0]
    }

    if (view >= 1000000) {
        str = declensions[1]
        num = 100000
    }
    if (view >= 1000) {
        return `${Math.floor(view / num) / 10} ${str}`
    }

    view = Math.abs(view) % 100
    let n1 = view % 10
    if (view > 10 && view < 20) {
        return `${viewNew} ${arrSklon[2]}`
    }
    if (n1 > 1 && n1 < 5) {
        return `${viewNew} ${arrSklon[1]}`
    }
    if (n1 === 1) {
        return `${viewNew} ${arrSklon[0]}`
    }
    return `${viewNew} ${arrSklon[2]}`
}



export const reCurrentDate = (date) => {
    let fullDate = new Date(date)
    let month = fullDate.getMonth() + 1
    let day = fullDate.getDate()
    let year = fullDate.getFullYear()
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }

    return `${day}.${month}.${year}`
}

export const reDate = (date) => {
    let reDate = new Date(date)
    let dateSeconds = (Date.now() - reDate) / 1000
    
    if (dateSeconds < 60) {
        return Math.floor(dateSeconds) + ' seconds ago'
    }

    let dateMinutes = dateSeconds / 60

    if (dateMinutes < 60) {
        return Math.floor(dateMinutes) + ' minutes ago'
    }

    let dateHour = dateMinutes / 60

    if (dateHour < 24) {
        return Math.floor(dateHour) + ' hours ago'
    }

    let dateDay = dateHour / 24

    if (dateDay < 30) {
        return Math.floor(dateDay) + ' days ago'
    }

    let dateMonth = dateDay / 30

    if (dateMonth < 12) {
        return Math.floor(dateMonth) + ' month ago'
    }

    let dateYear = dateMonth / 12

    return Math.floor(dateYear) + ' years ago'
}


export const reDuration = (secs) => {
    const hours = Math.floor(secs / (60 * 60))

    const divisorForMinutes = secs % (60 * 60)
    const minutes = Math.floor(divisorForMinutes / 60)

    const divisorForSeconds = divisorForMinutes % 60
    const seconds = Math.floor(divisorForSeconds)
    
    let newMinutes = minutes
    let newSeconds = seconds

    if (minutes < 10) {
        newMinutes = '0' + minutes
    }
    if (seconds < 10) {
        newSeconds = '0' + seconds
    }
    if (hours === 0) {

        return minutes + ':' + newSeconds
    }

    return '' + hours + ':' + newMinutes + ':' + newSeconds
}


export const reGender = (gender) => {
    if (gender === 'm') {
        return 'Мужской'
    }
    if (gender === 'w') {
        return 'Женский'
    }
}