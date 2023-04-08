const addAccessTokenToLocalStorage = (accessToken, userName) => {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("userName", userName)
}

const removeAccessTokenFromLocalStorage = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userName");
}

const getAccessTokenFromLocalStorage = () => {
    const accessToken = localStorage.getItem('access_token');
    const userName = localStorage.getItem('userName');
    return { accessToken, userName };
}

export { addAccessTokenToLocalStorage, removeAccessTokenFromLocalStorage, getAccessTokenFromLocalStorage };