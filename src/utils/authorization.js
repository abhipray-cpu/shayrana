import cookies from 'js-cookie'
export function isTokenValid() {
  try {
    let auth = JSON.parse(cookies.get('auth'))
    if (!auth) {
      return false // Token is not present
    }
    const currentTime = Math.floor(Date.now() / 1000)
    const expiry = JSON.parse(cookies.get('expire'))
    return expiry > currentTime
  } catch (err) {
    return false
  }
}
