import { response } from "../response/response.js"

const getHome = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Home", "A HTML Page will be render here"))
};

const postHome = (req, res) => {
    return res.status(200)
    .json(new response ("POST Method is not Allowed", null));
};

const putHome = (req, res) => {

    return res.status(200)
    .json(new response ("PUT Method is not Allowed", null));
    
};
const deleteHome = (req, res) => {

    return res.status(200)
    .json(new response ("DELETE Method is not Allowed", null));
};

const patchHome = (req, res) => {

    return res.status(200)
    .json(new response ("PATCH Method is not Allowed", null));
};

const headHome = (req, res) => {

    return res.status(200)
    .json(new response ("HEAD Method is not Allowed", null));
};

const optionsHome = (req, res) => {

    return res.status(200)
    .json(new response ("OPTIONS Method is not Allowed", null));
};

export {
    getHome,
    postHome,
    putHome,
    deleteHome,
    patchHome,
    headHome,
    optionsHome
}