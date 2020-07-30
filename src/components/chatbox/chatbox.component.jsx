import React from "react";

import FormInput from "../form-input/form-input.component";
import Message from "../message/message.component";

import "./chatbox.styles.scss";
import Axios from "axios";


// const Chatbox = () => (
function Chatbox() {
    const [msgs, setMsgs] = React.useState([]);
    const [input, setInput] = React.useState("");
    const [sessionId, setSessionId] = React.useState("123455678");

    const msgClassify = ({ type, message, userName, customData }) => {
        // console.log(msgs);
        if (type === "receiver") {
            return <Message
                messages={message}
                isMine
            />;
        } else if (type === "sender") {
            return <Message messages={message} />;
        }
        // else if (type === "cardSender") {
        //     return <SenderCardDiv message={message} username={userName} customData={customData} onSelectElement={handleElementChosen}/>;
        // }
    };

    const sendMsg = (event) => {
        if (event.key === "Enter") {
            // connect.invoke("SendMessage", userName, input);
            const inputObj = { type: "receiver", message: input, userName: "userName" };
            setMsgs((msgs) => [...msgs, inputObj]);
            const requestMsg = {
                chatContent: [input],
                sessionId: sessionId,
                userName: "userName",
            };
            callAPI(requestMsg);
            setInput("");
        }
    };

    const callAPI = (message) => {

        // Axios.post(`${ChatEndpoint}`, message)
        Axios.post('https://bespoke-scent-8991.herokuapp.com/chat/dialogflow', message)
            .then(response => {
                console.log(response.data.response);
                setSessionId(response.data.sessionId);

                let res = {
                    type: "sender",
                    message: response.data.response,
                    customData: []
                };

                setMsgs((msg) => [...msg, res]);
            });

    }

    return (
        <div className="chatbox">
            <div className="header">
                <h3>Chatbox đây nè</h3>
            </div>
            <div className="message-box">
                {/* <FormInput type="text" placeholder="Message..."/> */}
                <input type="text"
                    onKeyPress={sendMsg}
                    onChange={(event) => setInput(event.target.value)}
                    value={input}></input>
                <span>
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </span>
            </div>
            {/* <div className="messages">
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
        </div> */}


            <div className="messages">
                {msgs.length > 0 ? (
                    msgs.map((msg, index) => (
                        <div key={index}>{msgClassify(msg)}</div>
                    ))
                ) : (
                        <div></div>
                    )}
            </div>
        </div>
    );
}

export default Chatbox;
