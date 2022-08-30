import { v4 as uuidv4 } from "uuid";

export const initialData = {
  data: {
    type: "surveys",
    id: uuidv4(),
    attributes: {
      title: "Film feedback form",
      description:
        "<p>Thank you for participating in the film festival!</p><p>Please fill out this short survey so we can record your feedback.</p>",
      questions: [
        {
          questionId: "film",
          questionType: "text",
          label: "What film did you watch?",
          required: true,
          attributes: null,
        },
        {
          questionId: "review",
          questionType: "rating",
          label: "How would you rate the film? (1 - Very bad, 5 - Very good)",
          required: true,
          attributes: {
            min: 1,
            max: 5,
          },
        },
      ],
    },
  },
};

export const relationships = (requestId) => ({
  relationships: {
    survey: {
      data: {
        type: "surveys",
        id: requestId,
      },
    },
  },
});

export const validationFailed = {
  errors: [
    {
      source: { pointer: "data/attributes/answers/film" },
      detail: "The value is required",
    },
    {
      source: { pointer: "data/attributes/answers/review" },
      detail: "The value is required",
    },
  ],
};

export const internalServerError = {
  errors: [
    {
      title: "Internal Server Error",
      detail: "Something went wrong. We're working on it!",
    },
  ],
};
