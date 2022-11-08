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
class UserController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAll();
            return res.status(200).json(users);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.userService.getById(parseInt(id, 10));
            return res.status(200).json(user);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const newUser = yield this.userService.create(user);
            return res.status(201).json(newUser);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const dataUser = req.body;
            const updatedUser = yield this.userService.update(parseInt(id, 10), dataUser);
            return res.status(200).json(updatedUser);
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.userService.remove(parseInt(id, 10));
            return res.status(200).json({ message: "usuário deletado com sucesso" });
        });
        this.userService = new UserService_1.default();
    }
}
exports.default = UserController;
