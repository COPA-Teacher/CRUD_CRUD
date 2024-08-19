import { response } from "../response/response.js"

const getDelete = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Delete", "A HTML Page will be render here"))
};

const postDelete = (req, res) => {
    return res.status(200)
    .json(new response ("POST Method is not Allowed", null));
};

const putDelete = (req, res) => {

    return res.status(200)
    .json(new response ("PUT Method is not Allowed", null));
    
};
const deleteDelete = (req, res) => {

    return res.status(200)
    .json(new response ("DELETE Method is not Allowed", null));
};

const patchDelete = (req, res) => {

    return res.status(200)
    .json(new response ("PATCH Method is not Allowed", null));
};

const headDelete = (req, res) => {

    return res.status(200)
    .json(new response ("HEAD Method is not Allowed", null));
};

const optionsDelete = (req, res) => {

    return res.status(200)
    .json(new response ("OPTIONS Method is not Allowed", null));
};

export {
    getDelete,
    postDelete,
    putDelete,
    deleteDelete,
    patchDelete,
    headDelete,
    optionsDelete
}