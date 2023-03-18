const addAccessTokenToLocalStorage = (accessToken) => {
    localStorage.setItem("access_token", accessToken)
}

const removeAccessTokenFromLocalStorage = () => {
    localStorage.removeItem("access_token");
}

const getAccessTokenFromLocalStorage = () => {
    const accessToken = localStorage.getItem('access_token');
    return accessToken;
}

export { addAccessTokenToLocalStorage, removeAccessTokenFromLocalStorage, getAccessTokenFromLocalStorage };