import * as yup from "yup";
import YupPassword from 'yup-password';
YupPassword(yup);

const signUpFormSchema = yup.object().shape({
    firstname: yup.string()
        .nullable()
        .label('First Name')
        .required()
        .min(3)
        .max(40),
    lastname: yup.string()
        .nullable()
        .label('Last Name')
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