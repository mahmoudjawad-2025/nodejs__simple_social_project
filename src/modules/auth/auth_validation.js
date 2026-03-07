import joi from 'joi';

export const registerSchema = joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    age: joi.number().integer().min(10).max(100)
}).required();

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
}).required();

export const registerManySchema = joi.array().items(registerSchema).min(1).required();