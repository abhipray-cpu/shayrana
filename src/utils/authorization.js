import cookies from 'js-cookie'
export function isTokenValid() {
  let token = cookies.get('token')
  if (!token) {
    return false // Token is not present
  }

  // Decode the token to get the payload
  const payload = parseJwt(token)

  if (!payload || !payload.exp) {
    return false // Token is not valid
  }

  // Get the current time in seconds
  const currentTime = Math.floor(Date.now() / 1000)

  // Check if the token has expired
  return payload.exp > currentTime
}

// Helper function to parse JWT token payload
function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )

    return JSON.parse(jsonPayload)
  } catch (e) {
    return null
  }
}
