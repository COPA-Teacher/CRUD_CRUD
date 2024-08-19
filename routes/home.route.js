import { Router } from "express";
import {getHome, postHome, putHome, deleteHome, patchHome, headHome, optionsHome} from "../controllers/home.controller.js"

const Home = Router();

Home.route('/')
.get(getHome)
.post(postHome)
.put(putHome)
.delete(deleteHome)
.patch(patchHome)
.head(headHome)
.options(optionsHome)

export default Home;
