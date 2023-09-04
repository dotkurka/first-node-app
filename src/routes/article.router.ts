import express from 'express';

import { fileFormats } from '../constants/index.js';
import { articleController } from '../controllers/index.js';
import { fileUploadMiddleware, validationMiddleware } from '../middlewares/index.js';
import validationArticleSchema from '../validation/article.schema.js';

const articleRouter = express.Router();

articleRouter.get('/', articleController.getArticles);
articleRouter.post(
    '/',
    validationMiddleware(validationArticleSchema),
    fileUploadMiddleware.uploadFiles([fileFormats.jpeg, fileFormats.jpg, fileFormats.png], false),
    articleController.createArticle
);
// articleRouter.post('/', articleController.getArticles);
// articleRouter.delete('/', articleController.getArticles);
// articleRouter.patch('/', articleController.getArticles);

export default articleRouter;