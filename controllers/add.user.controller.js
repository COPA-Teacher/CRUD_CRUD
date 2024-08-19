import { response } from "../response/response.js"

const getAdd = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Add", "A HTML Page will be render here: which will promp user to type there data (ex : email, password, etc)."))
};

const postAdd = (req, res) => {
    return res.status(200)
    .json(new response ("", null));
};

const putAdd = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
    
};
const deleteAdd = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
};

const patchAdd = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
};

const headAdd = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
};

const optionsAdd = (req, res) => {

    return res.status(200)
    .json(new response ("", null));
};

export {
    getAdd,
    postAdd,
    putAdd,
    deleteAdd,
    patchAdd,
    headAdd,
    optionsAdd
}