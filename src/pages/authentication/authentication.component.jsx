import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

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
                    <SignIn toggleForm={this.toggleForm} />
                    <SignUp toggleForm={this.toggleForm} />
                </div>
            </section>
        );
    }
}

export default Authentication;
