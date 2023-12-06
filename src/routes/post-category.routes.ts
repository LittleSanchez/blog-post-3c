// src/routes/post-category.routes.ts

import { Router } from 'express';
import { PostCategoryController } from '../controllers/post-category.controller';

const router = Router();

router.get('/create', PostCategoryController.createPostCategoryForm);
router.post('/', PostCategoryController.createPostCategory);
router.get('/', PostCategoryController.getAllPostCategories);
router.get('/:id', PostCategoryController.getPostCategory);
router.get('/edit/:id', PostCategoryController.editPostCategoryForm);
router.put('/update/:id', PostCategoryController.updatePostCategory); // POST for simplicity; consider method-override for PUT
router.delete('/delete/:id', PostCategoryController.deletePostCategory); // POST for simplicity; consider method-override for DELETE


export {
  router
}
