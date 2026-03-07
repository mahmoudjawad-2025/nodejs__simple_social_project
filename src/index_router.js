import { connectionDB } from '../db/connection.js';
import userRouter from './modules/user/user_router.js';
import authRouter from './modules/auth/auth_router.js';
import postRouter from './modules/post/post_router.js';
import cors from 'cors';
import GlobalError from './utils/global_error.js';

const initApp = (app, express) => {
    connectionDB();
    app.use(express.json());
    app.use(cors());
    app.use('/users', userRouter);
    app.use('/auth', authRouter);
    app.use('/posts', postRouter);

    app.get('/', (req, res) => {
        return res.status(200).json({ message: "Welcom !" });
    });

    app.all('*path', (req, res, next) => {
        return next(new GlobalError(`Page Not Found: ${req.originalUrl}`, 404));
    });

    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        return res.status(statusCode).json({
            status: 'error',
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
        });
    });
}

export default initApp;