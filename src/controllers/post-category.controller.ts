// src/controllers/post-category.controller.ts

import { Request, Response } from 'express';
import { PostCategoryService } from '../services/post-category.service';

export class PostCategoryController {
  static async createPostCategoryForm(req: Request, res: Response): Promise<void> {
    res.render('partials/post-category/create', { title: 'Create Post Category' });
  }

  static async createPostCategory(req: Request, res: Response): Promise<void> {
    try {
      await PostCategoryService.createPostCategory(req.body);
      res.redirect('/post-categories');
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async getAllPostCategories(req: Request, res: Response): Promise<void> {
    try {
      const postCategories = await PostCategoryService.findAllPostCategories();
      console.log(postCategories)
      res.render('partials/post-category/index', { title: 'Post Categories', postCategories });
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async getPostCategory(req: Request, res: Response): Promise<void> {
    try {
      const postCategory = await PostCategoryService.findPostCategoryById(req.params.id);
      if (!postCategory) {
        res.status(404).render('partials/error', { title: 'Error', message: 'Post Category not found' });
      } else {
        res.render('partials/post-category/view', { title: postCategory.name, postCategory });
      }
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async editPostCategoryForm(req: Request, res: Response): Promise<void> {
    try {
      const postCategory = await PostCategoryService.findPostCategoryById(req.params.id);
      if (!postCategory) {
        res.status(404).render('partials/error', { title: 'Error', message: 'Post Category not found' });
      } else {
        res.render('partials/post-category/edit', { title: `Edit ${postCategory.name}`, postCategory });
      }
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async updatePostCategory(req: Request, res: Response): Promise<void> {
    try {
      await PostCategoryService.updatePostCategoryById(req.params.id, req.body);
      res.redirect(`/post-categories`);
    }
    catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async deletePostCategory(req: Request, res: Response): Promise<void> {
    try {
      await PostCategoryService.deletePostCategoryById(req.params.id);
      res.redirect('/post-categories');
    }
    catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

}
