import joi from 'joi';

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Create Post Schema

export const createPostSchema = joi.object({
    title: joi.string().min(3).max(50).required(),
    caption: joi.string().min(3).max(500).required()
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Update Post Schema

export const updatePostSchema = joi.object({
    id: joi.string().hex().length(24).required(),
    title: joi.string().min(3).max(50),
    caption: joi.string().min(3).max(500)
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Vote Post Schema

export const votePostSchema = joi.object({
    id: joi.string().hex().length(24).required()
}).required();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Create Comment Schema

export const createCommentSchema = joi.object({
    id: joi.string().hex().length(24).required(),
    text: joi.string().min(3).max(200).required()
}).required();
