import { Router } from 'express';
import UserController from '../controllers/UserController';
import dataUser from '../middlewares/dataUser';
import dataUserUpdate from '../middlewares/dataUserUṕdate';
import userValidate from '../middlewares/userValidate';

const userRoute = Router();
const userController = new UserController();

userRoute.get('/pessoas', userController.getAll);
userRoute.get('/pessoa/:id(\\d+)', userValidate, userController.getById)
userRoute.post('/pessoa', dataUser, userController.create)
userRoute.put('/pessoa/:id(\\d+)', dataUserUpdate, userController.update)
userRoute.delete('/pessoa/:id(\\d+)', userValidate, userController.remove)



export default userRoute;
