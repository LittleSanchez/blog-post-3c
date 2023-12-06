import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.redirect('/posts');
})

export {
  router
}
