import jwt from 'jsonwebtoken'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Auth Middleware

export const auth = () => {
    return async (req, res, next) => {

        // extract and verify token
        const { token } = req.headers;

        if (!token)
            return res.status(400).json({ message: "invalid authorization" });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.id = decoded.id;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
    }
}