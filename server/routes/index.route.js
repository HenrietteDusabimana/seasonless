import express from "express";
import { seasonRoutes } from "./seasonLess.route.js";

const router = express.Router();

seasonRoutes(router);

export default router;
