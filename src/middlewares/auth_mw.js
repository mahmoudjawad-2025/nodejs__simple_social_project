import jwt from 'jsonwebtoken'

export const auth = () => {

    return async (req, res, next) => {
        const { token } = req.headers;

        if (!token)
            return res.status(400).json({ message: "invalid authorization" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.id = decoded.id;
        next();
    }
}