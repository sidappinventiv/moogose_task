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
const express = require('express');
require('dotenv').config();
const app = express();
// import {usermodule} from './models/user';
const database_conn_1 = require("./database_conn");
(0, database_conn_1.dbconn)();
app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`server listing on ${process.env.PORT}`);
}));
