import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { config } from './config';
import { uniswapRouter } from './routes/uniswapRouter';

dotenv.config();

const app: Express = express();
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