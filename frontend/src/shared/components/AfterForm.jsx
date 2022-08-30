import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import "../style/shared.scss";

function AfterForm({ message }) {
  return (
    <Box className="container">
      <h1 className="container-title">{message.title}</h1>
      <div className="container-detail">{message.detail}</div>
    </Box>
  );
}

AfterForm.propTypes = {
  message: PropTypes.exact({
    title: PropTypes.string,
    detail: PropTypes.string,
  }).isRequired,
};

export default AfterForm;
