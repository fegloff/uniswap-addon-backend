import express, { Express, Request, Response } from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import { config } from './config';
import { uniswapRouter } from './routes/uniswapRouter';

dotenv.config();

const app: Express = express();
app.use(cors());

const port = config.port;

const router = express.Router();


router.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server dfsdfdsfssds');
});

router.use("/uniswap", uniswapRouter);

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
