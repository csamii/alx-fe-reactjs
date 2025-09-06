import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function FormikForm () {
    const initValues = { name: '', email: '', password: '' };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    const handleSubmit = async (values) => {
        console.log(values);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log("User registered:", result);
            alert("User registered successfully!");
        } catch (err) {
            console.error("Registration failed:", err);
        }
    }


    <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        <Form>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="email" component="div" />
            <button type="submit">Submit</button>
        </Form>
    </Formik>
}