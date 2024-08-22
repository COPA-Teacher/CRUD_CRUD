import User from "../models/user.model.js";


export const deleteUser = async (_username) => {
    try {
        const result = await User.findOneAndDelete({username: _username});

        console.log("result ::",result);
        
        return result ? result : null;
        
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Failed to deleting user');
    }
}