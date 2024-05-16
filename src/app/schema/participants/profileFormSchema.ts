import * as yup from "yup";

const profileFormSchema = yup.object({
  jobTitle: yup.string().required("Job Title is required").min(3).max(15),
  seniority: yup.object({
    value: yup.string().required("Please select seniority"),
  }),
  skills: yup.string().required("Skills is required").min(3).max(15),
  workemail: yup
    .string()
    .nullable()
    .label("Email Address")
    .required()
    .email("Invalid Email Address"),
  company: yup.string().required("Company name is required").min(3).max(15),
  companysize: yup.object({
    value: yup.string().required("Please select company size"),
  }),
  worksetting: yup.object({
    value: yup.string().required("Please select work setting"),
  }),
  industry: yup.string().required("Industry is required").min(3).max(15),
  smallbusinessowner: yup.object({
    value: yup.string().required("Please select your ownership"),
  }),
  linkedinprofile: yup
    .string()
    .nullable()
    .required("LinkedIn profile is required"),
    facebookprofile: yup
    .string(),
    otherprofile: yup
    .string(),
  age: yup
    .number()
    .typeError("Only number is allowed")
    .required("Age is required")
    .min(15)
    .max(100),
  city: yup.string().required("city is required").min(4).max(15),
  gender: yup.object({
    value: yup.string().required("Please select a gender"),
  }),
  income: yup
    .number()
    .typeError("Only number is allowed")
    .required("income is required")
    .min(1),
  education: yup.object({
    value: yup.string().required("Please select your higest education"),
  }),
  maritalstatus: yup.object({
    value: yup.string().required("What is your marital status"),
  }),
  language: yup.object({
    value: yup.string().required("Please select your English proficiency"),
  }),
  homeowner: yup.object({
    value: yup.string().required("Are you a home owner"),
  }),
  webcam: yup.object({
    value: yup.string().required("Do you have computer with webcam"),
  }),
});

export default profileFormSchema;
