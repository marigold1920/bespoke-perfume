import React from "react";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    state = {
        username: "",
        password: "",
        fullName: "",
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
            fullName,
            password,
            gender,
            photo,
            email,
        } = this.state;
        return (
            <div className="user signupBx">
                <div className="formBx">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Create an account</h2>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your Name"
                            value={fullName}
                            onChange={this.handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo"
                            value={photo}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            value={gender}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="Sign Up" />
                        <p className="sign-up">
                            Already have an account?{" "}
                            <span onClick={this.props.toggleForm}>Sign In</span>
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
        );
    }
}

export default SignUp;
