import { response } from "../response/response.js"

const getUser = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from User", "A HTML Page will be render here"))
};

const postUser = (req, res) => {
    return res.status(200)
    .json(new response ("", null));
};

const putUser = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
    
};
const deleteUser = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
};

const patchUser = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
};

const headUser = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
};

const optionsUser = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
};

export {
    getUser,
    postUser,
    putUser,
    deleteUser,
    patchUser,
    headUser,
    optionsUser
}