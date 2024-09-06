import User from "../models/user.model.js";

const find = async (_username, _password) => {

    try {
        /// must check for data validation .
        console.log("From UpdateDB : ", _username, _password);
        

        const user = await User.findOne({username: _username});
        console.log(user);
        
        if (!user) {
            throw new Error('User not found.');
        }

        return (_password === user.password) ? true : false;   
        
    } catch (error) {
        console.error('Error updating user.', error);
        throw new Error('Failed to update user.');
    }
}

export {
    find
}