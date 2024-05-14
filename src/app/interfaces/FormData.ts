export interface RsignUpFormData {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export interface PsignUpFormData {
    name: string,
    email: string,
    password: string
}

export interface PprofileFormData {
    jobTitle: string,
    seniority:{value: string, label: string},
    skills: string,
    workemail: string,
    company: string,
    companysize: { value: string, label: string },
    worksetting: { value: string, label: string },
    industry: string,
    smallbusinessowner: { value: string, label: string },
    linkedinprofile: string,
    facebookprofile: string,
    otherprofile: string,
    age: number,
    city: string,
    gender: { value: string, label: string },
    income: string,
    education: { value: string, label: string },
    maritalstatus: { value: string, label: string },
    language: { value: string, label: string },
    homeowner: { value: string, label: string },
    webcam: { value: string, label: string },

}

// export interface PprofileFormData {
//     jobtitle: string,
//     seniority: string,
//     skills: string,
//     workemail: string,
//     company: string,
//     Scompanysize: string,
//     Sworksetting: string,
//     industry: string,
//     Ssmallbusinessowner: string,
//     linkedin: string,
//     facebook: string,
//     othersprofile: string,
//     age: number,
//     city: string,
//     gender: string,
//     income: string,
//     education: string,
//     maritalstatus: string,
//     Swebcam: string,
//     browser: string,
//     operatingsystem: string,
//     smoperatingsystem: string,
//     toperatingsystem: string,

// }