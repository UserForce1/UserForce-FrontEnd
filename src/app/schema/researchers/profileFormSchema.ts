import * as yup from "yup";

 const profileFormSchema = yup.object().shape({
    
  professional: yup.object({
            value: yup.string().required("Please select professional"),
          }),
          role: yup.object({
            value: yup.string().required("Please select role"),
          }),
          audiencetype: yup.object({
            value: yup.string().required("Please select audiencetype"),
          }),
          modeofconnect: yup.object({
            value: yup.string().required("Please select modeofconnect"),
          }),
});

export default profileFormSchema;