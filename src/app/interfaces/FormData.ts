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

export interface PsignInFormData {
    email: string,
    password: string
}

export interface RsignInFormData {
    email: string,
    password: string
}

export interface PprofileFormData {
    jobTitle: string,
    seniority: {value: string, label: string},
    skills: string,
    //workemail: string,
    company: string,
    companysize: { value: string, label: string },
    worksetting: { value: string, label: string },
    industry: string,
    // smallbusinessowner: { value: string, label: string },
    linkedinprofile: string,
    facebookprofile: string,
    // otherprofile: string,
    age: number,
    city: string,
    gender: { value: string, label: string },
    // income: number,
    education: { value: string, label: string },
    maritalstatus: { value: string, label: string },
    numberofchildren: number,
    language: { value: string, label: string },
    homeowner: { value: string, label: string },
    carowner: { value: string, label: string },
    petparent: { value: string, label: string },
    creditcard: { value: string, label: string },
    mobileos: { value: string, label: string },
    tabletos: { value: string, label: string },
    laptopos: { value: string, label: string },
}

export interface RprofileFormData {
    professional: { value: string, label: string },
    role: { value: string, label: string },
    audiencetype: { value: string, label: string },
    modeofconnect: { value: string, label: string },
    problemstatement: string,
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