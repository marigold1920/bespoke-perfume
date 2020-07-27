import React from "react";
import "./ChatbotContent";

const ChatbotContent = (props) => {
    return (
        <li className="css-1qyo5rb" role="listitem">
            <div
                aria-labelledby="webchat__stacked-layout__content--td5pr"
                className="css-hls04x css-10xzw44 webchat__stackedLayout--fromUser"
                role="group"
            >
                <div className="css-9ohtah" id="webchat__stacked-layout__content--td5pr">
                    User said, abc. Sent at June 12 at 2:24 PM.
                </div>
                <div className="webchat__stackedLayout__content">
                    <div aria-hidden="true" className="webchat__row message">
                        <div className="css-1j843a5 css-ageddn from-user bubble">
                            <div className="webchat__bubble__content">
                                <p>{props.response}</p>
                            </div>
                        </div>
                        <div className="filler"></div>
                    </div>
                    {/* <div className="webchat__row">
                        <span aria-hidden="true" className="css-1s8geyi"
                        ><div className="css-9ohtah">Sent at June 12 at 2:24 PM</div>
                            <span aria-hidden="true">Just now</span></span
                        >
                        <div aria-hidden="true" className="filler"></div>
                    </div> */}
                </div>
                <div aria-hidden="true" className="filler"></div>
            </div>
        </li>

    );
};

export default ChatbotContent;