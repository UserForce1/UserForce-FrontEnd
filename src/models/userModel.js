import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide first name"],
    },
    lastname: {
        type: String,
        required: [true, "Please provide last name"],
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    password: {
       type: String,
       required: [true, "Please provide a password"],
    },
    isVerified: {
       type: Boolean,
       default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isProfileSubmitted: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.researchers || mongoose.model("researchers", userSchema);

export default User;