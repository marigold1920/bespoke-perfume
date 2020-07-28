import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";

import { userLogin } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
    state = {
        username: "",
        password: "",
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;
        this.props.userLogin(username, password);
    };

    render() {
        const { username, password } = this.state;
        return (
            <div className="user signinBx">
                <div className="imgBx">
                    <img
                        src="https://i.ibb.co/BZt31yw/login-bg-1.png"
                        alt="login-bg"
                    />
                </div>
                <div className="formBx">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Sign In</h2>
                        <FormInput
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            handleChange={this.handleChange}
                        />
                        <FormInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            handleChange={this.handleChange}
                        />
                        <input type="submit" value="Login" />
                        <p className="sign-up">
                            Don't have an account?
                            <span onClick={this.props.toggleForm}>Sign Up</span>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, { userLogin })(SignIn);
