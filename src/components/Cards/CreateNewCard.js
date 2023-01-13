import React, { useState } from "react";
import "./CreateNewCard.css";
function CreateNewCard(props) {
  const [cardMessage, setCardMessage] = useState("");

  const cardMessageHandler = (event) => {
    setCardMessage(event.target.value);
  };

  return (
    <div>
      <h1 id='new-card-section-header'>Create a New Card</h1>
      <form className='new-card-form'>
        {/* <label for='new-card-input' style={{ alignSelf: "center" }}>
          Message
        </label> */}
        <input
          id='new-card-input'
          placeholder='Type Message'
          type='text'
          value={cardMessage}
          onChange={cardMessageHandler}
        />
        <button
          className='btn-submit'
          onClick={(e) => {
            props.cardMessagesDisplay(cardMessage);
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateNewCard;
