export const apiRequest = async () => {
  try {
    const response = await fetch('/api/v1/video/')
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}
