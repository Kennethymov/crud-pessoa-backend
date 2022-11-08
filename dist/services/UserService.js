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
const User_1 = __importDefault(require("../database/models/User"));
class UserService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findAll();
            return user;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({ where: { id } });
            return user;
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, birthDate } = user;
            const newUser = yield User_1.default.create({ name, email, birthDate });
            return newUser;
        });
        this.update = (id, dataUser) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, birthDate } = dataUser;
            yield User_1.default.update({ name, email, birthDate }, { where: { id } });
            const user = yield this.getById(id);
            return user;
        });
        this.remove = (id) => __awaiter(this, void 0, void 0, function* () {
            yield User_1.default.destroy({ where: { id } });
        });
    }
}
exports.default = UserService;
