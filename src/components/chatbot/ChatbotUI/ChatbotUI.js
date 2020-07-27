// import React from "react";
// import "./ChatbotUI.css";

// import repositoryAPI from "../../../fetch/RepositoryAPI";

// import ChatbotContent from "../ChatbotContentBox/ChatbotContent";


// const ChatbotRepo = repositoryAPI.get('chatbot');



// function ChatbotUI() {
//     const [chatbotResponse, setChatbotResponse] = React.useState(
//         [
//             { title: "A", response: "Welcome" },
//             { title: "B", response: "Enjoy" }
//         ]
//     );

//     const [chatbotRequest, setChatbotRequest] = React.useState("");

//     const [chatbotRequestToSendToOtherComponent, setChatbotRequestToSendToOtherComponent] = React.useState("");

//     async function handleSendButtonClick() {
//         returnInputtedTest();
//         sendRequestToChatbotServer();
//     };

//     function returnInputtedTest() {
//         return chatbotRequestToSendToOtherComponent;
//     };

//     function handleError() {
        
//     };

//     async function sendRequestToChatbotServer() {
//         if (chatbotRequest === "") {
//             setChatbotResponse(chatbotResponse => [
//                 ...chatbotResponse
//             ]);
//             return
//         } else {
//             let theRequest = { "customer": "A", "content": chatbotRequest }

//             const respFromServer = await ChatbotRepo.post(theRequest);

//             setChatbotResponse(chatbotResponse => [
//                 ...chatbotResponse, respFromServer[0]
//             ]);
//             console.log(chatbotResponse);
//             return respFromServer;
//         }
//     }

//     const handleEnterText = (event) => {
//         setChatbotRequest(event.target.value);
//         setChatbotRequestToSendToOtherComponent(event.target.value);
//     }

//     // React.useEffect(() => {
//     //     let data;
//     //     async function handle() {
//     //         data = await handleSendButtonClick();
//     //     //     setChatbotResponse(chatbotResponse => [
//     //     //         ...chatbotResponse, data[0]
//     //     //     ]);
//     //     }
//     //     handle();

//     //     console.log(chatbotResponse);
//     //     console.log(data);
//     // }, []);

//     return (
//         <div className="main-chatbotui">
//             <div
//                 x-placement="top-end"
//                 aria-labelledby="chatbot-dropdown"
//                 className="chatbot-box dropdown-menu show dropdown-menu-right"
//             >
//                 <div className="font-weight-bolder font-big-size dropdown-header" role="heading">
//                     Chatbot
//                 </div>
//                 <div className="chatbot-box-inside">
//                     <div
//                         className="css-1t62idy css-990gl9"
//                         role="complementary"
//                         tabindex="-1"
//                         style={{ outline: 0 + "px" }}
//                     >
//                         <div
//                             aria-live="polite"
//                             aria-relevant="all"
//                             className="css-sph49o css-6wwnjx webchat__toaster"
//                             role="log"
//                         >
//                             <ul
//                                 className="webchat__toaster__list"
//                                 id="webchat__toaster__list__xnngr"
//                                 role="region"
//                             ></ul>
//                         </div>
//                         <div className="css-gtdio3 css-mfy564" dir="ltr" role="log">
//                             <div className="css-y1c0xs css-ca0rlf">
//                                 <div aria-hidden="true" className="css-mfy564"></div>
//                                 <ul
//                                     aria-atomic="false"
//                                     aria-live="polite"
//                                     aria-relevant="additions"
//                                     className="css-dhu3ty css-7c9av6"
//                                     role="list"
//                                 >
//                                     {
//                                         chatbotResponse.map((ele, index) => (
//                                             <ChatbotContent response={ele.response} />
//                                         ))
//                                     }
//                                     {
//                                         <ChatbotContent response={returnInputtedTest} />
//                                     }
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="css-9ohtah">Connectivity Status: Connected</div>
//                         <div className="css-eycyw2 css-1882x3w css-1l9a57c" dir="ltr" role="form">
//                             <div
//                                 aria-labelledby="webchat__suggested-actions--lkdhx"
//                                 aria-live="polite"
//                                 role="status"
//                             >
//                                 <div className="css-9ohtah" id="webchat__suggested-actions--lkdhx">
//                                     Suggested Actions Container: Is empty
//                                 </div>
//                             </div>
//                             <div className="main">
//                                 <div className="css-1lzfo2b css-14x775w">
//                                     <input
//                                         aria-hidden="true"
//                                         multiple=""
//                                         role="button"
//                                         tabindex="-1"
//                                         type="file"
//                                     /><button className="css-115fwte" title="Upload file" type="button">
//                                         <svg height="28" viewBox="0 0 25.75 46" width="28">
//                                             <path
//                                                 clip-rule="evenodd"
//                                                 d="M20.75 11.75v21.37a7.69 7.69 0 0 1-.62 3.07 7.95 7.95 0 0 1-4.19 4.19 7.89 7.89 0 0 1-6.13 0 7.95 7.95 0 0 1-4.19-4.19 7.69 7.69 0 0 1-.62-3.07v-22.5a5.27 5.27 0 0 1 .45-2.17 5.69 5.69 0 0 1 3-3 5.48 5.48 0 0 1 4.35 0 5.69 5.69 0 0 1 3 3 5.27 5.27 0 0 1 .45 2.17v22.5a3.41 3.41 0 0 1-.26 1.32 3.31 3.31 0 0 1-1.8 1.8 3.46 3.46 0 0 1-2.63 0 3.31 3.31 0 0 1-1.8-1.8 3.41 3.41 0 0 1-.26-1.32V14h2.25v19.12a1.13 1.13 0 1 0 2.25 0v-22.5a3.4 3.4 0 0 0-.26-1.31 3.31 3.31 0 0 0-1.8-1.8 3.46 3.46 0 0 0-2.63 0 3.31 3.31 0 0 0-1.8 1.8 3.4 3.4 0 0 0-.26 1.31v22.5a5.32 5.32 0 0 0 .45 2.18 5.69 5.69 0 0 0 3 3 5.48 5.48 0 0 0 4.35 0 5.69 5.69 0 0 0 3-3 5.32 5.32 0 0 0 .45-2.18v-21.37z"
//                                             ></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                                 <form className="css-16qahhi css-n2zczk css-1mou18w css-1fe8kfc">
//                                     <input
//                                         aria-label="Message input box"
//                                         data-id="webchat-sendbox-input"
//                                         placeholder="Type your message"
//                                         type="text"
//                                         onChange={handleEnterText}
//                                     // value=""
//                                     />
//                                 </form>
//                                 <div>
//                                     <button className="css-115fwte" title="Send" type="button" onClick={handleSendButtonClick}>
//                                         <svg className="" height="28" viewBox="0 0 45.7 33.8" width="28">
//                                             <path
//                                                 clip-rule="evenodd"
//                                                 d="M8.55 25.25l21.67-7.25H11zm2.41-9.47h19.26l-21.67-7.23zm-6 13l4-11.9L5 5l35.7 11.9z"
//                                             ></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="dropdown-divider" role="separator"></div>
//             </div>

//         </div>
//     );
// };

// export default ChatbotUI;