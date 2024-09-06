import { Router } from "express";
import {getCreate, postCreate, putCreate, deleteCreate, patchCreate, headCreate, optionsCreate} from "../controllers/create.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.middleware.js";

const Create = Router();

Create.route('/')
.get(getCreate)
.post(postCreate)
.put(putCreate)
.delete(deleteCreate)
.patch(patchCreate)
.head(headCreate)
.options(optionsCreate)

export default Create;