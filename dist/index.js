"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config");
const uniswapRouter_1 = require("./routes/uniswapRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = config_1.config.port;
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('Express + TypeScript Server dfsdfdsfssds');
});
router.use("/uniswap", uniswapRouter_1.uniswapRouter);
app.use(router);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
