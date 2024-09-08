import { response } from "../response/response.js"

const getUpdate = (req, res) => {

    return res.status(200)
    .json(new response ("GET Request accept from Update", "A HTML Page will be render here"))
};



import { updateUser } from "../db/update.db.js"
const postUpdate = (req, res) => {

    const { username, data } = req.body;
    /// validate the data before inserting it
    console.log("Log from postUpdate route : ", username);
    

    updateUser(username, data)
    .then( (result) => {
        
        let userFound = "User Found & Data Updated";
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