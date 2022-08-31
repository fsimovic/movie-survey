import React from "react";
import PropTypes from "prop-types";
import "./style/validationMessage.scss";

function ValidationMessage({ correct }) {
  return (
    <div className="message-box">
      {correct ? (
        <li className="message-green">Correct.</li>
      ) : (
        <li className="message-red">This field is required.</li>
      )}
    </div>
  );
}

ValidationMessage.propTypes = {
  correct: PropTypes.bool,
};

export default ValidationMessage;
