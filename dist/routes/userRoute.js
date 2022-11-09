"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const dataUser_1 = __importDefault(require("../middlewares/dataUser"));
const dataUserU_date_1 = __importDefault(require("../middlewares/dataUserU\u1E55date"));
const userValidate_1 = __importDefault(require("../middlewares/userValidate"));
const userRoute = (0, express_1.Router)();
const userController = new UserController_1.default();
userRoute.get('/pessoas', userController.getAll);
userRoute.get('/pessoa/:id(\\d+)', userValidate_1.default, userController.getById);
userRoute.post('/pessoa', dataUser_1.default, userController.create);
userRoute.put('/pessoa/:id(\\d+)', userValidate_1.default, dataUserU_date_1.default, userController.update);
userRoute.delete('/pessoa/:id(\\d+)', userValidate_1.default, userController.remove);
exports.default = userRoute;
