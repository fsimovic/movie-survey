export default (movie, rate) => ({
  data: {
    type: "surveyAnswers",
    attributes: {
      answers: [
        {
          questionId: "film",
          answer: movie,
        },
        {
          questionId: "review",
          answer: rate,
        },
      ],
    },
  },
});
