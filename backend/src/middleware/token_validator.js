const {CustomError} = require('./error_handler.js');
const jwtHandler = require('../services/jwt_handler.js');

module.exports.accessTokenValidator = async (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    if(!bearerToken || !bearerToken.trim()){
        throw new CustomError(401, 'Access token is required.');
    }
    const accessToken = bearerToken.split(' ')[1];

    const userId = await jwtHandler.validateAccessToken(accessToken);
    req.body.userId = userId;
    next();
}

module.exports.refreshTokenValidator = async (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    if(!bearerToken || !bearerToken.trim()){
        throw new CustomError(401, 'Refresh token is required.');
    }
    const refreshToken = bearerToken.split(' ')[1];

    const userId = await jwtHandler.validateRefreshToken(refreshToken);
    req.body.userId = userId;
    next();
}




