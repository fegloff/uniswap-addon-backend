"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniswapRouter = void 0;
const express_1 = require("express");
const pairs_1 = require("../api/pairs");
const api_1 = require("../api");
exports.uniswapRouter = (0, express_1.Router)();
exports.uniswapRouter.get("/pool/:pair", async (req, res) => {
    const { pair } = req.params;
    console.log(pair);
    if (!pair)
        return res.sendStatus(400);
    const id = (0, pairs_1.getPairId)(pair);
    if (!id)
        return res.sendStatus(400);
    const data = await (0, api_1.getPairPrice)(id);
    res.send({ data: data });
});
