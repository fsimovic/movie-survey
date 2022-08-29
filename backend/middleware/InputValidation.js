import { object, string, array, number, alternatives } from "joi";

export default validateSurvey = (input) => {
  const schema = object({
    data: object({
      type: string().min(5).required(),
      attributes: object({
        answers: array().items(
          object({
            questionId: string().valid("film", "review").required(),
            answer: alternatives().try(string(), number()).required(),
          })
        ),
      })
        .length(2)
        .required(),
    }),
  });

  return schema.validate(input);
};
