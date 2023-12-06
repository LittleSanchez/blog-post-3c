// src/service/post-category.service.ts

import PostCategory, { IPostCategory } from '../models/post-category.model';

export class PostCategoryService {
  static async createPostCategory(postCategoryData: { name: string; }): Promise<IPostCategory> {
    const newPostCategory = new PostCategory(postCategoryData);
    return newPostCategory.save();
  }

  static async findAllPostCategories(): Promise<IPostCategory[]> {
    return PostCategory.find().populate('posts')
  }

  static async findPostCategoryById(id: string): Promise<IPostCategory | null> {
    return PostCategory.findById(id);
  }

  static async updatePostCategoryById(id: string, updateData: { name?: string; }): Promise<IPostCategory | null> {
    return PostCategory.findByIdAndUpdate(id, updateData, { new: true });
  }

  static async deletePostCategoryById(id: string): Promise<IPostCategory | null> {
    return PostCategory.findByIdAndDelete(id);
  }
}
