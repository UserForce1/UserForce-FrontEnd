import * as yup from "yup";
import YupPassword from 'yup-password';
YupPassword(yup);

const signUpFormSchema = yup.object().shape({
    name: yup.string()
        .nullable()
        .label('Name')
        .required()
        .min(3)
        .max(40),
    email: yup.string()
        .nullable()
        .label('Email Address')
        .required()
        .email('Invalid Email Address'),
    password: yup.string()
        .label('Password')
        .password()
        .required()
});

export default signUpFormSchema;