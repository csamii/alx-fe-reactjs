import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ 
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.password.trim()) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            {errors.name && (
                <p style={{backgroundColor: "red"}}>{errors.name}</p>
            )}
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && (
                <p style={{backgroundColor: "red"}}>{errors.email}</p>
            )}
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            {errors.password && (
                <p style={{backgroundColor: "red"}}>{errors.password}</p>
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;