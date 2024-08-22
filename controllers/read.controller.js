import { response } from "../response/response.js"

const getRead = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Read", "A HTML Page will be render here"))
};


import { readUser } from "../db/read.db.js"; 
const postRead = (req, res) => {


    const { username } = req.body;
    /// validate the data before inserting it
    console.log("Log from postCreate route : ", username);
    

    readUser(username)
    .then( (result) => {
        
        let userFound = "User Found";
        if(!result)
        {
            userFound = "not Found";
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