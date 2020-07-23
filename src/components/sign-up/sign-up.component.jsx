import React from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    state = {
        username: "",
        password: "",
        displayName: "",
        confirmPassword: "",
        gender: "",
        photo: "",
        email: "",
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        const {
            username,
            displayName,
            password,
            confirmPassword,
            gender,
            photo,
            email,
        } = this.state;
        return (
            <div className="sign-up">
                <h2>Sing Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        label="Username"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="text"
                        name="gender"
                        value={gender}
                        onChange={this.handleChange}
                        label="Gender"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
