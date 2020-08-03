import React from "react";
import { Redirect } from "react-router-dom";

import { userApi } from "../../apis/api";

import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    state = {
        user: {
            username: "",
            password: "",
            fullName: "",
            address: "",
            email: "",
            phone: "",
        },
        isSignUp: false,
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ user: { ...this.state.user, [name]: value } });
    };

    handleSubmit = event => {
        event.preventDefault();
        const {
            username,
            fullName,
            password,
            address,
            email,
            phone,
        } = this.state.user;
        userApi
            .post("/users/signup-user", {
                username,
                fullName,
                password,
                address,
                email,
                phone,
                gender: 0,
                image: "xxx.png",
            })
            .then(response =>
                this.setState({ isSignUp: response.status === 200 })
            );
    };

    render() {
        const {
            username,
            fullName,
            password,
            address,
            email,
            phone,
        } = this.state.user;
        return !this.state.isSignUp ? (
            <div className="user signupBx">
                <div className="formBx">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Create an account</h2>
                        <FormInput
                            type="text"
                            name="username"
                            placeholder="Tên đăng nhập"
                            value={username}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            value={password}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="text"
                            name="fullName"
                            placeholder="Tên"
                            value={fullName}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="text"
                            name="phone"
                            placeholder="Điện thoại"
                            value={phone}
                            handleChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            handleChange={this.handleChange}
                            required
                        />

                        <FormInput
                            type="text"
                            name="address"
                            placeholder="Địa chỉ"
                            value={address}
                            handleChange={this.handleChange}
                            required
                        />

                        <button type="submit">Sign Up</button>
                        <p className="sign-up">
                            Already have an account?
                            <span onClick={this.props.toggleForm}>
                                {" "}
                                Sign In
                            </span>
                        </p>
                    </form>
                </div>
                <div className="imgBx">
                    <img
                        src="https://i.ibb.co/dGLqhd3/login-bg-2.png"
                        alt="login-bg"
                    />
                </div>
            </div>
        ) : (
            <Redirect to="/dashboard" />
        );
    }
}

export default SignUp;
