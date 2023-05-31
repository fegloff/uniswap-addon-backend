import { Request, Response, Router } from "express";

import { getPairId } from "../api/pairs";
import { getPairPrice } from "../api";

export const uniswapRouter = Router();

uniswapRouter.get("/pool/:pair", async (req: Request, res: Response) => {
  const { pair } = req.params;
  console.log(pair);
  if (!pair) return res.sendStatus(400);
  const id = getPairId(pair);
  if (!id) return res.sendStatus(400);
  const data = await getPairPrice(id);
  res.send({ data: data });
});
