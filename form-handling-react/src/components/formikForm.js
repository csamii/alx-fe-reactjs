import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

console.log("Form")
const initValues = { username: '', email: '', password: '' };

const validationSchema = Yup.object({
    username: Yup.string().required('Userame is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be 6 characters or above').required('Password is required'),
})

export default function FormikForm () {
    const handleSubmit = async (values) => {
        console.log(values);
        console.log("THE FORM");
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const result = await response.json();
            console.log("User registered:", result);
            alert("User registered successfully!");
        } catch (err) {
            console.error("Registration failed:", err);
        }
    }

    return (
        <Formik
            initialValues={initValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <Field type="text" name="username" placeholder="Username" />
                    <ErrorMessage name="username" component="div" />
                </div>
                <div>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}