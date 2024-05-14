import mongoose from "mongoose";

const researchersProfileSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    professional: {
            type: String,
            required: [true, "Please provide professional"],
        },
        role: {
            type: String,
            required: [true, "Please provide role"],
        },
        audiencetype: {
            type: String,
            required: [true, "Please select audience type"],
        },
        modeofconnect: {
            type: String,
            required: [true, "Please select mode of connect"],
        },
         problemstatement: {
            type: String,
             required: [true, "Please mention your problem statement"],
         },
})

const User = mongoose.models.researchersProfileSchema || mongoose.model("researchersProfileSchema", researchersProfileSchema);

export default User;