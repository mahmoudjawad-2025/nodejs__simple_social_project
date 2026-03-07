import { Schema, Types, model } from "mongoose";

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Comment Schema Definition

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    postId: {
        type: Types.ObjectId,
        ref: 'Post',
        required: true,
    },
}, {
    timestamps: true,
});

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Model

const commentModel = model('Comment', commentSchema);
export default commentModel;