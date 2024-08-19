import User from "../models/user.model.js";

export const createUser = async (_username, _password, _data) => {
    try {
        const result = await User.create(
            {
                username: _username,
                password: _password,
                data: _data
            }
        )

        return result;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
    }
}