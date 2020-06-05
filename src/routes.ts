import express from 'express';
import knex from './database/connection'
import multer from 'multer';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

import multerConfig from './config/multer';

const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();
const routes = express.Router();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);

export default routes;