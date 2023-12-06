import { Query } from 'mongoose';
import Post, { IPost } from '../models/post.model';

export class PostService {
  static async createPost(postData: { title: string; content: string; author: string; }): Promise<IPost> {
    const newPost = new Post(postData);
    return newPost.save();
  }

  static async findAllPosts(categoryId: string | undefined = undefined): Promise<IPost[]> {
    let posts: Query<IPost[], IPost> | undefined = undefined;
    if (categoryId) {
      posts = Post.find({ category: categoryId }).populate('category')
    } else {
      posts = Post.find().populate('category');
    }
    return posts.sort({ createdAt: -1 })
  }

  static async findPostById(id: string): Promise<IPost | null> {
    return Post.findById(id);
  }

  static async updatePostById(id: string, updateData: { title?: string; content?: string; author?: string; category?: string }): Promise<IPost | null> {
    return Post.findByIdAndUpdate(id, updateData, { new: true });
  }

  static async deletePostById(id: string): Promise<IPost | null> {
    return Post.findByIdAndDelete(id);
  }
}
