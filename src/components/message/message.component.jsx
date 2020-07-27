import React from "react";

import "./message.styles.scss";

const Message = ({ messages, isMine }) => {
    return (
        <div className={`chat-message ${isMine ? "message-me" : ""}`}>
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    );
};

export default Message;
