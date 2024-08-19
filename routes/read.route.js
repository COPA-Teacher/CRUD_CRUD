import { Router } from "express";
import {getRead, postRead, putRead, deleteRead, patchRead, headRead, optionsRead} from "../controllers/read.controller.js"

const Read = Router();

Read.route('/')
.get(getRead)
.post(postRead)
.put(putRead)
.delete(deleteRead)
.patch(patchRead)
.head(headRead)
.options(optionsRead)

export default Read;