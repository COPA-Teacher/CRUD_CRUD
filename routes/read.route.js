import { Router } from "express";
import {getRead, postRead, putRead, deleteRead, patchRead, headRead, optionsRead} from "../controllers/read.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.middleware.js";

const Read = Router();

Read.route('/')
.get(getRead)
.post(isAuthenticated, postRead)
.put(putRead)
.delete(deleteRead)
.patch(patchRead)
.head(headRead)
.options(optionsRead)

export default Read;