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
                        <h2>Đăng nhập</h2>
                        <input
                            type="text"
                            name="username"
                            placeholder="Tên đăng nhập"
                            value={username}
                            handleChange={this.handleChange}
                        />
                        <FormInput
                            type="password"
                            name="password"
                            placeholder="Mật khẩu"
                            value={password}
                            handleChange={this.handleChange}
                        />
                        <input type="submit" value="Đăng nhập" />
                        <p className="sign-up">
                            Không có tài khoản?{" "}
                            <span onClick={this.props.toggleForm}>Đăng ký</span>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, { userLogin })(SignIn);
