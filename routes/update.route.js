import { Router } from "express";
import {getUpdate, postUpdate, putUpdate, deleteUpdate, patchUpdate, headUpdate, optionsUpdate} from "../controllers/update.controller.js"

const Update = Router();

Update.route('/')
.get(getUpdate)
.post(postUpdate)
.put(putUpdate)
.delete(deleteUpdate)
.patch(patchUpdate)
.head(headUpdate)
.options(optionsUpdate)

export default Update;