
const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null
}

export default isAuthenticated;