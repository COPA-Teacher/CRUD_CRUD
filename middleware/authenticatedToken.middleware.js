import jwt from "jsonwebtoken";

const authenticatedToken = async (req, res, next) => {

    /// fetch token from req header
    const token = req.header("Authorization")?.split(' ')[1];

    if(!token)
    {
        res.status(401)
        .json({
            message: 'Access Denied. No token provided.'
        })
    }


    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err)
        {
            res.status(403)
            .json({
                message: 'Invalid Token'
            })
        }

        req.user = user;
    })

    next();
}

export default authenticatedToken;