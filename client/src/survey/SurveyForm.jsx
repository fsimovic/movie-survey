import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import isEmpty from "lodash.isempty";
import ValidationMessage from "./survey-compoents/ValidationMessage";
import initialData from "../data/survey";
import { successMsg } from "../data/afterFormMessages";
import { v4 as uuidv4 } from "uuid";
import { Get, Post, services } from "../api/surveyApi";
import {
  Box,
  Button,
  IconButton,
  Rating,
  TextField,
  Tooltip,
} from "@mui/material";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

import "./style/survey.scss";

function SurveyForm({ setStatus }) {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewData, setReviewData] = useState({});

  const [validation, setValidation] = useState({
    movie: null,
    rating: null,
  });

  function validate() {
    if (!movie || !rating) {
      setValidation({ movie: !!movie, rating: !!rating });
      return false;
    }
    return true;
  }

  function send() {
    const valid = validate();
    if (valid) {
      const payload = initialData(movie, rating);
      Post(services.SURVEY, payload, uuidv4())
        .then((res) => {
          const { title, detail } = successMsg;
          setStatus({
            code: res.status,
            title,
            detail,
          });
        })
        .catch((err) => {
          const { title, detail } = err.response.data.errors[0];
          setStatus({ code: err.response.code, title, detail });
        });
    }
  }

  useEffect(() => {
    Get(services.SURVEY)
      .then((res) => {
        const { title, description, questions } = res.data.data.attributes;
        setReviewData({ title, description, questions: [...questions] });
      })
      .catch((err) => {
        const { title, detail } = err.response.data.errors[0];
        setStatus({ code: err.response.status, title, detail });
      });
  }, []);

  return (
    !isEmpty(reviewData) && (
      <Box
        className="box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>{reviewData.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: reviewData.description }}></div>
        <TextField
          id="standard-basic"
          className="text-field"
          label={reviewData.questions[0].label}
          variant="standard"
          value={movie}
          onChange={(event) => setMovie(event.target.value)}
        />
        {validation.movie !== null && (
          <ValidationMessage correct={!!validation.movie} />
        )}
        <div className="tooltip-component">
          <Rating
            name="simple-controlled"
            className="rating-stars"
            value={rating}
            onChange={(_event, newValue) => {
              setValidation(validation, { ...validation, rating: newValue });
              setRating(newValue);
            }}
          />
          <Tooltip
            title={reviewData.questions[1].label}
            className="tooltip-rating"
          >
            <IconButton>
              <HelpRoundedIcon color="disabled" />
            </IconButton>
          </Tooltip>
        </div>
        {validation.rating !== null && (
          <ValidationMessage correct={!!validation.rating} />
        )}
        <Button variant="contained" onClick={() => send()}>
          Submit
        </Button>
      </Box>
    )
  );
}

SurveyForm.propTypes = {
  setStatus: PropTypes.func,
};

export default SurveyForm;
