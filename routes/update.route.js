import { Router } from "express";
import {getUpdate, postUpdate, putUpdate, deleteUpdate, patchUpdate, headUpdate, optionsUpdate} from "../controllers/update.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.middleware.js";

const Update = Router();

Update.route('/')
.get(getUpdate)
.post(isAuthenticated, postUpdate)
.put(putUpdate)
.delete(deleteUpdate)
.patch(patchUpdate)
.head(headUpdate)
.options(optionsUpdate)

export default Update;