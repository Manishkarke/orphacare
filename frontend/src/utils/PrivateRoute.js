import React from 'react'
import { getAccessTokenFromLocalStorage } from './localStorage'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { accessToken } = getAccessTokenFromLocalStorage();
    return (
        accessToken ? children : <Navigate to="/signin" />
    )
}

export default PrivateRoute;