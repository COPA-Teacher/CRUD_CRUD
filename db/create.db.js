import bcrypt from "bcryptjs"
import User from "../models/user.model.js";

export const createUser = async (_username, _password, _data) => {
    try {

        const encryptPassword = await bcrypt.hash(_password, 10);


        const result = await User.create(
            {
                username: _username,
                password: encryptPassword,
                data: _data
            }
        )

        return result;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
    }
}