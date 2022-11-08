"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const http_status_codes_1 = require("http-status-codes");
const erroMiddleware_1 = __importDefault(require("./middlewares/erroMiddleware"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', userRoute_1.default);
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('TESTE SIMBIOSE');
});
app.use(erroMiddleware_1.default);
exports.default = app;
