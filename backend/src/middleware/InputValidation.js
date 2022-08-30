import Joi from "joi";

export default function validateSurvey(input) {
  const schema = Joi.object({
    data: Joi.object({
      type: Joi.string().min(5).required(),
      attributes: Joi.object({
        answers: Joi.array().items(
          Joi.object({
            questionId: Joi.string().valid("film", "review").required(),
            answer: Joi.alternatives()
              .try(Joi.string(), Joi.number())
              .required(),
          })
            .length(2)
            .required()
        ),
      }).required(),
    }),
  });

  return schema.validate(input);
}
