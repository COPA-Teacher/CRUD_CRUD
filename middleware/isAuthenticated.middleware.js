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
                "Username or Password is not correct OR User might not exist.",
                null
            )
        )
    }
}

export default isAuthenticated
