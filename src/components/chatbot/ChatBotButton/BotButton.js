import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import ChatbotUI from "../ChatbotUI/ChatbotUI";

import { DropdownButton, Dropdown, Button } from "react-bootstrap";

import "./BotButton.css";

const BotButt = () => {
  return (
    <Dropdown alignRight drop="up" className="button-sticky">
      <Dropdown.Toggle
        id="chatbot-dropdown"
        className="round-button btn-warning"
      >
        <FontAwesomeIcon icon={faRobot} />
      </Dropdown.Toggle>
      <Dropdown.Menu className="chatbot-box">
        <Dropdown.Header className="font-weight-bolder font-big-size">
          
        </Dropdown.Header>
        <ChatbotUI/>
        <Dropdown.Divider />
      </Dropdown.Menu>
      
    </Dropdown>
    // <button
    //   onClick={handleClick}
    //   className="round-button btn-warning button-sticky"
    //   type="button"
    // >
    //   <FontAwesomeIcon icon={faRobot} />
    // </button>
  );
};

export default BotButt;
