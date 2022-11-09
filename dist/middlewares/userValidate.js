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
const userValidate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userService = new UserService_1.default();
        const { id } = req.params;
        const user = yield userService.getById(Number(id));
        if (!user) {
            return res.status(404).json({
                message: 'pessoa não encontrada',
            });
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = userValidate;
