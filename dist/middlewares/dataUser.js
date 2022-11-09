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
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    birthDate: Joi.date().format('YYYY-MM-DD').required()
});
const dataUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new UserService_1.default();
        const { name, email, birthDate } = req.body;
        const { error } = userSchema.validate({ name, email, birthDate });
        if (error) {
            return res.status(400).json({ message: error.message });
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
exports.default = dataUser;
