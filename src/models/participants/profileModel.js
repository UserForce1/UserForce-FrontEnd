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
    // workemail: {
    //     type: String,
    //     required: [true, "Please provide workemail"],
    //     unique: true,
    // },
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
    // smallbusinessowner: {
    //     type: String,
    //     required: [true, "Please provide smallbusinessowner"],
    // },
        linkedinprofile: {
            type: String,
            required: false,
        },
        facebookprofile: {
            type: String,
            required: [true, "Please provide your Facebook profile"],
        },
        // otherprofile: {
        //     type: String,
        //     required: false,
        // },
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
        // income: {
        //     type: Number,
        //     required: [true, "Please provide income"],
        // },
        education: {
            type: String,
            required: [true, "Please provide education"],
        },
        maritalstatus: {
            type: String,
            required: [true, "Please provide marital status"],
        },
        numberofchildren: {
            type: Number,
            required: [true, "Please provide number of children"],
        },
        language: {
            type: String,
            required: [true, "Please provide langauge"],
        },
        homeowner: {
            type: String,
            required: [true, "Do you own a house"],
        },
        carowner: {
            type: String,
            required: [true, "Do you own a car"],
        },
        petparent: {
            type: String,
            required: [true, "Are you a pet parent"],
        },
        creditcard: {
            type: String,
            required: [true, "Do you hold credit card"],
        },
        mobileos: {
            type: String,
            required: [true, "Please Metion your Mobile Phone Operating System"],
        },
        tabletos: {
            type: String,
            required: [true, "Please Metion your Tablet Operating System"],
        },
        laptopos: {
            type: String,
            required: [true, "Please Metion your Laptop Operating System"],
        },
})

const User = mongoose.models.participantsProfile || mongoose.model("participantsProfile", participantProfileSchema);

export default User;