import React from "react";

import FormInput from "../form-input/form-input.component";
import Message from "../message/message.component";

import "./chatbox.styles.scss";

const Chatbox = () => (
    <div className="chatbox">
        <div className="header">
            <h3>Chatbox đây nè</h3>
        </div>
        <div className="message-box">
            <FormInput type="text" placeholder="Message..." />
            <span>
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </span>
        </div>
        <div className="messages">
            <Message
                messages={[
                    "I want to book an perfume!",
                    "Can you give me some awesome guilds!",
                ]}
                isMine="me"
            />
            <Message
                messages={[
                    "What is your gender?",
                    "Male, Female or Undefined?",
                ]}
            />
            <Message
                messages={[
                    "I cann't understand English?",
                    "Vietnamese please!",
                ]}
                isMine
            />
            <Message
                messages={[
                    "Chiều bạn luôn!",
                    "Giới tính của bạn là gì?",
                    "Name, Nữ hay Không xác định được?",
                ]}
            />
            <Message
                messages={["Tui nam nhé", "Cho tui mấy chai mạnh mạnh nào!"]}
                isMine
            />
            <Message
                messages={[
                    "Ukie!",
                    "Thứ 3, 23/07/2020 lên chỗ tui tậm sự nhó!",
                ]}
            />
            <Message messages={["Vơn!", "Cảm ơn bot!"]} isMine />
            <Message messages={["No problem!"]} />
        </div>
    </div>
);

export default Chatbox;
