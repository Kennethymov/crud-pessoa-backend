import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoute = Router();
const userController = new UserController();

userRoute.get('/pessoas', userController.getAll);
userRoute.get('/pessoa/:id', userController.getById)
userRoute.post('/pessoa', userController.create)
userRoute.put('/pessoa/:id', userController.update)
userRoute.delete('/pessoa/:id', userController.remove)



export default userRoute;
