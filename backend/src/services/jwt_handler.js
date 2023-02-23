const jwt = require('jsonwebtoken');

function createNewAccessToken(userId) {
    const accessToken = jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    return accessToken;
}

function createNewRefreshToken(userId) {
    const refreshToken = jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    return refreshToken;
}

function validateAccessToken(accessToken) {
    try {
        const jwtVerification = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        return jwtVerification.id;
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            throw new CustomError(400, 'Please provide a valid access token.');
        } else if (err instanceof jwt.TokenExpiredError) {
            throw new CustomError(401, 'The token is expired.');
        } else {
            throw new CustomError(500, 'Internal server error.');
        }

    }
}

function validateRefreshToken(refreshToken) {
    try {
        const jwtVerification = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        return jwtVerification.id;
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            throw new CustomError(400, 'Please provide a valid refresh token.');
        } else if (err instanceof jwt.TokenExpiredError) {
            throw new CustomError(401, 'The refresh token is expired.');
        } else {
            throw new CustomError(500, 'Internal server error.');
        }
    }
}
    module.exports = {
        createNewAccessToken,
        createNewRefreshToken,
        validateAccessToken,
        validateRefreshToken
    };