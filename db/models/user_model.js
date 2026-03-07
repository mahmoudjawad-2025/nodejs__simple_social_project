import { Schema, model } from "mongoose";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - User Schema Definition

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmEmail: {
        type: Boolean,
        default: false,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
    },
    age: {
        type: Number,
    }
}, { timestamps: true });

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Model

const userModel = model('User', userSchema);
export default userModel;