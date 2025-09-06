import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ 
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const { username, email, password } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!username.trim()) newErrors.username = "Name is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={username}
                onChange={handleChange}
            />
            {errors.name && (
                <p style={{backgroundColor: "red"}}>{errors.name}</p>
            )}
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            {errors.email && (
                <p style={{backgroundColor: "red"}}>{errors.email}</p>
            )}
            <input
                type="password"
                name="password"
                value={password}
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