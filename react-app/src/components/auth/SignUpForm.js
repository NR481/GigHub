import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignupForm.css";

const SignUpForm = () => {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const onSignUp = async (e) => {
        e.preventDefault();

        const validationErrors = [];
        const regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(email))
            validationErrors.push("Please enter a valid email");
        if (password !== repeatPassword)
            validationErrors.push(
                "Password and Repeat Password inputs must match",
            );
        if (validationErrors.length === 0) {
            const data = await dispatch(
                signUp(username, firstName, lastName, email, password),
            );

            if (data) {
                data.forEach((item) => {
                    const message = item.split(" : ")[1];
                    validationErrors.push(message);
                });
            }
            return data;
        }
        return setErrors(validationErrors);
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <form onSubmit={onSignUp} className="signup-form">
            <div className="signup-form-errors">
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div>
                <label>First Name</label>
                <input value={firstName} onChange={updateFirstName} required />
            </div>
            <div>
                <label>Last Name</label>
                <input value={lastName} onChange={updateLastName} required />
            </div>
            <div>
                <label>User Name</label>
                <input
                    type="text"
                    name="username"
                    onChange={updateUsername}
                    value={username}
                    required
                ></input>
            </div>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={updateEmail}
                    value={email}
                    required
                ></input>
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}
                    required
                ></input>
            </div>
            <div>
                <label>Repeat Password</label>
                <input
                    type="password"
                    name="repeat_password"
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                ></input>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;
