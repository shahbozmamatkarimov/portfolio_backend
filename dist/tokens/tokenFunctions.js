"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToCookie = exports.generateToken = void 0;
const dotenv = require("dotenv");
dotenv.config();
async function generateToken(jwt_payload, jwtService) {
    const [access_token, refresh_token] = await Promise.all([
        jwtService.signAsync(jwt_payload, {
            secret: process.env.ACCESS_TOKEN_KEY,
            expiresIn: process.env.ACCESS_TOKEN_TIME,
        }),
        jwtService.signAsync(jwt_payload, {
            secret: process.env.REFRESH_TOKEN_KEY,
            expiresIn: process.env.REFRESH_TOKEN_TIME,
        }),
    ]);
    return { access_token, refresh_token };
}
exports.generateToken = generateToken;
async function writeToCookie(refresh_token, user, res) {
    res.cookie(`refresh_token_${user}`, refresh_token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    });
}
exports.writeToCookie = writeToCookie;
//# sourceMappingURL=tokenFunctions.js.map