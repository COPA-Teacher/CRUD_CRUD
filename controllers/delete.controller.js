import { response } from "../response/response.js"

const getDelete = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Delete", "A HTML Page will be render here"))
};


import { deleteUser } from "../db/delete.db.js";
const postDelete = (req, res) => {
    
    
    const { username, password } = req.body;
    /// validate the data before inserting it
    console.log("Log from postCreate route : ", username);
    

    deleteUser(username)
    .then( (result) => {
        
        let userFound = "User Found & Data Daleted";
        if(!result)
        {
            userFound = "User not Found: Faild to update the Data.";
        }

        console.log("-----> " + userFound);
        
        return res.status(200)
        .json(new response (userFound, result));

    })
    .catch((error) => {
        console.log("----> not Found");

        return res.status(404)
        .json(new response ("not Found :", error));
    })
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