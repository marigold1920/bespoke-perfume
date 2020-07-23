import React from "react";

import "./authentication.styles.scss";

class Authentication extends React.Component {
    toggleForm() {
        const container = document.querySelector(".authentication-container");
        container.classList.toggle("active");
    }

    render() {
        return (
            <section>
                <div className="authentication-container">
                    <div className="user signinBx">
                        <div className="imgBx">
                            <img
                                src="https://i.ibb.co/VpFGd7V/login-bg.jpg"
                                alt="login-bg"
                            />
                        </div>
                        <div className="formBx">
                            <form>
                                <h2>Sign In</h2>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <input type="submit" value="Login" />
                                <p className="sign-up">
                                    Don't have an account?{" "}
                                    <a href="#" onClick={this.toggleForm}>
                                        Sign Up
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="user signupBx">
                        <div className="formBx">
                            <form>
                                <h2>Create an account</h2>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <input type="submit" value="Sign Up" />
                                <p className="sign-up">
                                    Already have an account?{" "}
                                    <a href="#" onClick={this.toggleForm}>
                                        Sign In
                                    </a>
                                </p>
                            </form>
                        </div>
                        <div className="imgBx">
                            <img
                                src="https://i.ibb.co/VpFGd7V/login-bg.jpg"
                                alt="login-bg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Authentication;
