export function readLocalStorage(key) {
  const json = localStorage.getItem(key)
  const data = JSON.parse(json)

  if(key === "app-state" && !data) {
    return {
      user: {
				firstName: null,
				lastName: null,
				email: null,
				isLoggedIn: false,
			},
			count: 0,
    }
  }
  return data
}

export function writeLocalStorage(key, value) {
  localStorage.setItem(key, value)
}