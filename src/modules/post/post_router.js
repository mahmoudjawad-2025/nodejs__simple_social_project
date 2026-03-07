import { Router } from 'express';
import * as controller from './post_controller.js';
import * as commentController from './comment_controller.js';
import { auth } from '../../middlewares/auth_mw.js';
import validation from '../../middlewares/validation_mw.js';
import asyncHandler from '../../utils/catch_error.js';
import * as schemas from './post_validation.js';
const router = Router();

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Post

router.get('/getAll', auth(), asyncHandler(controller.getAllByVirtual));
router.post('/createPost', auth(), validation(schemas.createPostSchema), asyncHandler(controller.createPost));
router.patch('/:id/likePost', auth(), validation(schemas.votePostSchema), asyncHandler(controller.likePost));
router.patch('/:id/unlikePost', auth(), validation(schemas.votePostSchema), asyncHandler(controller.unlikePost));

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Comments

router.post('/:id/createComment', auth(), validation(schemas.createCommentSchema), asyncHandler(commentController.createComment));

export default router;