import { Router } from "express";
import {getDelete, postDelete, putDelete, deleteDelete, patchDelete, headDelete, optionsDelete} from "../controllers/delete.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.middleware.js";

const Delete = Router();

Delete.route('/')
.get(getDelete)
.post(postDelete)
.put(putDelete)
.delete(deleteDelete)
.patch(patchDelete)
.head(headDelete)
.options(optionsDelete)

export default Delete;