import * as yup from "yup";

 const profileFormSchema = yup.object().shape({
    
  professional: yup.object({
            value: yup.string().required("Please select professional"),
          }),
          role: yup.object({
            value: yup.string().required("Please select role"),
          }),
          audiencetype: yup.object({
            value: yup.string().required("Please select audience type"),
          }),
          modeofconnect: yup.object({
            value: yup.string().required("Please select mode of connect"),
          }),
          
        problemstatement: yup.string()
        .required("Problem statement is required")
        .min(50)
        .max(200),
});

export default profileFormSchema;