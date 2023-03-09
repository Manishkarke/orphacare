const addAccessTokenToLocalStorage = (accessToken) => {
    localStorage.setItem("access_token", accessToken)
}

const removeAccessTokenFromLocalStorage = () => {
    localStorage.removeItem("access_token");
}

const getAccessTokenFromLocalStorage = () => {
    localStorage.getItem('access_token');
}

export { addAccessTokenToLocalStorage, removeAccessTokenFromLocalStorage, getAccessTokenFromLocalStorage };