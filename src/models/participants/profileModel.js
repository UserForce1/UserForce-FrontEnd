import mongoose from "mongoose";

const participantProfileSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    jobTitle: {
        type: String,
        required: [true, "Please provide job title"],
    },
    seniority: {
        type: String,
        required: [true, "Please provide seniority"],
    },
    skills: {
        type: String,
        required: [true, "Please provide skills"],
    },
    workemail: {
        type: String,
        required: [true, "Please provide workemail"],
        unique: true,
    },
    company: {
        type: String,
        required: [true, "Please provide company"],
    },
    companysize: {
        type: String,
        required: [true, "Please provide companysize"],
    },
    worksetting: {
        type: String,
        required: [true, "Please provide worksetting"],
    },
    industry: {
        type: String,
        required: [true, "Please provide industry"],
    },
    smallbusinessowner: {
        type: String,
        required: [true, "Please provide smallbusinessowner"],
    },
    linkedinprofile: {
            type: String,
            required: [true, "Please provide your LinkedIn profile"],
        },
    facebookprofile: {
            type: String,
            required: false,
        },
        otherprofile: {
            type: String,
            required: false,
        },
        age: {
            type: Number,
            required: [true, "Please provide age"],
        },
        city: {
            type: String,
            required: [true, "Please provide city"],
        },
        gender: {
            type: String,
            required: [true, "Please provide age"],
        },
        income: {
            type: Number,
            required: [true, "Please provide income"],
        },
        education: {
            type: String,
            required: [true, "Please provide education"],
        },
        maritalstatus: {
            type: String,
            required: [true, "Please provide maritalstatus"],
        },
        language: {
            type: String,
            required: [true, "Please provide langauge"],
        },
        homeowner: {
            type: String,
            required: [true, "Do you own a house"],
        },
        webcam: {
            type: String,
            required: [true, "Do you have computer with webcam"],
        },
})

const User = mongoose.models.participantsProfile || mongoose.model("participantsProfile", participantProfileSchema);

export default User;