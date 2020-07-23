import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./signin-and-signup.styles.scss";

const SignInAndSignUp = () => (
    <div className="authentication">
        <div className="container">
            <SignIn />
            <SignUp />
        </div>
    </div>
);

export default SignInAndSignUp;
