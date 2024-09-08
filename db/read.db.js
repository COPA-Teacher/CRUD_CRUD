import User from "../models/user.model.js";


export const readUser = async (_username) => {
    try {
        const result = await User.findOne({username: _username}).select("-password -__v -_id -updatedAt");

        console.log("result ::", result);
        
        return result ? result : null;
        
    } catch (error) {
        console.error('Error finding user:', error);
        throw new Error('Failed to find user');
    }
}