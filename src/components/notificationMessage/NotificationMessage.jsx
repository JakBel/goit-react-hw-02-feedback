import React from "react";
import PropTypes from "prop-types";

const NotificationMessage = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

NotificationMessage.propTypes = {
  message: PropTypes.string,
};

export default NotificationMessage;
