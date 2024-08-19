import { response } from "../response/response.js"

const getRead = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Read", "A HTML Page will be render here"))
};

const postRead = (req, res) => {
    return res.status(200)
    .json(new response ("POST Method is not Allowed", null));
};

const putRead = (req, res) => {

    return res.status(200)
    .json(new response ("PUT Method is not Allowed", null));
    
};
const deleteRead = (req, res) => {

    return res.status(200)
    .json(new response ("DELETE Method is not Allowed", null));
};

const patchRead = (req, res) => {

    return res.status(200)
    .json(new response ("PATCH Method is not Allowed", null));
};

const headRead = (req, res) => {

    return res.status(200)
    .json(new response ("HEAD Method is not Allowed", null));
};

const optionsRead = (req, res) => {

    return res.status(200)
    .json(new response ("OPTIONS Method is not Allowed", null));
};

export {
    getRead,
    postRead,
    putRead,
    deleteRead,
    patchRead,
    headRead,
    optionsRead
}