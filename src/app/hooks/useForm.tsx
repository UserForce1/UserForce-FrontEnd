import React, { useState, ChangeEvent, FormEvent } from 'react';
import { scroller } from 'react-scroll';
import * as Yup from 'yup';

type FormProps = {
    FormComponent: React.FC<any>,
    formComponentProps?: FormComponentProps,
    initialFormData: FormData,
    schema: Yup.Schema<FormData>,
    handleSubmit: (e: FormEvent) => Promise<void>,
    isLoading: boolean
};

type FormData = {
    [key: string]: any;
};

type FormComponentProps = {
    formData: FormData;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    errors: { [key: string]: string };
    handleSubmit: (e: FormEvent) => Promise<void>;
};

export default function useForm(props: FormProps) {
    const {
        FormComponent,
        formComponentProps,
        initialFormData,
        schema,
        handleSubmit,
        isLoading
    } = props;

    // Initialize errors object with empty string values for each form field
    const initialErrors: { [key: string]: string } = {};
    for (const k in initialFormData) {
        initialErrors[k] = '';
    }

    // Set up state variables for formData and errors
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<{ [key: string]: string }>(
        initialErrors
    );

    // Handle input change events for the form fields
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    // Validate the form using the Yup schema
    async function validateForm(): Promise<boolean> {
        // Reset errors object
        setErrors(initialErrors);
        try {
            await schema.validate(formData, { abortEarly: false });
            return true;
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                // Retrieve the first validation error and its associated form field
                const errField = err?.inner[0]?.path || '' as string;
                const errMess = err.errors[0];
                // Scroll to the form field and display the validation error message
                scroller.scrollTo(errField, {
                    duration: 700,
                    delay: 100,
                    smooth: true,
                    offset: -50
                });
                // Log the error to the console and update the errors object
                console.error(errField, errMess);
                setErrors((oldData) => ({
                    ...oldData,
                    [errField]: errMess
                }));
            }
            return false;
        }
    }

    function getFormData(): FormData {
        return formData;
    }

    function resetForm() {
        setFormData(initialFormData);
        setErrors(initialErrors);
    }

    const assignProps = {
        formData,
        handleInputChange,
        errors,
        handleSubmit
    }

    function render() {
        return (
            <div className={`w-full relative ${isLoading ? 'opacity-60' : ''}`}>
                
                <FormComponent {...assignProps} {...formComponentProps}
                />
            </div>
        );
    }

    return {
        getFormData,
        setFormData,
        render,
        resetForm,
        validateForm
    };
}