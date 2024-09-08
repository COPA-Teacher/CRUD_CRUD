import User from "../models/user.model.js";

export const updateUser = async (_username, _data) => {

    try {
        /// must check for data validation .
        console.log("From UpdateDB : ", _username, _data);
        

        const user = await User.findOne({username: _username});
        console.log(user);
        
        if (!user) {
            throw new Error('User not found.');
        }

        // Merge the new fields into the existing data
        const updatedData = { ...user.data, ..._data };

        console.log(updatedData);
        



        const result = await User.findOneAndUpdate(
            {username: _username},
            {$set: {data: updatedData}},
            {new: true, }
        ).select("-password -__v -_id -updatedAt")

        console.log("\nresult:UpdateDB: ", result);
        
        if(!result)
            throw new Error("User Not Found.")

        return result;
        
    } catch (error) {
        console.error('Error updating user.', error);
        throw new Error('Failed to update user.');
    }
}
