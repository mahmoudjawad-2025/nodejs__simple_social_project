import UserModel from "../../../db/models/user_model.js";
import GlobalError from "../../utils/global_error.js";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Get User

export const getUser_findOne = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findOne({ _id: id });

    return res.json(user);
}


export const getAll_find = async (req, res) => {
    const users = await UserModel.find();

    return res.status(200).json({ message: "success", users });
}


export const getAll_findByConfirmEmail = async (req, res) => {
    const users = await UserModel.find({ confirmEmail: false });

    return res.status(200).json({ message: "success", users });
}

export const getUser_findById = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    return res.json(user);
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Delete User

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await UserModel.deleteOne({ _id: id });

    return res.json(user);
}

export const deleteUser_findByIdAndDelete = async (req, res) => {
    const { id } = req.params;

    const user = await UserModel.findByIdAndDelete(id);

    return res.json(user);
}


export const deleteUser_findOneAndDelete = async (req, res) => {
    const { id } = req.params;

    const user = await UserModel.findOneAndDelete({ _id: id });

    return res.json(user);
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Update User

export const updateUser = async (req, res, next) => {

    const { id } = req.params;
    const { email, userName } = req.body;

    const user = await UserModel.updateOne({ _id: id }, { email: email, userName: userName });

    if (user.matchedCount === 0) {
        return next(new GlobalError("user not found", 404));
    }

    if (user.modifiedCount === 0) {
        return next(new GlobalError("no changes made", 400));
    }

    return res.status(200).json({ message: "success" });
}



export const updateUser_updateMany = async (req, res, next) => {

    const { id } = req.params;
    const { email, userName } = req.body;

    const user = await UserModel.updateMany({ confirmEmail: false }, { confirmEmail: true });

    if (user.matchedCount == 0) {
        return next(new GlobalError("user not found", 404));
    }

    if (user.modifiedCount == 0) {
        return next(new GlobalError("no changes made", 400));
    }

    return res.status(200).json({ message: "success" });
}


export const updateUser_findByIdAndUpdate = async (req, res) => {
    const { id } = req.params;
    const { email, userName } = req.body;

    const user = await UserModel.findByIdAndUpdate(id, { email }, { new: true });

    return res.json(user);
}


export const updateUser_findOneAndUpdate = async (req, res) => {
    const { id } = req.params;
    const { email, userName } = req.body;

    const user = await UserModel.findOneAndUpdate({ _id: id }, { email, userName });

    return res.json(user);
}