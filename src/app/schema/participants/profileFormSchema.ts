import { Children } from "react";
import * as yup from "yup";
const profileFormSchema = yup.object({
  jobTitle: yup.string().required("Designation is required").min(3).label("Designation"),
  seniority: yup.object({
    value: yup.string().required("Please select seniority"),
  }),
  skills: yup.string().required("Job skills are required").min(3).label("Job skills"),
  // workemail: yup
  //   .string()
  //   .nullable()
  //   .label("Email Address")
  //   .required()
  //   .email("Invalid Email Address"),
  company: yup.string().required("Company name is required").min(3).label("Company name"),
  companysize: yup.object({
    value: yup.string().required("Please select company size"),
  }),
  worksetting: yup.object({
    value: yup.string().required("Please select mode of work"),
  }),
  industry: yup.string().required("Industry domain is required").min(3).label("Industry domain"),
  // smallbusinessowner: yup.object({
  //   value: yup.string().required("Please select your ownership"),
  // }),

  linkedinprofile: yup
    .string()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr)).matches(/^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/, "LinkedIn profile should be a valid URL"),

  facebookprofile: yup
    .string().matches(/^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/, "Facebook profile should be a valid URL")
    .required("Facebook profile is required"),
    
    // otherprofile: yup
    // .string(),
  age: yup
    .number()
    .typeError("Only number is allowed")
    .required("Age is required")
    .min(15)
    .max(100).label("Age"),
  city: yup.string().required("City is required").min(3).label("City"),
  gender: yup.object({
    value: yup.string().required("Please select your gender"),
  }),
  // income: yup
  //   .number()
  //   .typeError("Only number is allowed")
  //   .required("income is required")
  //   .min(1),
  education: yup.object({
    value: yup.string().required("Please select your higest education"),
  }),
  maritalstatus: yup.object({
    value: yup.string().required("What is your marital status"),
  }),
  numberofchildren: yup.number()
  .typeError("Only number is allowed")
  .required("Number of children is required")
  .max(10).label("Number Of children"),
  language: yup.object({
    value: yup.string().required("Please select your english proficiency"),
  }),
  homeowner: yup.object({
    value: yup.string().required("Are you a home owner?"),
  }),
  carowner: yup.object({
    value: yup.string().required("Do you own a car?"),
  }),
  petparent: yup.object({
    value: yup.string().required("Are you a pet parent?"),
  }),
  creditcard: yup.object({
    value: yup.string().required("Do you hold a credit card?"),
  }),
  mobileos: yup.object({
    value: yup.string().required("Please mention your mobile phone operating system"),
  }),
  tabletos: yup.object({
    value: yup.string().required("Please mention your tablet operating system"),
  }),
  laptopos: yup.object({
    value: yup.string().required("Please mention your taptop operating system"),
  }),
});

export default profileFormSchema;
