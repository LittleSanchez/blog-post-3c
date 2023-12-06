// src/routes/postRoutes.ts

import { Router } from 'express';
import { PostController } from '../controllers/post.controller';

const router = Router();

router.get('/create', PostController.createPostForm);
router.post('/', PostController.createPost);
router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getPost);
router.get('/edit/:id', PostController.editPostForm);
router.put('/update/:id', PostController.updatePost); // POST for simplicity; consider method-override for PUT
router.delete('/delete/:id', PostController.deletePost); // POST for simplicity; consider method-override for DELETE

export {
  router
}
