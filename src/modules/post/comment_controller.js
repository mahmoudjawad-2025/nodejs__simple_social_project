import commentModel from "../../../db/models/comment_model.js";
import postModel from "../../../db/models/post_model.js"

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Get All Comments

export const getAll = async (req, res) => {
    const posts = await postModel.find().populate(
        {
            path: 'userId',
            select: 'username'
        },
        {
            path: 'like',
            select: 'username'
        },
        {
            path: 'unlike',
            select: 'username'
        }
    );
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Create Comment

export const createComment = async (req, res) => {
    const { id } = req.params;
    const userId = req.id;
    const { text } = req.body;

    const comment = await commentModel.create({ postId: id, userId, text });

    return res.status(201).json({ message: "success", comment });
}