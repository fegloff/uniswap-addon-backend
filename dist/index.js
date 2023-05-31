"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config");
const uniswapRouter_1 = require("./routes/uniswapRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
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
// {
//   "name": "uniswap-back2",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "build": "npx tsc",
//     "start": "node dist/index.js",
//     "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "axios": "^1.4.0",
//     "cors": "^2.8.5",
//     "dotenv": "^16.1.1",
//     "express": "^4.18.2"
//   },
//   "devDependencies": {
//     "@types/cors": "^2.8.13",
//     "@types/express": "^4.17.17",
//     "@types/node": "^20.2.5",
//     "concurrently": "^8.0.1",
//     "nodemon": "^2.0.22",
//     "pre-commit": "^1.2.2",
//     "rimraf": "^5.0.1"
//   }
// }
