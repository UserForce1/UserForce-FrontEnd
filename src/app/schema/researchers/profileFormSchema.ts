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
        .max(1000,"As a 1% operator, we truly understand the power of constraint thinking. Let's keep it concise – limit your words to 500. We value your input!"),
});

export default profileFormSchema;