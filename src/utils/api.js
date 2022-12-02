export const apiRequest = async () => {
  try {
    const response = await fetch('/api/v1/video/')
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}
