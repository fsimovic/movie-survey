import { Router } from "express";
import {
  validationFailed,
  initialData,
  internalServerError,
  relationships,
} from "../data/survey.js";
import validateSurvey from "../middleware/InputValidation.js";

const router = Router();

/**
 * get the the surveys without the answers
 */
router.get("/", async (req, res) => {
  try {
    res.status(200).send(initialData);
  } catch (error) {
    console.log("Get request error: ", error);
    res.status(500).send(internalServerError);
  }
});

/**
 * post a survey with the answers
 * @param: req contains the survey object to store
 */
router.post("/:id/answers", async (req, res) => {
  try {
    const { error, value } = validateSurvey(req.body);
    if (error) {
      console.log(`/${req.params.body}/answers - `, error);
      return res.status(422).send(validationFailed);
    }
    res.status(201).send(Object.assign(value, relationships(req.params.id)));
  } catch (error) {
    console.log(`/${req.params.body}/answers - `, error);
    res.status(500).send(internalServerError);
  }
});

export default router;
