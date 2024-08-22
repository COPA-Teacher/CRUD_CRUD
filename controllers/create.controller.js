import { response } from "../response/response.js"

const getCreate = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Create", "A HTML Page will be render here: these are required :  username, password, {and an object, can have multiple values}"))
};


import { createUser } from "../db/create.db.js"
const postCreate = (req, res) => {
    const { username, password, data } = req.body;
    /// validate the data before inserting it
    console.log("Log from postCreate route : ", username, password, data);
    

    createUser(username, password, data)
    .then( (result) => {
        // console.log("Successfully added :", result);

        return res.status(200)
        .json(new response ("Successfully added :", result));

    })
    .catch((error) => {
        console.log("not added :");

        return res.status(404)
        .json(new response ("not added :", error));

    })


    // return res.status(200)
    // .json(new response ("POST Method is not Allowed", null));
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