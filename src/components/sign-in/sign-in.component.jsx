import React from "react";
import { connect } from "react-redux";

import { userLogin } from "../../redux/user/user.actions";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

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
            <div className="sign-in">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="username"
                        type="text"
                        value={username}
                        handleChange={this.handleChange}
                        label="Username"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default connect(null, { userLogin })(SignIn);
