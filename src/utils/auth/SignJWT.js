import jwt from "jsonwebtoken";

const signJWT = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

export default signJWT;
