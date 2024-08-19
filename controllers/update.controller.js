import { response } from "../response/response.js"

const getUpdate = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Update", "A HTML Page will be render here"))
};

const postUpdate = (req, res) => {
    return res.status(200)
    .json(new response ("POST Method is not Allowed", null));
};

const putUpdate = (req, res) => {

    return res.status(200)
    .json(new response ("PUT Method is not Allowed", null));
    
};
const deleteUpdate = (req, res) => {

    return res.status(200)
    .json(new response ("DELETE Method is not Allowed", null));
};

const patchUpdate = (req, res) => {

    return res.status(200)
    .json(new response ("PATCH Method is not Allowed", null));
};

const headUpdate = (req, res) => {

    return res.status(200)
    .json(new response ("HEAD Method is not Allowed", null));
};

const optionsUpdate = (req, res) => {

    return res.status(200)
    .json(new response ("OPTIONS Method is not Allowed", null));
};

export {
    getUpdate,
    postUpdate,
    putUpdate,
    deleteUpdate,
    patchUpdate,
    headUpdate,
    optionsUpdate
}