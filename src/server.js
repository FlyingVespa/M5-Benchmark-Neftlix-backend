import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import listEndpoints from "express-list-endpoints";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import {
  badRequestErrorHandler,
  notFoundErrorHandler,
  catchAllErrorHandler,
} from "./errorHandlers.js";

import { publicFolderPath, getDataFilePath } from "./utils/fs-utils.js";

dotenv.config();
console.log(process.env.PORT);
const { PORT } = process.env;
const server = express();

// *************************** MIDDLEWARES  *********************************

server.use(cors());
server.use(express.join);
server.use(express.static(publicFolderPath));

// *************************** ROUTE PATHS *********************************

server.use("/media", mediaRouter);

// *************************** ERROR MIDDLEWARES ***************************

server.use(notFoundErrorHandler);
server.use(badRequestErrorHandler);
server.use(catchAllErrorHandler);
