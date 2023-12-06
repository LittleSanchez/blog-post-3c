// src/controllers/postController.ts

import { Request, Response } from 'express';
import { PostService } from '../services/post.service';
import { PostCategoryService } from '../services/post-category.service';

export class PostController {
  static async createPostForm(req: Request, res: Response): Promise<void> {
    const postCategories = await PostCategoryService.findAllPostCategories();
    res.render('partials/post/create', { title: 'Create Post', postCategories });
  }

  static async createPost(req: Request, res: Response): Promise<void> {
    try {
      await PostService.createPost(req.body);
      res.redirect('/');
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async getAllPosts(req: Request, res: Response): Promise<void> {
    try {
      const selectedCategoryId = req.query.postCategory as string | undefined;
      const isCurrentCategory = (categoryId: string) => categoryId === selectedCategoryId;
      const posts = await PostService.findAllPosts(selectedCategoryId);
      console.log(posts[0])
      const postCategories = await PostCategoryService.findAllPostCategories();
      res.render('partials/post/index', { title: 'Home', posts, postCategories, isCurrentCategory });
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async getPost(req: Request, res: Response): Promise<void> {
    try {
      const post = await PostService.findPostById(req.params.id);
      if (!post) {
        res.status(404).render('partials/error', { title: 'Error', message: 'Post not found' });
      } else {
        res.render('partials/post/view', { title: post.title, post });
      }
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async editPostForm(req: Request, res: Response): Promise<void> {
    try {
      const post = await PostService.findPostById(req.params.id);
      const postCategories = await PostCategoryService.findAllPostCategories();
      if (!post) {
        res.status(404).render('partials/error', { title: 'Error', message: 'Post not found' });
      } else {
        res.render('partials/post/edit', { title: `Edit ${post.title}`, post, postCategories });
      }
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async updatePost(req: Request, res: Response): Promise<void> {
    try {
      await PostService.updatePostById(req.params.id, req.body);
      res.redirect(`/posts/${req.params.id}`);
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }

  static async deletePost(req: Request, res: Response): Promise<void> {
    try {
      await PostService.deletePostById(req.params.id);
      res.redirect('/');
    } catch (error: any) {
      res.status(500).render('partials/error', { title: 'Error', message: error.message });
    }
  }
}
