import * as yup from "yup";
import YupPassword from 'yup-password';
YupPassword(yup);

const signInFormSchema = yup.object().shape({
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

export default signInFormSchema;