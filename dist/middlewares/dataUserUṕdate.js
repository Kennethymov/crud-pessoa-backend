"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
const Joi = require('joi').extend(require('@joi/date'));
const userSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    birthDate: Joi.date().format('YYYY-MM-DD')
});
const dataUserUpdate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new UserService_1.default();
        const { name, email, birthDate } = req.body;
        if (!name && !email && !birthDate) {
            return res.status(400).json({
                message: 'É necessário passar um nome, um email ou uma data de aniversario para atualizar',
            });
        }
        if (email) {
            const { error } = userSchema.validate({ email });
            if (error) {
                return res.status(400).json({ message: error.message });
            }
        }
        const user = yield userService.getByEmail(email);
        if (user) {
            return res.status(409).json({
                message: 'Este email já foi cadastrado!',
            });
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = dataUserUpdate;
