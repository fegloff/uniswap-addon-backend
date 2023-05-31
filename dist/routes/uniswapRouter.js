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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniswapRouter = void 0;
const express_1 = require("express");
const pairs_1 = require("../api/pairs");
const api_1 = require("../api");
exports.uniswapRouter = (0, express_1.Router)();
exports.uniswapRouter.get("/pool/:pair", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pair } = req.params;
    console.log(pair);
    if (!pair)
        return res.sendStatus(400);
    const id = (0, pairs_1.getPairId)(pair);
    if (!id)
        return res.sendStatus(400);
    const data = yield (0, api_1.getPairPrice)(id);
    res.send({ data: data });
}));
