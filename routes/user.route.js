import { Router } from "express";

const User = Router();


import {getUser, postUser, putUser, deleteUser, patchUser, headUser, optionsUser} from "../controllers/user.controller.js"
User.route('/')
.get(getUser)
.post(postUser)
.put(putUser)
.delete(deleteUser)
.patch(patchUser)
.head(headUser)
.options(optionsUser)



import {getAdd, postAdd, putAdd, deleteAdd, patchAdd, headAdd, optionsAdd} from "../controllers/add.user.controller.js"
User.route('/add')
.get(getAdd)
.post(postAdd)
.put(putAdd)
.delete(deleteAdd)
.patch(patchAdd)
.head(headAdd)
.options(optionsAdd)

export default User;