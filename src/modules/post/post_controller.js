import postModel from "../../../db/models/post_model.js"


export const getAllByVirtual = async (req, res) => {
    const posts = await postModel.find({}).populate([
        {
            path: 'userId',
            select: 'userName'
        },
        {
            path: 'like',
            select: 'userName'
        },
        {
            path: 'unlike',
            select: 'userName'
        },
        {
            path: 'comments'
        }
    ]);


    return res.status(200).json({ message: "success", posts });

    // add these in db/post_model file
    // toJSON: { virtuals: true },
    // toObject: { virtuals: true },

    // postSchema.virtual('comments', {
    //     ref: 'Comment',
    //     localField: '_id',
    //     foreignField: 'postId'
    // });
}


// export const getAllByLookup = async (req, res) => {
//     const posts = await postModel.find({}).populate([
//         {
//             path: 'userId',
//             select: 'userName'
//         },
//         {
//             path: 'like',
//             select: 'userName'
//         },
//         {
//             path: 'unlike',
//             select: 'userName'
//         }
//     ]);
//     const posts = await postModel.aggregate([
//         {
//             $lookup: {
//                 from: 'comments',
//                 localField: '_id',
//                 foreignField: 'postId',
//                 as: 'comments'
//             }
//         }
//     ]);

//     return res.status(200).json({ message: "success", posts });
// }


// export const getAllByLoop = async (req, res) => {
//     const posts = await postModel.find({}).populate([
//         {
//             path: 'userId',
//             select: 'userName'
//         },
//         {
//             path: 'like',
//             select: 'userName'
//         },
//         {
//             path: 'unlike',
//             select: 'userName'
//         }
//     ]);
//     const postsList = [];
//     for (const post of posts) {
//         const comment = await commentModel.find({ postId: post._id });
//         postsList.push({ post, comment });
//     }
//     return res.status(200).json({ message: "success", posts: postsList });
// }




export const createPost = async (req, res) => {
    const { title, caption } = req.body;

    const post = await postModel.create({ title, caption, userId: req.id });

    return res.status(201).json({ message: "success", post });
}


export const likePost = async (req, res) => {

    const { id } = req.params;
    const userId = req.id;

    const post = await postModel.findByIdAndUpdate(id,
        {
            // $push: {
            //     like: userId
            // }
            $addToSet: {
                like: userId
            },
            $pull: {
                unlike: userId
            }
        },
        {
            new: true,
        }
    );

    post.totalVote = post.like.length - post.unlike.length;
    await post.save();

    return res.status(200).json({ message: "success", post });
}


export const unlikePost = async (req, res) => {

    const { id } = req.params;
    const userId = req.id;

    const post = await postModel.findByIdAndUpdate(id,
        {
            // $push: {
            //     like: userId
            // }
            $addToSet: {
                unlike: userId
            },
            $pull: {
                like: userId
            }
        },
        {
            new: true,
        }
    );

    post.totalVote = post.like.length - post.unlike.length;
    await post.save();
    return res.status(200).json({ message: "success", post });
}