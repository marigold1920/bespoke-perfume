import React from "react";
import { useState, useEffect } from "react";

import Message from "../message/message.component";
import FormInput from "../form-input/form-input.component";

import "./chatbox.styles.scss";
import Axios from "axios";

// const Chatbox = () => (
function Chatbox() {
   const [msgs, setMsgs] = useState([]);
   const [input, setInput] = useState("");
   const [sessionId, setSessionId] = React.useState("123455678");

   const msgClassify = ({ type, message, userName, customData }) => {
      // console.log(msgs);
      if (type === "receiver") {
         return <Message messages={message} isMine />;
      } else if (type === "sender") {
         return <Message messages={message} />;
      }
      // else if (type === "cardSender") {
      //     return <SenderCardDiv message={message} username={userName} customData={customData} onSelectElement={handleElementChosen}/>;
      // }
   };

   useEffect(() => {
      scrollToBottom();
   }, [msgs]);

   const sendMsg = event => {
      if (event.key === "Enter") {
         // connect.invoke("SendMessage", userName, input);
         const inputObj = { type: "receiver", message: input, userName: "userName" };
         setMsgs(msgs => [...msgs, inputObj]);
         const requestMsg = {
            chatContent: [input],
            sessionId: sessionId,
            userName: "userName",
         };
         callAPI(requestMsg);
         setInput("");
      }
   };

   const callAPI = message => {
      // Axios.post(`${ChatEndpoint}`, message)
      Axios.post("https://bespoke-scent-8991.herokuapp.com/chat/dialogflow", message).then(response => {
         console.log(response.data.response);
         setSessionId(response.data.sessionId);

         let res = {
            type: "sender",
            message: response.data.response.message,
            customData: [],
         };

         setMsgs(msg => [...msg, res]);
         scrollToBottom();
      });
   };

   const scrollToBottom = () => {
      const chat = document.getElementById("chatList");
      if (chat) {
         console.log("Hello");
         chat.scrollTop = chat.scrollHeight;
      }
   };

   return (
      <div className="chatbox">
         <div className="header">
            <h3>Tư vấn chọn nước hoa</h3>
         </div>
         <div className="message-box">
            <div className="box">
               <input
                  type="text"
                  onKeyPress={sendMsg}
                  onChange={event => setInput(event.target.value)}
                  value={input}
                  placeholder="Tin nhắn..."
               ></input>
               <span>
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
               </span>
            </div>
         </div>
         <div className="messages" id="chatList">
            {msgs.length > 0 ? msgs.map((msg, index) => <div key={index}>{msgClassify(msg)}</div>) : <div></div>}
         </div>
      </div>
   );
}

export default Chatbox;
