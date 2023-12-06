import mongoose, { CallbackError, Document, Schema } from 'mongoose';
import { IPostCategory } from './post-category.model';

export interface IPost extends Document {
  title: string;
  content: string;
  author: string;
  category: IPostCategory;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'PostCategory' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model<IPost>('Post', PostSchema);

export default Post;
