import { response } from "../response/response.js"

const getCreate = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Create", "A HTML Page will be render here: these are required :  username, password, {and an object, can have multiple values}"))
};

const postCreate = (req, res) => {
    return res.status(200)
    .json(new response ("POST Method is not Allowed", null));
};

const putCreate = (req, res) => {

    return res.status(200)
    .json(new response ("PUT Method is not Allowed", null));
    
};
const deleteCreate = (req, res) => {

    return res.status(200)
    .json(new response ("DELETE Method is not Allowed", null));
};

const patchCreate = (req, res) => {

    return res.status(200)
    .json(new response ("PATCH Method is not Allowed", null));
};

const headCreate = (req, res) => {

    return res.status(200)
    .json(new response ("HEAD Method is not Allowed", null));
};

const optionsCreate = (req, res) => {

    return res.status(200)
    .json(new response ("OPTIONS Method is not Allowed", null));
};

export {
    getCreate,
    postCreate,
    putCreate,
    deleteCreate,
    patchCreate,
    headCreate,
    optionsCreate
}