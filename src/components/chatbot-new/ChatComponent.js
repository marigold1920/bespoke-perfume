import React, { useState, useEffect } from "react";
import { } from "react-bootstrap";
import { axiosBaseType } from "../../fetch/AxiosBase";
import * as signalr from "@aspnet/signalr";

// import axios from "axios";

import "./ChatComponent.css";
import SenderDiv from "./SenderDiv/SenderDiv";
import ReceiveDiv from "./ReceiveDiv/ReceiveDiv";
import SenderCardDiv from "./SenderDiv/SenderCardDiv";

const axiosBase = axiosBaseType('chat');
const connect = new signalr.HubConnectionBuilder()
  .withUrl("https://buttchatloginservice.azurewebsites.net/chat")
  .build();

const ChatEndpoint = "/dialogflow";
export default function (props) {
  const [input, setInput] = useState("");
  const [msgs, setMsg] = useState([]);
  const [userName, setUserName] = useState("");

    const [sessionId, setSessionId] = useState("123455678");

    const [isStart, setIsStart] = useState(false);

    const [logged, setLogged] = useState("");

    let textInp = React.createRef();
    let scrollDiv = React.createRef();

    const handleEnterUsername = () => {
        console.log("username");
        console.log(userName);
        const requestObj = {
            userName : userName,
            sessionId : null,
            chatContent : null
        }
        axiosBase.post('http://localhost:8991/chat/dialogflow-greeting', requestObj)
        .then(response => {
            if (response.data) {
                const theMessage = response.data.response;
                setSessionId(response.data.sessionId);
                console.log("session id: ");
                console.log(sessionId);

                if (response.data.responseType == 1) {
                    theMessage.customData = [];
                }

                if (typeof theMessage === 'object') {
                    const res = {
                        type: 'cardSender',
                        message: theMessage.message,
                        customData: theMessage.customData
                    }
                    setMsg((msg) => [...msg, res]);
                }
            }
        })
    }

    const handleElementChosen = (chosenElement) => {
        setInput(chosenElement);
    }

    const msgClassify = ({ type, message, userName, customData }) => {
        // console.log(msgs);
        if (type === "receiver") {
            return <ReceiveDiv message={message} username={userName} />;
        } else if (type === "sender") {
            return <SenderDiv message={message} username={userName} customData={customData} />;
        } else if (type === "cardSender") {
            return <SenderCardDiv message={message} username={userName} customData={customData} onSelectElement={handleElementChosen}/>;
        }
    };

    const connectChat = () => {
        connect
            .start()
            .then(() => {
                setLogged("Connected to chat!");
                setIsStart(true);
                console.log("Connected!");
            })
            .catch((err) => console.error("SignalR Connection Error: ", err));

        connect.on("ReceiveMessage", (user, message) => {
            console.log("Rei: " + message);
            const receiveObj = { type: "sender", message, userName: user };
            setMsg((msgs) => [...msgs, receiveObj]);
        });
    };

    const sendMsg = (event) => {
        if (event.key === "Enter") {
            // connect.invoke("SendMessage", userName, input);
            const inputObj = { type: "receiver", message: input, userName: userName };
            setMsg((msgs) => [...msgs, inputObj]);
            const requestMsg = {
                chatContent: [input],
                sessionId: sessionId,
                userName: userName,
            };
            callAPI(requestMsg);
            setInput("");
        }
    };

    const handlePress = (e) => {
        if (e.key === "Enter") {
            connectChat();
        }
    };

    const callAPI = (message) => {
        axiosBase.post(`${ChatEndpoint}`, message)
        // axiosBase.post('https://bespoke-scent-8991.herokuapp.com/chat/dialogflow', message)
            .then(response => {
                console.log(response.data.response);
                setSessionId(response.data.sessionId);
                const theMessage = response.data.response;
                let messageType = "sender";
                if (response.data.responseType === 1 || response.data.responseType === -1) {
                    messageType = "sender";
                } else if (response.data.responseType === 5 || response.data.responseType === 13) {
                    messageType = "cardSender";
                }
                // setMsg(msg => [
                //   ...msg,theMessage
                // ])

                let res = {
                    type: messageType,
                    message: theMessage,
                    customData: []
                };

                if (typeof theMessage === 'object') {
                    res = {
                        type: messageType,
                        message: theMessage.message,
                        customData: theMessage.customData
                    }
                }
                if (Array.isArray(theMessage)) {
                    console.log("I am array");
                    console.log(theMessage);
                    console.log(theMessage[0]);
                    res = {
                        type: messageType,
                        message: theMessage[0],
                        customData: []
                    }
                }
                setMsg((msg) => [...msg, res]);
            });

    }
    //Scroll to bottom
    const scrollToEnd = () => {
        scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    }
    //If get more msg run update 
    useEffect(() => {
        scrollToEnd();
    }, [msgs]);

    return (
        <div>
            {/* Hello world */}
            <div className="row rounded-lg overflow-hidden shadow">
                {/* Users box*/}
                {/* Chat Box*/}
                <div className="col-12 px-0">
                    <div className="px-4 py-5 chat-box bg-white">
                        {/* Sender Message*/}

                        {msgs.length > 0 ? (
                            msgs.map((msg, index) => (
                                <div key={index}>{msgClassify(msg)}</div>
                            ))
                        ) : (
                                <div></div>
                            )}
                        <div ref={scrollDiv}></div>
                        {/* Typing area */}
                    </div>

                </div>
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Type a message"
                    aria-describedby="button-addon2"
                    className="form-control rounded-0 border-0 py-4 bg-light"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyPress={sendMsg}
                    ref={textInp}
                />
            </div>
            <div>
                <input
                    type="text"
                    onChange={(event) => setUserName(event.target.value)}
                    placeholder="Your name"
                    onKeyPress={handlePress}
                />
                <button onClick={handleEnterUsername}>Enter</button>
            </div>
        </div>
    );
}
