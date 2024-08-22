import { Schema, model } from "mongoose";
import { DEFAULT_PASSWORD } from "../constants.js"


const UserSchema = new Schema({
    username : {
        type : String,
        unique : true,
        trim : true,
        set: (value) => value.toLowerCase(),
        required : true
    },
    password : {
        type : String,
        trim : true,
        required : true,
        default : DEFAULT_PASSWORD
    },
    data: {
        type: Schema.Types.Mixed,
        default: {}
    }
},
{
    timestamps: true
})

UserSchema.index({ username: 1 });

const User = model("User", UserSchema);

export default User;