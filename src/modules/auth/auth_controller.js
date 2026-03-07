import bcrypt from 'bcrypt';
import userModel from '../../../db/models/user_model.js';
import jwt from 'jsonwebtoken';
import GlobalError from '../../utils/global_error.js';

export const register = async (req, res) => {
    const { email, password, name, age } = req.body;

    const hash = await bcrypt.hash(password, 8);
    const user = await userModel.create({ userName: name, email, password: hash, age });

    return res.json({ message: "success", user });
}


export const register_save = async (req, res) => {

    const { email, password, name, age } = req.body;

    const hash = await bcrypt.hash(password, 8);
    const user = new userModel({ userName: name, email, password: hash, age });

    await user.save();

    // const user = await userModel.create({ userName: name, email, password: hash, age });
    return res.json({ message: "success", user });
}


export const register_many = async (req, res) => {
    const usersData = Array.isArray(req.body) ? req.body : [req.body];

    const processedUsers = await Promise.all(usersData.map(async (user) => {
        const { password, name, email, age } = user;
        if (!password) {
            throw new GlobalError("Password is required for all users", 400);
        }
        const hash = await bcrypt.hash(password, 8);
        return {
            userName: name,
            email,
            password: hash,
            age
        };
    }));

    const users = await userModel.insertMany(processedUsers);
    return res.json({ message: "success", users });
}

// -----------------------------------------------------------------------------------------


export const login = async (req, res, next) => {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return next(new GlobalError('User not found', 404));
    }

    const check = await bcrypt.compare(password, user.password);

    if (!check) {
        return next(new GlobalError('invalid password', 400));
    }

    const token = jwt.sign({ id: user._id, userName: user.userName }, process.env.JWT_SECRET);

    return res.status(200).json({ message: "success", token });
}