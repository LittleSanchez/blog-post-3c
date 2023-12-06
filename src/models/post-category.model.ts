// src/models/post-category.model.ts
//
import mongoose, { Document, Schema } from 'mongoose';
import { IPost } from './post.model';

export interface IPostCategory extends Document {
  name: string;
  posts: IPost[];
  createdAt: Date;
  updatedAt: Date;
}

const PostCategorySchema = new Schema({
  name: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const PostCategory = mongoose.model<IPostCategory>('PostCategory', PostCategorySchema);

export default PostCategory;
