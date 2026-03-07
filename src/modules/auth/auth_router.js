import { Router } from 'express';
import { register, register_save, register_many, login } from './auth_controller.js';
import validation from '../../middlewares/validation_mw.js';
import asyncHandler from '../../utils/catch_error.js';
import * as schemas from './auth_validation.js';

const router = Router();


router.post('/register', validation(schemas.registerSchema), asyncHandler(register));
router.post('/registerSave', validation(schemas.registerSchema), asyncHandler(register_save));
router.post('/registerMany', validation(schemas.registerManySchema), asyncHandler(register_many));


router.post('/login', validation(schemas.loginSchema), asyncHandler(login));

export default router;