import dotenv from 'dotenv';
// src/server.ts
dotenv.config();

import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { router as postRoutes } from './routes/post.routes';
import { router as postCategoriesRoutes } from './routes/post-category.routes';
import { router as indexRoutes } from './routes/index.routes'
import methodOverride from 'method-override';
import { connectDatabase } from './utils/db';

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


app.use('/posts', postRoutes);
app.use('/post-categories', postCategoriesRoutes);
app.use('/', indexRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
