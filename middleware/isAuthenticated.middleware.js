import {find} from "../db/find.db.js";
import {response} from "../response/response.js";

const isAuthenticated = async (req, res, next) => {
    const {username, password} = req.body;

    if(await find(username, password))
    {
        next()
    }
    else
    {
        res.status(401)
        .json(
            new response(
                "This response code means that authentication is required and has either not been provided or is invalid. The server expects the client to provide proper authentication credentials.",
                null
            )
        )
    }
}

export default isAuthenticated
