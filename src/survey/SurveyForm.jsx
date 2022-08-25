import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ValidationMessage from "./survey-compoents/ValidationMessage";

import "./style/survey.scss";

function SurveyForm() {
  const [movieValue, setMovieValue] = useState("");
  const [ratingValue, setRatingValue] = useState(0);

  const [validation, setValidation] = useState({
    movie: null,
    rating: null,
  });

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    answers: [
      {
        questionId: "film",
        answer: "",
      },
      {
        questionId: "review",
        answer: "",
      },
    ],
  });

  function checkValidaton() {
    if (!movieValue || !ratingValue) {
      setValidation({ movie: !!movieValue, rating: !!ratingValue });
      return false;
    }
    return true;
  }

  function sendForm() {
    const valid = checkValidaton();
    if (valid) {
      // Send request
      console.log("Valid!");
    } else {
      console.log("Invalid: ", validation);
    }
  }

  return (
    <Box
      className="box"
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Movie Survey</h2>
      <p>Thank you for participating in the film festival!</p>
      <p>Please fill out this short survey so we can record your feedback.</p>
      <TextField
        id="standard-basic"
        className="text-field"
        label="What film did you watch?"
        variant="standard"
        value={movieValue}
        onChange={(event) => setMovieValue(event.target.value)}
      />
      {validation.movie !== null && (
        <ValidationMessage correct={!!validation.movie} />
      )}
      <Rating
        name="simple-controlled"
        className="rating"
        value={ratingValue}
        onChange={(_event, newValue) => {
          setValidation(validation, { ...validation, rating: newValue });
          setRatingValue(newValue);
        }}
      />
      {validation.rating !== null && (
        <ValidationMessage correct={!!validation.rating} />
      )}
      <Button variant="contained" onClick={() => sendForm()}>
        Submit
      </Button>
    </Box>
  );
}

export default SurveyForm;
