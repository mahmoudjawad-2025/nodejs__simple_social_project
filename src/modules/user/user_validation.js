import joi from 'joi';

const idSchema = joi.string().hex().length(24).required();

export const getUserByIdSchema = joi.object({
    id: idSchema
}).required();

export const deleteUserSchema = joi.object({
    id: idSchema
}).required();

export const updateUserSchema = joi.object({
    id: idSchema,
    userName: joi.string().min(3).max(20),
    email: joi.string().email()
}).required();
